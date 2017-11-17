import { createStore, applyMiddleware, compose, applyAfterware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import { connectRoutes,addRoutes } from 'redux-first-router'
import reduxThunk from 'redux-thunk';

import routesMap from './routesMap'
import options from './options'
import * as reducers from './reducers'
import * as actionCreators from './actions'

import {routeData} from 'virtual-module-initialAppIntegration';

import {
  ApolloClient,
  createNetworkInterface
} from 'react-apollo';

import createStoreAndInjector from 'redux-injector';




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
  let windowRoutesMap = {}
  if(typeof window !== 'undefined' && window.routeDataFromInitialApp) {
    windowRoutesMap = window.routeDataFromInitialApp.routesMap;
  }

  const networkInterface = createNetworkInterface({
    uri: '/graphql',
    opts: {
      credentials: 'same-origin',
    },
  });
  let i = 0;
  networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};  // Create the header object if needed.
      }
      req.options.headers.name = `${req.request.operationName}_${i++}`;
      if(req.request && req.request.variables && req.request.variables.headers) {
        Object.assign(req.options.headers,req.request.variables.headers);
        delete req.request.variables.headers;
      }
      if (req.options.headers.name) {
        store.dispatch({
          type: 'ADD_CURRENTLY_LOADING',
          name: req.options.headers.name,
          appNameSpace: req.options.headers.appNameSpace
        });
      }
      // req.options.headers['authorization'] = localStorage.getItem('token') ? localStorage.getItem('token') : null;
      next();
    }
  }]);
  networkInterface.useAfter([{
    applyAfterware(x, next) {
      if (x.options.headers.name) {
        store.dispatch({
          type: 'REMOVE_CURRENTLY_LOADING',
          name: x.options.headers.name,
          appNameSpace: x.options.headers.appNameSpace
        });
      }
      next();
    }
  }]);

  const client = new ApolloClient({
    dataIdFromObject: result => result.id || null,
    networkInterface
  });

  const { reducer, middleware, enhancer, thunk, initialDispatch } = connectRoutes(
    history,
    {
      ...routesMap,
      ...windowRoutesMap,
    },
    {
      ...options,
      initialDispatch:false
    }
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
    },
    currentlyLoading: (state = {all:[]}, action = {}) => {
      let nameSpacedArray;
      if (action.appNameSpace) {
        nameSpacedArray = state[action.appNameSpace] || [];
        if (action.type === 'REMOVE_CURRENTLY_LOADING') {
          nameSpacedArray = nameSpacedArray.filter((name) => {
            if (name === action.name) {
              return false
            }
            return true;
          })
        }
        if (action.type === 'ADD_CURRENTLY_LOADING') {
          nameSpacedArray = [...nameSpacedArray, action.name];
        }
        if (action.type === 'CLEAR_CURRENTLY_LOADING') {
          nameSpacedArray = [];
        }

      }
      let stateAll = state.all || [];
      if (action.type === 'REMOVE_CURRENTLY_LOADING') {
        stateAll = stateAll.filter((name) => {
          if (name === action.name) {
            return false
          }
          return true;
        })
      }
      if (action.type === 'ADD_CURRENTLY_LOADING') {
        stateAll = [...stateAll, action.name];
      }
      if (action.type === 'CLEAR_CURRENTLY_LOADING') {
        stateAll = [];
      }
      
      return {
        ...state,
        all: stateAll,
        ...(!action.appNameSpace ? {} : {
          [action.appNameSpace]: nameSpacedArray
        })
      };
    },
  };

  const laterReducers = {
    ...moreReducers,
    ...reducers,
    ...routeData.reducers,
  };

  const rootReducer = {
    location: reducer,
    apollo: client.reducer(),
  };
  // const middlewares = applyMiddleware(thunk, middleware, redundantAppNameSpaceMiddleware)
  const middlewares = applyMiddleware(
    client.middleware(),
    reduxThunk.withExtraArgument({
      client,
      injectReducers: (...args) => {
        injectReducers(...args)
      }
    }),
    middleware,
    redundantAppNameSpaceMiddleware
  );

  const enhancers = composeEnhancers(enhancer, middlewares);
  const {store,injectReducers} = createStoreAndInjector(rootReducer, preLoadedState, enhancers);
  injectReducers('',{ddd:() => { return 'eeee'; }});
  injectReducers('',laterReducers);

  const aThunk = addRoutes(routeData.routesMap); // export new routes from component file
  store.dispatch(aThunk);
  initialDispatch();
  if (typeof window !== 'undefined') {
    window.ss = store;
  }
  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('./reducers/index', () => {
      const reducers = require('./reducers/index');
      injectReducers('',reducers, true);
    })
  }

  return { store, thunk, injectReducers, client, }
}

