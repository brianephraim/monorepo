import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom/server'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import {Helmet} from "react-helmet";
import { ServerStyleSheet } from 'styled-components'
// import configureStore from './configureStore'
import App from '../src/components/App'
import createHistory from 'history/createMemoryHistory'
import { NOT_FOUND } from 'redux-first-router'
import configureStore from '../src/configureStore'
import url from 'url';



import express from 'express';
import { argv } from 'yargs';
import demoEndpoints from './demoEndpoints';
import bernieServer from '@defualt/bernieserver/bernieserver.express';
import junkServer from '@defualt/junk-express/junk-express.express';
import path from 'path';
import fs from 'fs-extra';
import _eval from 'eval';
import webpackConfig from '../../webpackConfig';





const doesRedirect = ({ kind, pathname }, res) => {
  if (kind === 'redirect') {
    res.redirect(302, pathname)
    return true
  }
  return false;
}

const render = ({ clientStats }) => async (req, res, next) => {
  // const store = await configureStoreX(req, res)
  // if (!store) return // no store means redirect was already served

  // =====START configureStoreX ===
  const jwToken = req.cookies.jwToken // see server/index.js to change jwToken
  const preLoadedState = { jwToken } // onBeforeChange will authenticate using this

  const history = createHistory({ initialEntries: [req.path] })
  const { store, thunk } = configureStore(history, preLoadedState)
  function fullUrl(req) {
    return decodeURIComponent(url.format({
      protocol: req.protocol,
      host: req.get('host'),
      pathname: req.originalUrl
    }));
  }
  store.dispatch({
    type: 'UDPATE_SERVER_CLIENT_URL',
    url: fullUrl(req)
  });
  function fullOrigin(req) {
    return decodeURIComponent(url.format({
      protocol: req.protocol,
      host: req.get('host'),
    }));
  }
  store.dispatch({
    type: 'UDPATE_SERVER_CLIENT_ORIGIN',
    origin: fullOrigin(req)
  });


  // if not using onBeforeChange + jwTokens, you can also async authenticate
  // here against your db (i.e. using req.cookies.sessionId)

  let location = store.getState().location
  if (doesRedirect(location, res)) return false

  // using redux-thunk perhaps request and dispatch some app-wide state as well, e.g:
  // await Promise.all([store.dispatch(myThunkA), store.dispatch(myThunkB)])

  await thunk(store) // THE PAYOFF BABY!

  location = store.getState().location // remember: state has now changed
  if (doesRedirect(location, res)) return false // only do this again if ur thunks have redirects

  const status = location.type === NOT_FOUND ? 404 : 200
  res.status(status)
  // =====END configureStoreX ===



  // ==== 



  const sheet = new ServerStyleSheet()


  const appString = ReactDOM.renderToString(
    sheet.collectStyles(<App store={store} />)
  );

  const styledComponentsRenderedTags = sheet.getStyleTags()

  const helmet = Helmet.renderStatic();
  const stateJson = JSON.stringify(store.getState())
  const chunkNames = flushChunkNames()
  const { js, styles, cssHash } = flushChunks(clientStats, { chunkNames })
  const webpackStyles = styles;

  console.log('REQUESTED PATH:', req.path)
  console.log('CHUNK NAMES', chunkNames)

  return res.send(
    `<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
          ${webpackStyles}
          ${styledComponentsRenderedTags}
          <link rel="stylesheet prefetch" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
        </head>
        <body>
          <script>window.REDUX_STATE = ${stateJson}</script>
          <div id="root">${appString}</div>
          ${cssHash}
          <script type='text/javascript' src='/staticx/vendor.js'></script>
          ${js}
        </body>
      </html>`
  )
}

export default render;





function asyncRecurseStartApps(app,serverNamespaces) {
  // I want to asynchronously load these endpoint modules.
  // but this is tricky.  Fix this later.
  const extraServers = {
    bernieserver: bernieServer,
    'junk-express': junkServer,
  };
  return new Promise((resolve) => {
    let i = 0;
    function recurse(backendAppNamespace) {
      console.log('backendAppNamespace',backendAppNamespace);
      const someBackendApp = extraServers[backendAppNamespace];
      // const someBackendApp = __non_webpack_require__(path.resolve(__xdirname, `../../packages/${backendAppNamespace}/${backendAppNamespace}.express`));
      // import(`../../packages/${backendAppNamespace}/${backendAppNamespace}.express`).then((someBackendApp) => {
      const serveBackendApp = someBackendApp.default || someBackendApp;
      const backendAppSettings = {
        nameSpace: backendAppNamespace,
      };
      backendAppSettings.app = app;
      serveBackendApp(backendAppSettings);
      const nextNamespace = serverNamespaces[++i];
      if (nextNamespace) {
        recurse(nextNamespace);
      } else {
        resolve(app);
      }
      // });
    }
    recurse(serverNamespaces[i]);
  });  
}

function startUniversalExpress(app) {
  const serverRender = render;
  const clientStats = fs.readJsonSync(path.resolve(process.cwd(),'./packages/dev_env/universal/buildClient/stats.json'));
  const clientProdConfig = webpackConfig({isReact:true,isClient:true,isDev:false,isUniversal:true,'xxx':113});
  const publicPath = clientProdConfig.output.publicPath
  const outputPath = 'packages/dev_env/universal/buildClient';
  app.use(publicPath, express.static(outputPath))
  app.use(serverRender({ clientStats, outputPath })) 
}

function startWebpack(app) {
  /* eslint-disable no-console */
  console.log('SERVE');
  /* eslint-enable no-console */
  app.use('/images', express.static('packages/images'));
  app.use('/fonts', express.static('packages/fonts'));
  demoEndpoints({app}) 
  startUniversalExpress(app);
  const port = process.env.PORT || 3000;
  app.listen(port, (error) => {
    /* eslint-disable no-console */
    if (error) {
      console.error(error);
    } else {
      console.info(
        '🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
        port,
        port,
      );
    }
    /* eslint-enable no-console */
  });
  return app;
}

function startServer() {
  const serverNamespaces = argv.servers && argv.servers.split(',');
  const app = express();
  if (serverNamespaces) {
    asyncRecurseStartApps(app,serverNamespaces).then(startWebpack);
  } else {
    startWebpack(app)
  }
  // startWebpack(express())
}

if(argv.isDeploy || true) {
  // startWebpack(express())
  startServer();
}
