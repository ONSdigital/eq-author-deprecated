import 'babel-core/register';
import path from 'path';
import webpack from 'webpack';
import BundleTracker from 'webpack-bundle-tracker';
import config from './webpack.base.config.js';

const rootPath = './../qBuilder';
const rootUrl = 'http://localhost:3000';

// Use webpack dev server
config.entry = [
  'webpack-dev-server/client?' + rootUrl,
  'webpack/hot/only-dev-server',
  './../qBuilder/assets/index'
];

config.devtool = 'source-map';

// override django's STATIC_URL for webpack bundles
config.output.publicPath = rootUrl + '/assets/bundles/';

// Add HotModuleReplacementPlugin and BundleTracker plugins
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new BundleTracker({path: __dirname, filename: rootPath + '/webpack-stats.json'}),
]);

module.exports = config;
