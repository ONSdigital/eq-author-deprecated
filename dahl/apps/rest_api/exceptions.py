from rest_framework.exceptions import APIException


class BadRequestException(APIException):
    status_code = 400
    default_detail = 'Bad Request'


class SchemaValidationException(APIException):
    status_code = 400
    default_detail = 'Schema Failed Validation'


class SurveyNotFoundException(APIException):
    status_code = 400
    default_detail = 'Survey Not Found'


class InternalServerError(APIException):
    status_code = 500
    default_detail = 'Internal Server Error'
