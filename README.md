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

You will need to create a number of environment variables:

- `EQ_AUTHOR_ADMIN_USERNAME` The admin username to create
- `EQ_AUTHOR_ADMIN_EMAIL` The admin email address
- `EQ_AUTHOR_ADMIN_PASSWORD` The Admin password
- `EQ_AUTHOR_ADMIN_FIRSTNAME` The First name
- `EQ_AUTHOR_ADMIN_LASTNAME` The Last name

## How to run the application

`./scripts/run_app.sh`

This will run any database migrations and then start the server

## How to run the test suite

`python manage.py test`

## EQ_AUTHOR_DATABASE_URL

The application needs a url to the database it should use.  For further documentation,
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
aithr
---

## Front-end assets

The front-end assets are compiled and bundled with [Webpack](https://webpack.github.io/). These are the technologies used:

- ES6 (via Babel)
- React
- Redux
- Testing in Mocha (via Karma)
- Postcss
# Command Line Commands

## Initialization

```Shell
$ npm run setup
```

Initializes a new project with this boilerplate. Deletes the `react-boilerplate`
git history, installs the dependencies and initializes a new repository.

> Note: This command is self-destructive, once you've run it the init script is
gone forever. This is for your own safety, so you can't delete your project's
history irreversibly by accident.

## Development

```Shell
$ npm run start
```

Starts the development server running on `http://localhost:3000`

## Generators

```Shell
$ npm run generate
```

Allows you to auto-generate boilerplate code for common parts of your
application, specifically `component`s, `container`s, and `route`s. You can
also run `npm run generate <part>` to skip the first selection. (e.g. `npm run
generate container`)

## Server

### Development

```Shell
$ npm start
```

Starts the development server and makes your application accessible at
`localhost:3000`. Tunnels that server with `ngrok`, which means the website
accessible anywhere! Changes in the application code will be hot-reloaded.

### Production

```Shell
$ npm run start:prod
```

Starts the production server, configured for optimal performance: assets are
minified and served gzipped.

### Port

To change the port the app is accessible at pass the `-p` option to the command
with `--`. E.g. to make the app visible at `localhost:5000`, run the following:
`$ npm start -- -p 5000`

## Building

```Shell
$ npm run build
```

Preps your app for deployment. Optimizes and minifies all files, piping them to
a folder called `build`. Upload the contents of `build` to your web server to
see your work live!

## Unit testing

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

## Linting

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

## How to deploy to elastic beanstalk
1. Run the author terraform scripts in eq-terraform
2. Delete the .elasticbeanstalk folder (if you've previously attempted a deployment)
3. Enter `eb init -i -r eu-west-1 -p "Python 3.4"`
4. Select your author application from the output (eq-terraform creates it)
5. Select no to setting up ssh
6. Enter `eb deploy`
