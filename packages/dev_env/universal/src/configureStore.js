import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import { connectRoutes } from 'redux-first-router'
import reduxThunk from 'redux-thunk';

import routesMap from './routesMap'
import options from './options'
import * as reducers from './reducers'
import * as actionCreators from './actions'

// problem deps
import {routeData} from 'MainApp';





// `appNameSpace` is an action property
// various fetching-like actions use it to distinguish which app is doing the fetching
// redux-first-router also uses its actions, nested in the payload, for its navigation functionality
// An app's reducers will parse actions for appNameSpace, for fetching-like actions and redux-first-router actions.
// Rather than have those reducers parse either within the payload property object of an action, or on the root level of the action,
// the reducer will only need to parse the root level thanks to this middle ware.
const redundantAppNameSpaceMiddleware = store => {return next => {return action => {

  // for when profile-framer is the root level URL.
  // in this situation, there is no payload.appNameSpace
  // profile-framer is detected by presence of 'fgX'.
  if(action.payload && action.payload.fgX && !action.payload.appNameSpace){
    const newAction = {
      payload: {
        ...action.payload,
      },
      ...action,
      appNameSpace: 'rootProfileFramer',
    };
    return next(newAction);
  }
  // for when provided a action.payload.appNameSpace but maybe no action.appNameSpace
  // make action.appNameSpace match action.payload.appNameSpace
  if (action.payload && action.payload.appNameSpace && action.payload.appNameSpace !== action.appNameSpace ) {
    const newAction = {
      ...action,
      appNameSpace: action.payload.appNameSpace,
    };
    return next(newAction);
  }

  // when there is a action.appNameSpace and action.payload, but maybe no action.payload.appNameSpace
  // make action.payload.appNameSpace match action.appNameSpace
  if (action.payload && action.appNameSpace && action.payload.appNameSpace !== action.appNameSpace ) {
    const newAction = {
      ...action,
      payload: {
        ...action.payload,
        appNameSpace: action.appNameSpace,
      }
    };
    return next(newAction);
  }

  return next(action);
}}}


const composeEnhancers = (...args) =>
  typeof window !== 'undefined'
    ? composeWithDevTools({ actionCreators })(...args)
    : compose(...args)


export default (history, preLoadedState) => {
  const { reducer, middleware, enhancer, thunk } = connectRoutes(
    history,
    routesMap,
    options
  )
  const moreReducers = {
    serverClientUrl: (state = '', action = '') => {
      if (action.type === 'UDPATE_SERVER_CLIENT_URL') {
        return action.url
      }
      return state;
    },
    serverClientOrigin: (state = '', action = '') => {
      if (action.type === 'UDPATE_SERVER_CLIENT_ORIGIN') {
        return action.origin
      }
      return state;
    }
  };

  const rootReducer = combineReducers({...moreReducers, ...reducers, ...routeData.allReducers, location: reducer })
  // const middlewares = applyMiddleware(thunk, middleware, redundantAppNameSpaceMiddleware)
  const middlewares = applyMiddleware(reduxThunk,middleware,redundantAppNameSpaceMiddleware)

  const enhancers = composeEnhancers(enhancer, middlewares)
  const store = createStore(rootReducer, preLoadedState, enhancers)
  if (typeof window !== 'undefined') {
    window.ss = store;
  }
  console.log('process.env.NODE_ENV',process.env.NODE_ENV);
  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('./reducers/index', () => {
      const reducers = require('./reducers/index')
      const rootReducer = combineReducers({...moreReducers, ...reducers, ...routeData.allReducers, location: reducer })
      store.replaceReducer(rootReducer)
    })
  }

  return { store, thunk }
}

