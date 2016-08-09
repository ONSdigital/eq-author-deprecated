# Dahl

## What is this?

EQ Author provides a rich web application, that acts as an Authoring tool for surveys and questionnaires. It enables a user to create and publish a questionnaires as part of a survey series, to be completed by a respondent (be they an organisation, individual or business).

This django web application has been designed to work in a 12 Factor apps pattern, relying on the setting of certain environment variables to be able to externalise settings and secret management, in accordance with GDS guidance.

---

# Before installing

Before installing the application, there are a number of things that need to be set up:

## Dependencies

- Python (version??)
- virtualenv
- postgres
- node 5.2.0
- npm 3.8.3

## Environment variables

Before running the application, you will need to create a number of environment variables:

- `EQ_AUTHOR_ADMIN_USERNAME` The admin username to create
- `EQ_AUTHOR_ADMIN_EMAIL` The admin email address
- `EQ_AUTHOR_ADMIN_PASSWORD` The Admin password
- `EQ_AUTHOR_ADMIN_FIRSTNAME` The First name
- `EQ_AUTHOR_ADMIN_LASTNAME` The Last name
- `EQ_AUTHOR_DATABASE_URL` The URL of the postgres database (see next section)
- `ENV_DEV_MODE` Set to `True` if you are developing front-end assets and wish to use the webpack dev server

## Postgres database

As mentioned above, the application needs a url to the database it should use via the `EQ_AUTHOR_DATABASE_URL` environment variable. For further documentation,
please consult the dj-database-url project homepage [https://github.com/kennethreitz/dj-database-url].

To configure the app to use settings similar to those used on the build server, the value is as follows:

`postgres://eq-author:@localhost:5432/dahl`

`postgres://` indicates we are using postgresql.
`eq_author` indicates the username to connect with
`:` separates the username and password (blank in this case)
`@` separates the username and password from the host name
`localhost` is the host running postgresql
`:5432` Signifies which port postgresql is listening on (default 5432)
`dahl` is the name of the database

Create the environment variable by adding the following command to your startup script

`export EQ_AUTHOR_DATABASE_URL=postgres://eq-author:@localhost:5432/dahl`
---

# Installation

1. Create a new virtualenv `mkvirtualenv <env-name>`
2. Activate the virtualenv `workon <env-name>`
3. Clone this repo locally
4. Run `pip install -r requirements.txt`

---

# Running the application

`./scripts/run_app.sh`

This will run any database migrations and then start the server. This will also run `npm install` and `npm run compile` if no static assets are detected (ie. you haven't already done this).

---

# Testing

To run the python test suite:

`python manage.py test`

To run the Javascript tests:

`npm run test`

# Deployment

_EXPLAIN DEPLOYMENT PROCESS HERE_

1. If this is your first time deploying the application, brace yourself and run `eb init`. (see steps below)
2. If the elasticbeanstalk environment has already been created, you can now run `eb deploy` to deploy the built application, otherwise run `eb create` to create it first and it will be deployed automatically.

### Deploy to Elastic Beanstalk

1. Run the author terraform scripts in eq-terraform
2. Delete the .elasticbeanstalk folder (if you've previously attempted a deployment)
3. Enter `eb init -i -r eu-west-1 -p "Python 3.4"`
4. Select your author application from the output (eq-terraform creates it)
5. Select no to setting up ssh
6. Enter `eb deploy`

---

# Front-end assets

The front-end assets are compiled and bundled with [Webpack](https://webpack.github.io/). These are the technologies used:

- ES6 (via Babel)
- React
- Redux
- Redux Sagas
- Testing in Mocha (via Karma)
- Postcss

## NPM Tasks

There are a number of NPM tasks available for developing and testing front-end components.

### Building

```Shell
$ npm run compile
```

Compiles, optimises and minifies the front-end assets into the bundles folder.
*NOTE: you must subsequently`./scripts/run_app.sh` for these to be copied to Djangos static assets folder.*


```Shell
$ npm run build
```

This performs a number of tasks, readying the app for deployment:

- runs all front-end linting and tests
- compiles the assets, minifying and optimising them into bundles

```Shell
$ npm run start
```

Starts the webpack development server running on `http://localhost:3000`.
*NOTE: You only need to do this if you are making front-end changes, otherwise `npm run compile` compile static assets. You will also need to set the environment variable `ENV_DEV_MODE` to `True`*

### Generators

```Shell
$ npm run generate
```

Allows you to auto-generate boilerplate code for common parts of your
application, specifically `component`s, `container`s, and `route`s. You can
also run `npm run generate <part>` to skip the first selection. (e.g. `npm run
generate container`)

### Unit testing

```Shell
$ npm run test
```

Tests your application with the unit tests specified in the `*test.js` files
throughout the application.

### Browsers

To choose the browser to run your unit tests in (Chrome by default), run one of
the following commands:

#### Firefox

```Shell
$ npm run test:firefox
```

#### Safari

```Shell
$ npm run test:safari
```

#### Internet Explorer

*Windows only!*

```Shell
$ npm run test:ie
```

### Watching

```Shell
$ npm run test:watch
```

Watches changes to your application and reruns tests whenever a file changes.

### Remote testing

```Shell
$ npm run start:tunnel
```
Starts the development server and tunnels it with `ngrok`, making the website
available on the entire world. Useful for testing on different devices in different locations!

### Performance testing

```Shell
$ npm run pagespeed
```

With the remote server running (i.e. while `$ npm run start:prod` is running in
another terminal session), enter this command to run Google PageSpeed Insights
and get a performance check right in your terminal!

### Dependency size test

```Shell
$ npm run analyze
```

This command will generate a `stats.json` file from your production build, which
you can upload to the [webpack analyzer](https://webpack.github.io/analyse/). This
analyzer will visualize your dependencies and chunks with detailed statistics
about the bundle size.

### Linting

```Shell
$ npm run lint
```

Lints your JavaScript and CSS.

### JavaScript

```Shell
$ npm run lint:js
```

Only lints your JavaScript.

### CSS

```Shell
$ npm run lint:css
```

Only lints your CSS.
