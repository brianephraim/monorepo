import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { connectRoutes, addRoutes, redirect, NOT_FOUND } from 'redux-first-router'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';

function renderReactRoot(Comp,routeData,addRoutesToApp) {
  const history = createBrowserHistory();
  const routesMap = routeData.routesMap;
  const routeInfo = routeData.routeInfo;
  const { reducer, middleware, enhancer, initialDispatch } = connectRoutes(history, routesMap, {
    initialDispatch: false,
  });
  const allReducers = routeData.allReducers;
  allReducers.location = reducer;
  /*
  routeData.routesMap = {...routeData.routesMap,...routesMap};
  routeData.allReducers = allReducers;
  routeData.actionTypeToComponentDict = actionTypeToComponentDict;
  */

  // `appNameSpace` is an action property
  // various fetching-like actions use it to distinguish which app is doing the fetching
  // redux-first-router also uses its actions, nested in the payload, for its navigation functionality
  // An app's reducers will parse actions for appNameSpace, for fetching-like actions and redux-first-router actions.
  // Rather than have those reducers parse either within the payload property object of an action, or on the root level of the action,
  // the reducer will only need to parse the root level thanks to this middle ware.
  const redundantAppNameSpaceMiddleware = (/* store */) => {return next => {return action => {
    
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

  const configureStore = () => {
    const middlewares = [thunk, middleware, redundantAppNameSpaceMiddleware];
    // if (process.env.NODE_ENV !== 'production') {
      // middlewares.push(createLogger());
    // }
    return createStore(
      combineReducers(allReducers),
      compose(enhancer, applyMiddleware(...middlewares))
    );
  };


  const store = configureStore();

  store.dispatch(addRoutes(routesMap));
  store.replaceReducer(combineReducers(allReducers));
  if (routeInfo) {
    store.dispatch({
      type: 'ADD_ROUTE_INFO',
      routeInfo,
    });
  }


  class RoutingApp extends Component {
    componentWillMount() {
      initialDispatch();
    }

    render() {    
      return (
        <Provider store={store}>
          <Comp />
        </Provider>
        
      );
    }
  }



  let rootEl;
  function getRootEl() {
    if (rootEl) {
      return rootEl;
    }
    rootEl = document.getElementById('root');
    if (!rootEl) {
      rootEl = document.createElement('div');
      rootEl.id = 'root';
      document.body.appendChild(rootEl);
    }
    return rootEl;
  }

  render(
    <RoutingApp />,
    getRootEl()
  );

}
export default renderReactRoot;
