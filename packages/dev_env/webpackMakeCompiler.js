import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import fs from 'fs-extra';


import webpackConfig from './webpackConfig';
import webpackParseStatsForDepProblems from './webpackParseStatsForDepProblems';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

import serverConfig from './server.dev';
import express from 'express';

const app = express();
// app.listen(3000, () => {
//   // isBuilt = true
//   console.log('BUILD COMPLETE -- Listening @ http://localhost:4000')
//   console.log('BUILD COMPLETE -- Listening @ http://localhost:4000')
//   console.log('BUILD COMPLETE -- Listening @ http://localhost:4000')
//   console.log('BUILD COMPLETE -- Listening @ http://localhost:4000')
//   console.log('BUILD COMPLETE -- Listening @ http://localhost:4000')
// })

export default (isDev) => {
  const compiler = webpack([webpackConfig,serverConfig]);
  const clientCompiler = compiler.compilers[0];
  if (isDev) {
    console.log('COMPILER WTF');
    clientCompiler.plugin('invalid', (fileName, changeTime) => {
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
      console.log('typeof stats', typeof stats);
      // webpackParseStatsForDepProblems(stats);
    });

    app.use(activeWebpackDevMiddleware);
    app.use(webpackHotServerMiddleware(compiler));

    let isBuilt = false;
    const done = () =>
      !isBuilt &&
      app.listen(3000, () => {
        isBuilt = true
        console.log('BUILD COMPLETE -- Listening @ http://localhost:4000')
      })

    compiler.plugin('done', done)

    return {activeWebpackDevMiddleware,compiler};
  }
  return compiler;
};
