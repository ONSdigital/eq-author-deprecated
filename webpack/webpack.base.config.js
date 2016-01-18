import path from 'path'
import webpack from 'webpack'
import BundleTracker from 'webpack-bundle-tracker'
var rootPath = './../qBuilder';
var rootUrl = 'http://localhost:3000'

const styleLoader = [
  'style',
  ['css?modules',
    'sourceMap',
    'importLoaders=1',
    'localIdentName=[name]__[local]___[hash:base64:5]'
  ].join('&'),
  'postcss',
  'sass'
]

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
    loaders: [
      {
        test: /\.scss$/,
        loaders: styleLoader
      },
      {
        test: /\.css$/,
        loaders: styleLoader
      },
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./qBuilder/assets/'),
    ]
  },

}
