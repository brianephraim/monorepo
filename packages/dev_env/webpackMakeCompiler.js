
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import fs from 'fs-extra';
import url from 'url';
import webpackConfig from './webpackConfig'; 
import webpackParseStatsForDepProblems from './webpackParseStatsForDepProblems';

export default (app) => {




    function invalidHandler(fileName, changeTime) {
      console.log('stats', fs.statSync(fileName));
      console.log("FileName: " + fileName);
      console.log("ChangeTimex:" + changeTime);
    }




    const publicPath = webpackConfig.output.publicPath



    const options = {
      publicPath,
      stats: {
        colors: true,
      },
    };


    const clientCompiler = webpack(webpackConfig);
    console.info('🔷 Starting webpack ...');
    // clientCompiler.plugin('invalid', invalidHandler);
    const activeWebpackDevMiddleware = webpackDevMiddleware(clientCompiler, options);
    // activeWebpackDevMiddleware.waitUntilValid((stats) => {
    //   webpackParseStatsForDepProblems(stats);
    // });

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



























