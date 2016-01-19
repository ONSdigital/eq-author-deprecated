import 'babel-core/register'
import path from 'path'
import webpack from 'webpack'
import BundleTracker from 'webpack-bundle-tracker'

const __DEV__ = true
const rootPath = './../qBuilder'
const rootUrl = 'http://localhost:3000'
const config = {
  name: 'client',
  target: 'web',
  context: __dirname,
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./qBuilder/assets/')
    ]
  },
  module: {}
}

const compilerVendor = [
  'history',
  'react',
  'react-redux',
  'react-router',
  'redux',
  'redux-actions',
  'redux-simple-router'
]

// ------------------------------------
// Entry Points
// ------------------------------------
const appEntryPath = rootPath + '/assets/js/index'

config.entry = {
  app: __DEV__
    ? [appEntryPath, 'webpack-hot-middleware/client?path=/__webpack_hmr']
    : [appEntryPath],
  vendor: compilerVendor
}

// ------------------------------------
// Bundle Output
// ------------------------------------
config.output = {
  filename: '[name]-[hash].js',
  path: path.resolve(rootPath + '/assets/bundles/'),
  // publicPath: config.compiler_public_path
}

// config.sassLoader = {
//   includePaths: paths.client('styles')
// }

config.plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin()
]

// config.module.preLoaders = [{
//   test: /\.(js|jsx)$/,
//   loader: 'eslint',
//   exclude: /node_modules/
// }]

// config.eslint = {
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

const styleLoader = [
  'style', [
    'css?modules',
    'sourceMap',
    'importLoaders=1',
    'localIdentName=[name]__[local]___[hash:base64:5]'
  ].join('&'),
  'postcss'
]

config.module.loaders.push({
  test: /\.scss$/,
  loaders: styleLoader.concat(['sass'])
})

// Don't treat global SCSS as modules
config.module.loaders.push({
  test: /\.scss$/,
  exclude: /assets/,
  loaders: [
    'style',
    'css?sourceMap',
    'postcss',
    'sass'
  ]
})

// Don't treat global, third-party CSS as modules
config.module.loaders.push({
  test: /\.css$/,
  exclude: /assets/,
  loaders: [
    'style',
    'css?sourceMap',
    'postcss'
  ]
})

config.module.loaders.push({
  test: /\.css$/,
  loaders: styleLoader
})

// File loaders
/* eslint-disable */
config.module.loaders.push(
  { test: /\.woff(\?.*)?$/,  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
  { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
  { test: /\.otf(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype' },
  { test: /\.ttf(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
  { test: /\.eot(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
  { test: /\.svg(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
  { test: /\.(png|jpg)$/,    loader: 'url?limit=8192' }
)
/* eslint-enable */

// config.postcss = [
//   cssnano({
//     sourcemap: true,
//     autoprefixer: {
//       add: true,
//       remove: true,
//       browsers: ['last 2 versions']
//     },
//     safe: true,
//     discardComments: {
//       removeAll: true
//     }
//   })
// ]


export default config
