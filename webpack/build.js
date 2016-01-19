require('babel-register')
const config = require('./webpack.local.config')
const webpack = require('webpack')
const compiler = webpack(config)

compiler.run(function (err, stats) {
  const jsonStats = stats.toJson()
  if (err) {
    console.log('Webpack compiler encountered a fatal error.', err)
    process.exit(1)
  } else if (jsonStats.errors.length > 0) {
    console.log('Webpack compiler encountered errors.')
    console.log(jsonStats.errors.toString())
    process.exit(1)
  } else if (jsonStats.warnings.length > 0) {
    console.log('Webpack compiler encountered warnings.')
  } else {
    console.log('No errors or warnings encountered.')
  }
})
