import os

EQ_JSON_SCHEMA_FILE = os.getenv("EQ_JSON_SCHEMA_FILE", os.path.abspath("./qBuilder/schema/schema-v1.json"))
EQ_BUCKET_NAME = os.getenv("EQ_BUCKET_NAME", "eq-schema-files-"+os.getenv('USER', 'UNKNOWN'))
