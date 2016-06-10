#!/bin/bash

function open_url {
  sleep 1
  open -a "/Applications/Google Chrome.app" $1
}


if [ -z "$EQ_JSON_SCHEMA_FILE" ]; then
  export EQ_JSON_SCHEMA_FILE=./qBuilder/schema/schema-v1.json
fi

if [ -n "$VIRTUAL_ENV" ]; then
  echo "Already in virtual environment $VIRTUAL_ENV"
else
  echo "You need to be in a virtual environment please!"
fi

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo $DIR


echo "Environment variables in use:"
env | grep EQ_

# if [ ! -s "qBuilder/bundles" ]; then
#   npm install
#   npm run compile
# fi

python qBuilder/manage.py runserver
