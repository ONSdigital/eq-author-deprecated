require('babel-core/register')

const debug = require('debug')('app:webpack:server')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.dev.config')
const port = 3000
const host = '0.0.0.0'

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true
}).listen(port, host, function (err, result) {
  if (err) {
    debug(err)
  }
  debug('Listening at ' + host + ':' + port)
})
