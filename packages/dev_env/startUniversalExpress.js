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



const res = p => path.resolve(typeof __xdirname !== 'undefined' ? __xdirname : __dirname, p)

export default function startUniversal(app) {
  console.log('typeof __xdirname',typeof __xdirname,'/Users/brianephraim/Sites/monorepo/packages/dev_env/startUniversalExpress.js')


  // UNIVERSAL HMR + STATS HANDLING GOODNESS:

  if (argv.isDev === 'true') {
    const clientDevConfig = webpackConfig({isReact:true,isClient:true,isDev:true,isUniversal:true,'xxx':116});
    const serverDevConfig = webpackConfig({isReact:true,isClient:false,isDev:true,isUniversal:true,'xxx':115});
    const serverNonUniversalConfig = webpackConfig({isReact:true,isClient:false,isDev:true,isUniversal:false,'xxx':114});
    const publicPath = clientDevConfig.output.publicPath
    const outputPath = clientDevConfig.output.path
    console.log('66666')
    function invalidHandler(fileName, changeTime) {
      console.log('==== INVALIDATED ====')
      console.log('stats', fs.statSync(fileName));
      console.log(`FileName: ${fileName}`);
      console.log(`ChangeTimex: ${changeTime}`);
    }
    const options = {
      publicPath,
      stats: {
        colors: true,
      },
    };
    const isUniversal = argv.isUniversal === 'true';
    const multiCompiler = webpack([clientDevConfig, isUniversal ? serverDevConfig : serverNonUniversalConfig])
    const clientCompiler = multiCompiler.compilers[0]
    console.info('🔷 Starting webpack ...');

    clientCompiler.plugin('invalid', invalidHandler);
    const activeWebpackDevMiddleware = webpackDevMiddleware(multiCompiler, options);
    activeWebpackDevMiddleware.waitUntilValid((stats) => {
      // function censor(censor) {
      //   var i = 0;

      //   return function(key, value) {
      //     if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value) 
      //       return '[Circular]'; 

      //     if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
      //       return '[Unknown]';

      //     ++i; // so we know we aren't using the original object anymore

      //     return value;  
      //   }
      // }
      // fs.writeFileSync('./activeWebpackDevMiddlewareStats.json', JSON.stringify(stats, censor(stats), 2));
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
