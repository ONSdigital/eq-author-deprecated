import 'babel-core/register'
import path from 'path'
import webpack from 'webpack'
import BundleTracker from 'webpack-bundle-tracker'

const rootPath = './../qBuilder';
const rootUrl = 'http://localhost:3000'

const styleLoader = [
  'style', [
    'css?modules',
    'sourceMap',
    'importLoaders=1',
    'localIdentName=[name]__[local]___[hash:base64:5]'
  ].join('&'),
  'postcss'
]

module.exports = {
  context: __dirname,
  entry: rootPath + '/assets/js/index',
  output: {
    path: path.resolve(rootPath + '/assets/bundles/'),
    filename: '[name]-[hash].js'
  },
  plugins: [
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: styleLoader.concat(['sass'])
      },
      {
        test: /\.css$/,
        loaders: styleLoader
      },
      {
    		test: /\.js$/,
    		loader: 'babel',
    		exclude: /node_modules/,
    	}
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx'],
    root: [path.resolve('./qBuilder/assets/')]
  }
}
