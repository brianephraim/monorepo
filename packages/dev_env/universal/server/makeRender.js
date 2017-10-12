import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import createHistory from 'history/createMemoryHistory'
import { NOT_FOUND } from 'redux-first-router'
import url from 'url';
import routeData from 'virtual-module-initial-app';

import configureStore from '../src/configureStore'

const doesRedirect = ({ kind, pathname }, res) => {
  if (kind === 'redirect') {
    res.redirect(302, pathname)
    return true
  }
  return false;
}

export default function makeRender(makeHtmlConstituents = () => { return {}; }) {
  return ({ clientStats }) => async (req, res, next) => {
    // =====START configureStoreX ===
    const jwToken = req.cookies.jwToken // see server/index.js to change jwToken
    const preLoadedState = { jwToken } // onBeforeChange will authenticate using this

    const history = createHistory({ initialEntries: [req.path] })
    const { store, thunk, addReducers } = configureStore(history, preLoadedState)
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

    const stateJson = JSON.stringify(store.getState())
    const chunkNames = flushChunkNames()
    const { js, styles, cssHash } = flushChunks(clientStats, { chunkNames })
    console.log('REQUESTED PATH:', req.path)
    console.log('CHUNK NAMES', chunkNames);

    const htmlConstituents = makeHtmlConstituents({store,styles,addReducers});

    const headContent = htmlConstituents.head || `
      <title>redux-first-router-demo</title>
      ${styles}
    `;
    const bodyContent = htmlConstituents.body || `
      <div id="root" class="nonUniversal"></div>
    `;

    return res.send(
      `<!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            ${headContent}
            <link rel="stylesheet prefetch" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
          </head>
          <body>
            <script>
              window.REDUX_STATE = ${stateJson};
              window.pageMapFromInitialApp = ${JSON.stringify(routeData.pageMap, null, 2)};
            </script>

            ${bodyContent}

            ${cssHash}
            <script type='text/javascript' src='/staticx/vendor.js'></script>
            ${js}
          </body>
        </html>`
    )
  }
}