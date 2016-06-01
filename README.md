# EQ Author tool

## What is this?

EQ Author provides a rich web application, that acts as an Authoring tool for surveys and questionaires. It enables a user to create and publish a questionaires as part of a survey series, to be completed by a respondent (be they an organisation, individual or business).

This django web application has been designed to work in a 12 Factor apps pattern, relying on the setting of certain environment variables to be able to externalise settings and secret management, in accordance with GDS guidance.

## How to install

1. Create a new virtualenv `mkvirtualenv <env-name>`
2. Activate the virtualenv `workon <env-name>`
3. Clone this repo locally
4. Run `pip install -r requirements.txt`
5. Create an EQ_AUTHOR_DATABASE_URL environment variable (See below)
6. run `npm install` to install front-end dependencies
7. run `npm run deploy` to build front end resources for deployment *or* run `npm run compile` to run with local development
8. If this is your first time deploying the application, brace yourself and run `eb init`. (see steps below)
9. If the elasticbeanstalk environment has already been created, you can now run `eb deploy` to deploy the built application, otherwise run `eb create` to create it first and it will be deployed automatically.

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

---

## Front-end assets

The front-end assets are compiled and bundled with [Webpack](https://webpack.github.io/). These are the technologies used:

- ES6 (via Babel)
- React
- Redux
- Testing in Mocha (via Karma)
- Sass
- Postcss

The Webpack setup is based on the [React Starter Kit](https://github.com/davezuko/react-redux-starter-kit), you will find useful documentation there. Various tasks are provided by npm scripts:

- `npm start` Spins up Koa server to serve your app at localhost:3000. HMR will be enabled in development.
- `npm run compile` - Compiles the application to `/qBuilder/assets/bundles`.
- `npm run test` - Runs unit tests with Karma and generates a coverage report.
- `npm run test:dev ` - Runs Karma and watches for changes to re-run tests; does not generate coverage reports.
- `npm run deploy` - Runs linter, tests, and then, on success, compiles your application to disk.
- `npm run lint` - Lint all .js files.
- `npm run lint:fix` - Lint and fix all .js files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).

## Redux Dev Tools Extension

There's a nifty [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) extension for Chrome which allows for navigating app state.


## How to deploy to elastic beanstalk
1. Run the author terraform scripts in eq-terraform
2. Delete the .elasticbeanstalk folder (if you've previously attempted a deployment)
3. Enter `eb init -i -r eu-west-1 -p "Python 3.4"`
4. Select your author application from the output (eq-terraform creates it)
5. Select no to setting up ssh
6. Enter `eb deploy`
