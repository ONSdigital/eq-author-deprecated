/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const paths = require('../paths')
const webpack = require('webpack')
const BundleTracker = require('webpack-bundle-tracker')
const DashboardPlugin = require('webpack-dashboard/plugin')
// PostCSS plugins
const cssnext = require('postcss-cssnext')
const postcssFocus = require('postcss-focus')
const postcssReporter = require('postcss-reporter')
const precss = require('precss')

module.exports = require('./webpack.base.babel')({
  // Add hot reloading in development
  entry: {
    main: [
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      `${paths.assets}/app.js`
    ],
    login: [
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      `${paths.assets}/login.js`,
    ]
  },

  // Don't use hashes in dev mode for better performance
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: 'http://localhost:3000/bundles/'
  },

  // Load the CSS in a style tag in development
  cssLoaders: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',

  // Process the CSS with PostCSS
  postcssPlugins: [
    precss(),
    postcssFocus(), // Add a :focus to every :hover
    cssnext({ // Allow future CSS features to be used, also auto-prefixes the CSS...
      browsers: ['last 2 versions', 'IE > 10'], // ...based on this browser list
    }),
    postcssReporter({ // Posts messages from plugins to the terminal
      clearMessages: true,
    }),
  ],

  // Add hot reloading
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new webpack.NoErrorsPlugin(),
    new DashboardPlugin(),
    new BundleTracker({filename: './dahl/webpack-stats.json'}),
  ],

  // Tell babel that we want to hot-reload
  babelQuery: {
    presets: ['react-hmre'],
  },

  // Emit a source map for easier debugging
  devtool: 'cheap-module-eval-source-map',
})
