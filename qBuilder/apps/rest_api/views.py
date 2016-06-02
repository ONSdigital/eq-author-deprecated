
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.mixins import ListModelMixin
from rest_framework.generics import GenericAPIView
from .serializers import SchemaSerializer
from .models import SchemaMeta
from jsonschema import validate, ValidationError
from .schema_storage import SchemaStorageFactory
import json
import logging

# qbuilder imports
import config

logger = logging.getLogger(__name__)

json_schema_file = open(config.EQ_JSON_SCHEMA_FILE).read()
json_schema = json.loads(json_schema_file)


class Schema(GenericAPIView, ListModelMixin):
    queryset = SchemaMeta.objects.all()
    serializer_class = SchemaSerializer

    def post(self, request):
        '''
        Override post as we want specialized behaviour to store schema in S3 rather than the Database
        '''
        logger.debug("Converting %s request to json data", request.data)
        # run it through the json schema validator to make sure they're are no errors
        try:
            validate(request.data, json_schema)
        except ValidationError as e:
            logger.info("Schema failed validation %s", e.message)
            return Response(e.message, status=status.HTTP_400_BAD_REQUEST)

        json_data = json.dumps(request.data)
        logger.debug("JSON Data is : %s", json_data)
        logger.debug("About to create new schema meta data entry")
        # first create a new entry in the database to generate an id
        schema = SchemaMeta()
        schema.save()
        logger.debug("Created schema meta data")

        eq_id = schema.eq_id
        # construct the file name for s3
        key = str(eq_id) + '.json'
        logger.debug("Filename for new schema is %s", key)
        # push it to s3
        schema_storage = SchemaStorageFactory.get_instance()
        schema_storage.store(key, json_data)
        logger.debug("File now in s3")

        logger.debug("Saving metadata to the database")
        # save the meta data in the database
        schema.file_name = key
        schema.title = request.data.get("title")
        schema.description = request.data.get("description")
        schema.save()
        logger.debug("Saved")

        return Response(eq_id, status=status.HTTP_201_CREATED)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class SchemaDetail(APIView):

    def get(self, request, eq_id):
        '''
        Retrieves the full schema for the requested eq id
        :param request: the rest framework request
        :param eq_id: the eq id
        :return: the entire schema
        '''
        key = eq_id + '.json'
        logger.debug("Looking for object with key %s", key)
        schema_storage = SchemaStorageFactory.get_instance()
        json_data = schema_storage.get(key)
        return Response(json.loads(json_data), status=status.HTTP_200_OK)

    def put(self, request, eq_id):
        '''
        Updates the schema for a particular eq_id
        :param request: the rest framework request
        :param eq_id: the eq id for the schema
        :return: the eq_id
        '''

        try:
            validate(request.data, json_schema)
        except ValidationError as e:
            logger.info("Schema failed validation %s", e.message)
            return Response(e.message, status=status.HTTP_400_BAD_REQUEST)

        # first find the meta data
        schema = SchemaMeta.objects.get(eq_id=eq_id)
        if schema is None:
            return Response(status=status.HTTP_404_NOT_FOUND)

        logger.debug("Saving metadata to the database")
        # save the meta data in the database
        schema.title = request.data.get("title")
        schema.description = request.data.get("description")
        schema.save()
        logger.debug("Saved")

        key = eq_id + '.json'
        # push it to s3
        json_data = json.dumps(request.data)
        schema_storage = SchemaStorageFactory.get_instance()
        schema_storage.store(key, json_data)
        logger.debug("File now in s3")

        return Response(eq_id, status=status.HTTP_200_OK)
