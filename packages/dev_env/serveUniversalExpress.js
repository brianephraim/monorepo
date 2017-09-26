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



const res = (p) => {
  return path.resolve(typeof __xdirname !== 'undefined' ? __xdirname : __dirname, p)
};

export default function startUniversal(app = express()) {

  if (argv.isDev === 'true') {
    // `npm run bern1` or `npm run bern2`
    const clientDevConfig = webpackConfig({isReact:true,isClient:true,isDev:true,isUniversal:true,'xxx':116});
    const serverDevConfig = webpackConfig({isReact:true,isClient:false,isDev:true,isUniversal:true,'xxx':115});
    const serverNonUniversalConfig = webpackConfig({isReact:true,isClient:false,isDev:true,isUniversal:false,'xxx':114});
    const publicPath = clientDevConfig.output.publicPath
    const outputPath = clientDevConfig.output.path
    const isUniversal = argv.isUniversal === 'true';
    const multiCompiler = webpack([clientDevConfig, isUniversal ? serverDevConfig : serverNonUniversalConfig])
    const clientCompiler = multiCompiler.compilers[0]
    /* eslint-disable no-console */
    console.info('🔷 Starting webpack ...');
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
    });
    app.use(activeWebpackDevMiddleware)
    app.use(webpackHotMiddleware(clientCompiler))
    app.use(
      // keeps serverRender updated with arg: { clientStats, outputPath }
      webpackHotServerMiddleware(multiCompiler, {
        serverRendererOptions: { outputPath }
      })
    )
  } else if (argv.isDeploy === 'true') {
    // `npm run bern4`

    // instead of `require` or `__non_webpack_require__` or `import (...)`
    // using `fs.readFileSync` + `_eval`.
    // why
    // -  not `require` because we don't want to bundle what we are importing here
    //    because what we are importing is itself a bundle
    //    - which might not exist yet
    //    - which will itself be ES5 safe
    //    - which is itself huge so we don't want to bundle it here.
    // -  `__non_webpack_require__` and `import (...)` don't work or too complicated.
    const buildServerMainContent = fs.readFileSync(path.resolve(process.cwd(),'./packages/dev_env/universal/buildServer/main.js'));
    const serverRender = _eval(buildServerMainContent,true).default;
    const clientStats = fs.readJsonSync(path.resolve(process.cwd(),'./packages/dev_env/universal/buildClient/stats.json'));
    const clientProdConfig = webpackConfig({isReact:true,isClient:true,isDev:false,isUniversal:true,'xxx':113});
    const publicPath = clientProdConfig.output.publicPath
    const outputPath = 'packages/dev_env/universal/buildClient';
    app.use(publicPath, express.static(outputPath))
    app.use(serverRender({ clientStats, outputPath }))    
  } else {
    // `npm run bern3`
    const clientProdConfig = webpackConfig({isReact:true,isClient:true,isDev:false,isUniversal:true,'xxx':113});
    const serverProdConfig = webpackConfig({isReact:true,isClient:false,isDev:false,isUniversal:true,'xxx':112});
    deleteFiles(`{${clientProdConfig.output.path},${serverProdConfig.output.path}}`, () => {
      const multiCompiler = webpack([clientProdConfig,serverProdConfig]);
      webpackRunCompiler(multiCompiler).then(() => {
        const publicPath = clientProdConfig.output.publicPath
        const outputPath = clientProdConfig.output.path
        const serverRender = __non_webpack_require__(res('./universal/buildServer/main.js')).default
        const clientStats = __non_webpack_require__(res('./universal/buildClient/stats.json')) 
        app.use(publicPath, express.static(outputPath))
        app.use(serverRender({ clientStats, outputPath }))
      });
    });
  }
}
