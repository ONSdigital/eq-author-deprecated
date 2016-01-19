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

const config = {
  context: __dirname,
  entry: rootPath + '/assets/js/index',
  output: {
    path: path.resolve(rootPath + '/assets/bundles/'),
    filename: '[name]-[hash].js'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./qBuilder/assets/')
    ]
  },
  module: {}
}

config.plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin()
]

// config.module.preLoaders = [{
//   test: /\.(js|jsx)$/,
//   loader: 'eslint',
//   exclude: /node_modules/
// }]

// webpackConfig.eslint = {
//   configFile: paths.base('.eslintrc'),
//   emitWarning: __DEV__
// }

config.module.loaders = [{
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: {
    cacheDirectory: true,
    plugins: ['transform-runtime'],
    presets: ['es2015', 'react', 'stage-0', 'react-hmre']
  }
}]

config.module.loaders.push({
  test: /\.scss$/,
  loaders: styleLoader.concat(['sass'])
})

config.module.loaders.push({
  test: /\.css$/,
  loaders: styleLoader
})

export default config
