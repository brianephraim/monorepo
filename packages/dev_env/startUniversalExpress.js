import 'babel-polyfill'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'

import fs from 'fs-extra';
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

function compileAndServeWebpackDevMiddlewareHMRUniversalExpress(clientDevConfig, serverDevConfig) {
  return new Promise((resolve) => {
    startExpress((app) => {
      
      const publicPath = clientDevConfig.output.publicPath
      const outputPath = clientDevConfig.output.path
      const multiCompiler = webpack([clientDevConfig, serverDevConfig])
      const clientCompiler = multiCompiler.compilers[0];
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
        watchOptions: {
          ignored: [
            /node-modules/,
            /private/,
            '**/*.js',
            ...(argv.asyncDir ? [`${argv.asyncDir}/**`] : []),
          ],
        },
      });
      activeWebpackDevMiddleware.waitUntilValid((stats) => {
        resolve(stats)
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
  });
}

function clearCompileAndServeProductionUniversalExpress(clientConfig,serverConfig,serve = true) {
  return new Promise((resolve) => {
    deleteFiles(`{${clientConfig.output.path},${serverConfig.output.path}}`, () => {
      const multiCompiler = webpack([clientConfig,serverConfig]);
      webpackRunCompiler(multiCompiler).then(() => {
        resolve();
        // This calls the production bundle of the Universal React App just created.
        // This includes an express server.
        if (serve) {
          __non_webpack_require__(path.resolve(__dirnameBeforeCompiled, './universal/buildServer/main.js'));
        }
      });
    });
  });
} 



export default function startUniversalExpress() {
  function makeAsyncPageFiles() {
    if (!argv.asyncRoutes || !argv.asyncDir) {
      return {};
    }
    
    const dirRoot = argv.dirroot || process.cwd();
    const jsonPath = path.resolve(dirRoot,argv.asyncRoutes);
    if (!fs.existsSync(jsonPath)) {
      return {};
    }
    const json = fs.readJsonSync(jsonPath);
    Object.keys(json).forEach((key) => {
      const newFilePath = path.resolve(argv.asyncDir,`${key}.js`);
      const originalFilePath = path.resolve(dirRoot,json[key]);
      const newFileContent = `
        import Comp from '${originalFilePath}';
        export default Comp;
        export * from '${originalFilePath}';
      `;
      if (!fs.existsSync(newFilePath)) {
        fs.writeFileSync(newFilePath,newFileContent);
      }
    },{});
  }
  makeAsyncPageFiles();



  const isDeploy = argv.isDeploy === 'true';
  const isDev = argv.isDev === 'true' && !isDeploy;
  const isUniversal = argv.isUniversal === 'true' || !isDev || isDeploy;

  const clientConfig = webpackConfig({
    isReact:true,
    isClient:true,
    isDev,
    isUniversal:true,
  });
  const serverConfig = webpackConfig({
    isReact:true,
    isClient:false,
    isDev,
    isUniversal,
  });
  if (isDeploy) {
    // `npm run bern4`
    clearCompileAndServeProductionUniversalExpress(clientConfig,serverConfig,false).then(() => {
       /* eslint-disable no-console */
      console.log('🦁 Webpack production done for Universal React (for deploy, so no localhost started');
      /* eslint-enable no-console */
    });
  } else if (isDev) {
    // `npm run bern1` or `npm run bern2`
    
    const isUniversal = argv.isUniversal === 'true';

    /* eslint-disable no-console */
    console.info(`🔷 Starting webpack development for ${isUniversal ? 'Universal':'NonUniversal'} React ...`);
    /* eslint-enable no-console */
    
    compileAndServeWebpackDevMiddlewareHMRUniversalExpress(clientConfig, serverConfig).then((stats) => {
      webpackParseStatsForDepProblems(stats);
      /* eslint-disable no-console */
      console.log(`🦁 Webpack development done for ${isUniversal ? 'Universal':'NonUniversal'} React`);
      /* eslint-enable no-console */
    });
    
  } else {
    // `npm run bern3`
    clearCompileAndServeProductionUniversalExpress(clientConfig,serverConfig).then(() => {
       /* eslint-disable no-console */
      console.log('🦁 Webpack production done for Universal React ( and localhost started)');
      /* eslint-enable no-console */
    });
  }
}
