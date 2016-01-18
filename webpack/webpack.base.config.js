var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var rootPath = './../qBuilder';
var rootUrl = 'http://localhost:3000'

module.exports = {
  context: __dirname,

  entry: rootPath + '/assets/js/index',

  output: {
    path: path.resolve(rootPath + '/assets/bundles/'),
    filename: "[name]-[hash].js"
  },

  plugins: [
  ], // add all common plugins here

  module: {
    loaders: [] // add all common loaders here
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}
