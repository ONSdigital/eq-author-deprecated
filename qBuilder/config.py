import os

EQ_JSON_SCHEMA_FILE = os.getenv("EQ_JSON_SCHEMA_FILE", os.path.abspath("./schema/schema-v1.json"))
EQ_BUCKET_NAME = os.getenv("EQ_SCHEMA_BUCKET", "eq-schema-files-"+os.getenv('USER', 'UNKNOWN'))
EQ_SCHEMA_STORAGE = os.getenv("EQ_SCHEMA_STORAGE", "s3")
