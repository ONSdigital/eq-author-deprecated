!/bin/bash

function open_url {
  sleep 1
  open -a "/Applications/Google Chrome.app" $1
}

if [ -z "$EQ_AUTHOR_DATABASE_URL" ]; then
  export EQ_AUTHOR_DATABASE_URL=postgres://eq-author:@localhost:5432/dahl
fi

if [ -z "$EQ_AUTHOR_ADMIN_USERNAME" ]; then
  export EQ_AUTHOR_ADMIN_USERNAME=admin
fi
if [ -z "$EQ_AUTHOR_ADMIN_PASSWORD" ]; then
  export EQ_AUTHOR_ADMIN_PASSWORD=password
fi
if [ -z "$EQ_AUTHOR_ADMIN_EMAIL" ]; then
  export EQ_AUTHOR_ADMIN_EMAIL=admin@nowhere.com
fi
if [ -z "$EQ_AUTHOR_ADMIN_FIRSTNAME" ]; then
  export EQ_AUTHOR_ADMIN_FIRSTNAME=Dummy
fi
if [ -z "$EQ_AUTHOR_ADMIN_LASTNAME" ]; then
  export EQ_AUTHOR_ADMIN_LASTNAME=Admin
fi

if [ -z "$EQ_JSON_SCHEMA_FILE" ]; then
  export EQ_JSON_SCHEMA_FILE=./dahl/schema/schema-v1.json
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

# if [ ! -s "dahl/bundles" ]; then
#   npm install
#   npm run compile
# fi



python dahl/manage.py migrate
python dahl/manage.py collectstatic --no-input
python dahl/manage.py test 
