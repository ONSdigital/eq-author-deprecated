require('babel-register')

const debug = require('debug')('app:webpack:build')
const config = require('./webpack.dev.config')
const webpack = require('webpack')
const compiler = webpack(config)
// const fs = require('fs-extra')

compiler.run(function (err, stats) {
  const jsonStats = stats.toJson()
  if (err) {
    debug('Webpack compiler encountered a fatal error.', err)
    process.exit(1)
  } else if (jsonStats.errors.length > 0) {
    debug('Webpack compiler encountered errors.')
    debug(jsonStats.errors.toString())
    process.exit(1)
  } else if (jsonStats.warnings.length > 0) {
    debug('Webpack compiler encountered warnings.')
  } else {
    debug('No errors or warnings encountered.')
  }
  debug('Copy static assets to dist folder.')
  // fs.copySync(paths.client('static'), paths.dist())
})
