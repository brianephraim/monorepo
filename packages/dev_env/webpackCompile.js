import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import webpackConfig from './webpack.config.babel';
import parseStatsForDependencyProblems from './parseStatsForDependencyProblems';
export default (isDev) => {
  const compiler = webpack(webpackConfig);
  if (isDev) {
    const activeWebpackDevMiddleware = webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true,
      },
    });
    activeWebpackDevMiddleware.waitUntilValid((stats) => {
      parseStatsForDependencyProblems(stats);
    });

    return activeWebpackDevMiddleware;
  }
  return compiler;
};
