import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import webpackConfig from './webpackConfig';
import webpackParseStatsForDepProblems from './webpackParseStatsForDepProblems';

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
      webpackParseStatsForDepProblems(stats);
    });

    return activeWebpackDevMiddleware;
  }
  return compiler;
};
