# EQ Author tool

## What is this?

EQ Author provides a rich web application, that acts as an Authoring tool for
surveys and questionaires. It enables a user to create and publish a questionaires
as part of a survey series, to be completed by a respondent (be they an organisation,
  individual or business).

This django web application has been designed to work in a 12 Factor apps pattern,
relying on the setting of certain environment variables to be able to
externalise settings and secret management, in accordance with GDS guidance.

## How to install

1. Create a new virtualenv `mkvirtualenv <env-name>`
2. Activate the virtualenv `workon <env-name>`
3. Clone this repo locally
4. Run `pip install -r requirements.txt`

## How to run the application

`python manage.py runserver`

## How to run the test suite

`python manage.py test`
