import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import fs from 'fs-extra';

import webpackConfig from './webpackConfig'; 
import webpackParseStatsForDepProblems from './webpackParseStatsForDepProblems';

export default (isDev) => {
  const compiler = webpack(webpackConfig);
  if (isDev) {
    console.log('COMPILER WTF');
    compiler.plugin('invalid', (fileName, changeTime) => {
      // console.trace();
      console.log('stats', fs.statSync(fileName));
      console.log("FileName: " + fileName);
      console.log("ChangeTimex:" + changeTime);
    });
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
