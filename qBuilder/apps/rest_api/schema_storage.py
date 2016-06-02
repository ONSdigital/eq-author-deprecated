import logging
import boto3
import config

logger = logging.getLogger(__name__)

BUCKET_NAME = config.EQ_BUCKET_NAME


class SchemaStorage(object):
    def store(self, key, contents):
        pass

    def get(self, key):
        pass


class S3SchemaStorage(SchemaStorage):

    def __init__(self):
        # Let's use Amazon S3
        self.s3 = boto3.resource('s3')

        logger.debug("Attempting to create bucket name %s", BUCKET_NAME)

        # check if bucket exists otherwise create it
        if not self.s3.Bucket(BUCKET_NAME) in self.s3.buckets.all():
            self.s3.create_bucket(Bucket=BUCKET_NAME,  CreateBucketConfiguration={'LocationConstraint': 'eu-west-1'})

    def store(self, key, contents):
        self.s3.Bucket(BUCKET_NAME).put_object(Key=key, Body=contents)

    def get(self, key):
        logger.debug("Getting key %", key)
        schema = self.s3.Object(BUCKET_NAME, key)
        contents = schema.get()["Body"].read().decode("utf-8")
        return contents


class SchemaStorageFactory(object):
    schema_storage = S3SchemaStorage()

    @staticmethod
    def get_instance():
        return SchemaStorageFactory.schema_storage
