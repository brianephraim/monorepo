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


// async function test() {
//   await db.destroy();
// }
// function test() {
//   return Promise.resolve().then(function () {
//     return db.destroy();
//   }).then(function () {});
// }
const doesRedirect = ({ kind, pathname }, res) => {
  if (kind === 'redirect') {
    res.redirect(302, pathname)
    return true
  }
}

// const configureStoreX = async (req, res) => {
//   const jwToken = req.cookies.jwToken // see server/index.js to change jwToken
//   const preLoadedState = { jwToken } // onBeforeChange will authenticate using this

//   const history = createHistory({ initialEntries: [req.path] })
//   const { store, thunk } = configureStore(history, preLoadedState)

//   // if not using onBeforeChange + jwTokens, you can also async authenticate
//   // here against your db (i.e. using req.cookies.sessionId)

//   let location = store.getState().location
//   if (doesRedirect(location, res)) return false

//   // using redux-thunk perhaps request and dispatch some app-wide state as well, e.g:
//   // await Promise.all([store.dispatch(myThunkA), store.dispatch(myThunkB)])

//   await thunk(store) // THE PAYOFF BABY!

//   location = store.getState().location // remember: state has now changed
//   if (doesRedirect(location, res)) return false // only do this again if ur thunks have redirects

//   const status = location.type === NOT_FOUND ? 404 : 200
//   res.status(status)
//   return store
// }



export default ({ clientStats }) => async (req, res, next) => {
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
          <script type='text/javascript' src='/static/vendor.js'></script>
          ${js}
        </body>
      </html>`
  )
}
