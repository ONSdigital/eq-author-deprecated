from django.db import transaction
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.mixins import ListModelMixin
from rest_framework.generics import GenericAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .exceptions import SurveyNotFoundException, BadRequestException, SchemaValidationException, InternalServerError
from .parsers import PlainJSONParser
from .serializers import SchemaSerializer, SurveySerializer
from .models import SchemaMeta, Survey
from jsonschema import validate, ValidationError
from .schema_storage import SchemaStorageFactory, SchemaStorageError
import json
import logging
import config


logger = logging.getLogger(__name__)

json_schema_file = open(config.EQ_JSON_SCHEMA_FILE).read()
json_schema = json.loads(json_schema_file)


class Schema(GenericAPIView, ListModelMixin):
    """
    The Schema API Endpoint allows you create new and questionnaire schemas and list existing ones
    """
    queryset = SchemaMeta.objects.all()
    serializer_class = SchemaSerializer
    parser_classes = (PlainJSONParser,)

    @transaction.atomic
    def post(self, request):
        """
        Create a Schema

        Override post as we want specialized behaviour to store schema in S3 rather than the Database
        ---
        parameters:
            - title:
              type: string
              paramType: form
              required: false
        """
        try:
            original_json = request.data.decode()
            logger.debug("Converting %s request to json data", original_json)
            json_data = json.loads(original_json)
            logger.debug("Converting %s request to json data", request.data)
        except ValueError as e:
            logger.error("Schema cannot be converted to json")
            raise BadRequestException()

        # Run it through the json schema validator to make sure there are
        # no errors present. TODO give a more meaningful error message.

        try:
            validate(json_data, json_schema)
        except ValidationError as e:
            logger.error("Schema failed validation %s", e.message)
            raise SchemaValidationException()

        logger.debug("JSON Data is : %s", json_data)

        survey_id = json_data.get("survey_id")
        try:
            survey = Survey.objects.get(survey_id=survey_id)
        except Survey.DoesNotExist as e:
            logger.warning("Survey [survey_id=%s] does not exist: %s", survey_id, str(e))
            # TODO remove this as soon as Front end changes allow a survey to be created
            survey = Survey()
            survey.survey_id = survey_id
            survey.save()
            logger.warning("Created and saved a new survey - note this functionality needs to be removed")
            # END TODO
            # raise SurveyNotFoundException()

        logger.debug("About to create new schema meta data entry")
        # first create a new entry in the database to generate an id
        schema_meta = SchemaMeta()
        schema_meta.survey = survey
        schema_meta.save()
        logger.error("Created schema meta data")

        eq_id = schema_meta.eq_id
        # construct the file name for s3
        key = str(eq_id) + '.json'
        logger.debug("Filename for new schema is %s", key)
        # push it to s3
        schema_storage = SchemaStorageFactory.get_instance()

        try:
            schema_storage.store(key, request.data.decode())
            logger.debug("File now in s3")
        except SchemaStorageError as e:
            logger.error("Unable to store request data")
            logger.exception(e)
            raise InternalServerError()

        logger.debug("Saving metadata to the database")
        # save the meta data in the database
        schema_meta.file_name = key
        schema_meta.title = json_data.get("title")
        schema_meta.description = json_data.get("description")

        schema_meta.save()
        logger.debug("Saved")

        return Response(eq_id, status=status.HTTP_201_CREATED)

    def get(self, request, *args, **kwargs):
        """
        Returns a list of available schemas
        """
        return self.list(request, *args, **kwargs)


class SchemaDetail(APIView):
    """
    The SchemaDetail API Endpoint allows you to view a specific schema and update it
    """
    parser_classes = (PlainJSONParser,)

    def get(self, request, eq_id):
        '''
        Retrieves the full schema for the requested eq id
        :param request: the rest framework request
        :param eq_id: the eq id
        :return: the entire schema
        '''
        # first find the meta data
        try:
            schema_meta = SchemaMeta.objects.get(eq_id=eq_id)
        except SchemaMeta.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        key = eq_id + '.json'
        logger.debug("Looking for object with key %s", key)
        try:
            schema_storage = SchemaStorageFactory.get_instance()
            json_data = schema_storage.get(key)
            logger.debug("JSON Data %s", json_data)
            return Response({'title': schema_meta.title, 'schema': json_data}, status=status.HTTP_200_OK)
        except SchemaStorageError as e:
            logger.error("Unable to store schema")
            raise SurveyNotFoundException()

    @transaction.atomic
    def put(self, request, eq_id):
        '''
        Updates the schema for a particular eq_id
        :param request: the rest framework request
        :param eq_id: the eq id for the schema
        :return: the eq_id
        '''
        original_json = request.data.decode()

        logger.debug("Converting %s request to json data", original_json)
        json_data = json.loads(original_json)
        try:
            validate(json_data, json_schema)
        except ValidationError as e:
            logger.error("Schema failed validation %s", e.message)
            raise SchemaValidationException()

        # first find the meta data
        try:
            schema_meta = SchemaMeta.objects.get(eq_id=eq_id)
        except SchemaMeta.DoesNotExist:
            raise NotFound()

        logger.debug("Saving metadata to the database")
        # save the meta data in the database
        schema_meta.title = json_data.get("title")
        schema_meta.description = json_data.get("description")
        schema_meta.save()
        logger.debug("Saved")

        key = eq_id + '.json'
        # push it to s3
        schema_storage = SchemaStorageFactory.get_instance()
        try:
            schema_storage.store(key, original_json)
            logger.debug("File now in s3")

            return Response(eq_id, status=status.HTTP_200_OK)
        except SchemaStorageError:
            raise InternalServerError()

    @transaction.atomic
    def delete(self, request, eq_id):
        logger.debug("Calling delete with id %s", eq_id)
        # first find the meta data
        try:
            schema_meta = SchemaMeta.objects.get(eq_id=eq_id)
        except SchemaMeta.DoesNotExist:
            raise NotFound()

        # delete the schema from the S3 bucket
        schema_storage = SchemaStorageFactory.get_instance()
        schema_storage.delete(eq_id)

        # delete the meta data from the database
        schema_meta.delete()
        return Response(eq_id, status=status.HTTP_200_OK)


class SurveyView(ListCreateAPIView):
    queryset = Survey.objects.all()
    serializer_class = SurveySerializer
    model = Survey


class SurveyDetailsView(RetrieveUpdateDestroyAPIView):
    queryset = Survey.objects.all()
    serializer_class = SurveySerializer
    model = Survey
    lookup_field = "survey_id"
