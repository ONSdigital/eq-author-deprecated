var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var rootPath = './../qBuilder';
var rootUrl = 'http://localhost:3000'
var config = require('./webpack.base.config.js')

// Use webpack dev server
config.entry = [
  'webpack-dev-server/client?' + rootUrl,
  'webpack/hot/only-dev-server',
  './../qBuilder/assets/index'
]

// override django's STATIC_URL for webpack bundles
config.output.publicPath = rootUrl + '/assets/bundles/'

// Add HotModuleReplacementPlugin and BundleTracker plugins
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new BundleTracker({path: __dirname, filename: rootPath + '/webpack-stats.json'}),
])

// Add a loader for JSX files with react-hot enabled
config.module.loaders.push(
  { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] }
)

module.exports = config
