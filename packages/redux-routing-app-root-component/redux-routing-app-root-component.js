/* eslint-disable react/no-multi-comp */
// import React from 'react';
import { connectRoutes, addRoutes, redirect, NOT_FOUND } from 'redux-first-router'
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory'
import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import createLogger from 'redux-logger';
import thunk from 'redux-thunk';


const history = createBrowserHistory()

let actionTypeToComponentDict = {};


function MissingFallback() {
  return (<pre>{`
YOU ARE MISSING A FALLBACK_ROUTE
DO SOMETHING LIKE THIS
================================
import {addRoutesToApp} from './Routing';

addRoutesToApp({
  routesMap:{
    FALLBACK_ROUTE: '/doesnt-matter-bacause-key-is-FALLBACK_ROUTED-which-is-special'
  },
  routeRootComponent: SomeComponent,
});
`}</pre>);
}
let RootComponent = class extends Component {
  render(){
    const Comp = actionTypeToComponentDict[this.props.nameOfScreenComponent] || actionTypeToComponentDict.FALLBACK_ROUTE || MissingFallback;
    return (<Comp />);
  }
}
RootComponent.propTypes = {
  nameOfScreenComponent: PropTypes.string.isRequired,
};
RootComponent = connect(
  (state) => {
    return {
      nameOfScreenComponent: state.location.type,
    };
  }
)(RootComponent);


const routesMap = {};

const { reducer, middleware, enhancer, initialDispatch } = connectRoutes(history, routesMap, {
  initialDispatch: false,
  // onBeforeChange: (dispatch, getState, action) => {
  //   if (action.payload && action.payload.appNameSpace && action.payload.appNameSpace !== action.appNameSpace ) {
  //     const newAction = {
  //       ...action,
  //       appNameSpace: action.payload.appNameSpace,
  //     };
  //     // dispatch(redirect(newAction))
  //     dispatch(newAction)
  //   // } else {

  //   }
  // }
});

let allReducers = {
  routeInfos: (state = [], action) => {
    switch (action.type) {
      case 'ADD_ROUTE_INFO':
        return [...state, action.routeInfo];
      default:
        return state;
    }
  },
  location: reducer,
};

// `appNameSpace` is an action property
// various fetching-like actions use it to distinguish which app is doing the fetching
// redux-first-router also uses its actions, nested in the payload, for its navigation functionality
// An app's reducers will parse actions for appNameSpace, for fetching-like actions and redux-first-router actions.
// Rather than have those reducers parse either within the payload property object of an action, or on the root level of the action,
// the reducer will only need to parse the root level thanks to this middle ware.
const redundantAppNameSpaceMiddleware = store => next => action => {
  
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
}

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
export function addRoutesToApp({routesMap,routeRootComponent,reducers, routeInfo}) {
  if (routeInfo) {
    store.dispatch({
      type: 'ADD_ROUTE_INFO',
      routeInfo,
    });
  }
  if (routesMap && routeRootComponent) {
    const newRoutesActionTypeToComponentDict = Object.keys(routesMap).reduce((accum,routeKey) => {
      accum[routeKey] = routeRootComponent;
      return accum;
    },{});
    actionTypeToComponentDict = {...actionTypeToComponentDict, ...newRoutesActionTypeToComponentDict};

    store.dispatch(addRoutes(routesMap));
  }
  if (reducers) {
    allReducers = {...allReducers, ...reducers};
    store.replaceReducer(combineReducers(allReducers));
  }
};


window.ss = store;
class RoutingApp extends Component {
  componentWillMount() {
    initialDispatch();
  }

  render() {    
    return (
      <Provider store={store}>
        <RootComponent />
      </Provider>
      
    );
  }
}

export default RoutingApp;

