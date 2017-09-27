import 'babel-polyfill'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'

import express from 'express'
import fs from 'fs-extra';
import _eval from 'eval';
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'
import { argv } from 'yargs';
import path from 'path';
import deleteFiles from 'rimraf';
// import universalWebpackConfig from './universal/webpack/universalWebpackConfig';
import webpackConfig from './webpackConfig';
import webpackRunCompiler from './core/webpackRunCompiler';
import webpackParseStatsForDepProblems from './webpackParseStatsForDepProblems';

import startExpress from './startExpress';



const res = (p) => {
  return path.resolve(typeof __xdirname !== 'undefined' ? __xdirname : __dirname, p)
};

export default function startUniversal(app) {

  if (argv.isDev === 'true') {
    // `npm run bern1` or `npm run bern2`
    startExpress((app) => {
      const clientDevConfig = webpackConfig({isReact:true,isClient:true,isDev:true,isUniversal:true,'xxx':116});
      const serverDevConfig = webpackConfig({isReact:true,isClient:false,isDev:true,isUniversal:true,'xxx':115});
      const serverNonUniversalConfig = webpackConfig({isReact:true,isClient:false,isDev:true,isUniversal:false,'xxx':114});
      const publicPath = clientDevConfig.output.publicPath
      const outputPath = clientDevConfig.output.path
      const isUniversal = argv.isUniversal === 'true';
      const multiCompiler = webpack([clientDevConfig, isUniversal ? serverDevConfig : serverNonUniversalConfig])
      const clientCompiler = multiCompiler.compilers[0]
      /* eslint-disable no-console */
      console.info(`🔷 Starting webpack development for ${isUniversal ? 'Universal':'NonUniversal'} React ...`);
      /* eslint-enable no-console */
      clientCompiler.plugin('invalid', (fileName, changeTime) => {
        /* eslint-disable no-console */
        console.log('==== INVALIDATED ====')
        console.log('stats', fs.statSync(fileName));
        console.log(`FileName: ${fileName}`);
        console.log(`ChangeTimex: ${changeTime}`);
        /* eslint-enable no-console */
      });
      const activeWebpackDevMiddleware = webpackDevMiddleware(multiCompiler, {
        publicPath,
        stats: {
          colors: true,
        },
      });
      activeWebpackDevMiddleware.waitUntilValid((stats) => {
        webpackParseStatsForDepProblems(stats);
        console.log(`🦁 Webpack development done for ${isUniversal ? 'Universal':'NonUniversal'} React`);
      });
      app.use(activeWebpackDevMiddleware)
      app.use(webpackHotMiddleware(clientCompiler))
      app.use(
        // keeps serverRender updated with arg: { clientStats, outputPath }
        webpackHotServerMiddleware(multiCompiler, {
          serverRendererOptions: { outputPath }
        })
      )
    });
  } else {
    // `npm run bern3`
    const clientProdConfig = webpackConfig({isReact:true,isClient:true,isDev:false,isUniversal:true,'xxx':113});
    const serverProdConfig = webpackConfig({isReact:true,isClient:false,isDev:false,isUniversal:true,'xxx':112});
    deleteFiles(`{${clientProdConfig.output.path},${serverProdConfig.output.path}}`, () => {
      const multiCompiler = webpack([clientProdConfig,serverProdConfig]);
      console.info('🔷 Starting webpack production for Universal React ...');
      webpackRunCompiler(multiCompiler).then(() => {
        console.log('🦁 Webpack production done for Universal React');
        __non_webpack_require__(res('./universal/buildServer/main.js')).default
      });
    });
  }
}
