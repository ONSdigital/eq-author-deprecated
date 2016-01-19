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
5. Create an EQ_AUTHOR_DATABASE_URL environment variable (See below)

## How to run the application

`python manage.py runserver`

## How to run the test suite

`python manage.py test`

## EQ_AUTHOR_DATABASE_URL

The application needs a url to the database it should use.  For further documentation,
please consult the dj-database-url project homepage [https://github.com/kennethreitz/dj-database-url].

To configure the app to use settings similar to those used on the build server, the value is as follows:

`postgres://eq-author:@localhost:5432/qBuilder`

`postgres://` indicates we are using postgresql.
`eq_author` indicates the username to connect with
`:` separates the username and password (blank in this case)
`@` separates the username and password from the host name
`localhost` is the host running postgresql
`:5432` Signifies which port postgresql is listening on (default 5432)
`qBuilder` is the name of the database

Create the environment variable by adding the following command to your startup script

`export EQ_AUTHOR_DATABASE_URL=postgres://eq-author:@localhost:5432/qBuilder`
