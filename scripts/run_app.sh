#!/bin/bash

function open_url {
  sleep 1
  open -a "/Applications/Google Chrome.app" $1
}

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

postgres -D /usr/local/var/postgres &
python qBuilder/manage.py runserver
