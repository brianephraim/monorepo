
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import fs from 'fs-extra';
import url from 'url';
import webpackConfig from './webpackConfig'; 
import webpackParseStatsForDepProblems from './webpackParseStatsForDepProblems';

export default (app) => {
  const compiler = webpack(webpackConfig);
  compiler.plugin('invalid', (fileName, changeTime) => {
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

  // SPA server support
  // All URLs that suggest an HTML file request get routed the same.
  app.use((req, res, next) => {
    const lastPartOfURL = url.parse(req.url).pathname.split('/').pop();
    const urlFormatSuggestsHtmlFileRequest = (
      lastPartOfURL.indexOf('.') === -1 || lastPartOfURL.indexOf('.html') !== -1
    );
    if (urlFormatSuggestsHtmlFileRequest) {
      req.url = '/';
    }
    next();
  });
  app.use(activeWebpackDevMiddleware); 
  return app;
};


