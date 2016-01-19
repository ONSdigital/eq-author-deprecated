/**
 * Require Browsersync along with webpack and middleware for it
 */
import Browsersync from 'browser-sync'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import _debug from 'debug';
import config from '../config';
import webpackConfig from '../build/webpack.config';

const debug = _debug('app:server');
const paths = config.utils_paths;
const bundler = webpack(webpackConfig);

const bs = Browsersync.create();
bs.init({
  proxy: {
    target: "192.168.33.10:5001",
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        contentBase: paths.base(config.dir_client),
        hot: true,
        quiet: config.compiler_quiet,
        noInfo: config.compiler_quiet,
        lazy: false,
        stats: config.compiler_stats
      }),
      webpackHotMiddleware(bundler)
    ]
  },

  // no need to watch '*.js' here, webpack will take care of it for us,
  // including full page reloads if HMR won't work
  files: [paths.client('static') + '/**/*.*'],
}, function() {
  debug("bah")
});
