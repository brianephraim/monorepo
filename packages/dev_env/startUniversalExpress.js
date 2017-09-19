import 'babel-polyfill'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'
import { argv } from 'yargs';
import path from 'path';
import deleteFiles from 'rimraf';
import universalWebpackConfig from './demo/webpack/universalWebpackConfig';
import webpackRunCompiler from './core/webpackRunCompiler';


const res = p => path.resolve(__dirname, p)

export default function startUniversal({app = express()}) {
  const clientDevConfig = universalWebpackConfig({isClient:true,isDev:true});
  const serverDevConfig = universalWebpackConfig({isClient:false,isDev:true});
  const DEV = argv.isDev === 'true';
  const publicPath = clientDevConfig.output.publicPath
  const outputPath = clientDevConfig.output.path

  // UNIVERSAL HMR + STATS HANDLING GOODNESS:

  if (DEV) {
    const multiCompiler = webpack([clientDevConfig, serverDevConfig])
    const clientCompiler = multiCompiler.compilers[0]
    console.info('🔷 Starting webpack ...');
    app.use(webpackDevMiddleware(multiCompiler, { publicPath }))
    app.use(webpackHotMiddleware(clientCompiler))
    app.use(
      // keeps serverRender updated with arg: { clientStats, outputPath }
      webpackHotServerMiddleware(multiCompiler, {
        serverRendererOptions: { outputPath }
      })
    )
  }
  else {
    console.log('I GUESS ITS PROD',process.env.NODE_ENV)
    const clientProdConfig = universalWebpackConfig({isClient:true,isDev:false});
    const serverProdConfig = universalWebpackConfig({isClient:false,isDev:false});
    deleteFiles(clientProdConfig.output.path, () => {
      console.log('DELETE FILES DONE',clientProdConfig.output.path)
      console.log('START WEBPACK CLIENT',res('./demo/webpack/client.prod.js'))
      webpackRunCompiler(webpack(clientProdConfig)).then(() => {
        console.log('DONE WEBPACK CLIENT')
        deleteFiles(serverProdConfig.output.path, () => {
          console.log('DELETE FILES DONE',serverProdConfig.output.path)
          console.log('START WEBPACK SERVER')
          webpackRunCompiler(webpack(serverProdConfig)).then(() => {
            console.log('DONE WEBPACK SERVER')
            console.log('PROD COMPILER IS DONE!')
            const clientConfig = universalWebpackConfig({isClient:true,isDev:true});
            const publicPath = clientConfig.output.publicPath
            const outputPath = clientConfig.output.path
            const serverRender = __non_webpack_require__(res('./demo/buildServer/main.js')).default
            const clientStats = __non_webpack_require__(res('./demo/buildClient/stats.json'))            
            app.use(publicPath, express.static(outputPath))
            app.use(serverRender({ clientStats, outputPath }))
          });
        });
      });
    });
  }

  return app;
}
