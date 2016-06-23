import logging
import boto3
import botocore
import config

logger = logging.getLogger(__name__)

BUCKET_NAME = config.EQ_SCHEMA_BUCKET


class SchemaStorageError(BaseException):
    def __init__(self, message):
        self.message = message


class SchemaStorage(object):
    def store(self, key, contents):
        pass

    def get(self, key):
        pass


# we can't use s3 during testing so create an in memory version
class InMemorySchemaStorage(SchemaStorage):
    def __init__(self):
        self.data = {}

    def store(self, key, contents):
        self.data[key] = contents

    def get(self, key):
        return self.data[key]


class S3SchemaStorage(SchemaStorage):

    def __init__(self):
        # Let's use Amazon S3
        self.s3 = boto3.resource('s3')

        logger.debug("Attempting to create bucket name %s", BUCKET_NAME)

        # check if bucket exists otherwise create it
        if not self.s3.Bucket(BUCKET_NAME) in self.s3.buckets.all():
            self.s3.create_bucket(Bucket=BUCKET_NAME,  CreateBucketConfiguration={'LocationConstraint': 'eu-west-1'})

    def store(self, key, contents):
        try:
            self.s3.Bucket(BUCKET_NAME).put_object(Key=key, Body=contents)
        except botocore.exceptions.ClientError:
            logger.error("Bucket %s not found", BUCKET_NAME)
            raise SchemaStorageError("Bucket not found")

    def get(self, key):
        try:
            logger.debug("Getting key %", key)
            schema = self.s3.Object(BUCKET_NAME, key)
            contents = schema.get()["Body"].read().decode("utf-8")
            return contents
        except botocore.exceptions.ClientError as e:
            logger.error("Unable to retrieve schema from S3 bucket %s because ", BUCKET_NAME, e.message)
            raise SchemaStorageError("Not found")


class SchemaStorageFactory(object):
    schema_storage = None

    @classmethod
    def get_instance(cls):
        if cls.schema_storage is None:
            if config.EQ_SCHEMA_STORAGE == "s3":
                cls.schema_storage = S3SchemaStorage()
            else:
                cls.schema_storage = InMemorySchemaStorage()
        return cls.schema_storage
