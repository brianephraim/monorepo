/* eslint-disable react/no-multi-comp */
// import React from 'react';

import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';

import React, { Component } from 'react';
// import createLogger from 'redux-logger';


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

function RootComponent (props){
  const Comp = actionTypeToComponentDict[props.nameOfScreenComponent] || actionTypeToComponentDict.FALLBACK_ROUTE || MissingFallback;
  return (<Comp />);
}
RootComponent.propTypes = {
  nameOfScreenComponent: PropTypes.string.isRequired,
};
export default connect(
  (state) => {
    return {
      nameOfScreenComponent: state.location.type,
    };
  }
)(RootComponent);

let allReducers = {
  routeInfos: (state = [], action) => {
    switch (action.type) {
      case 'ADD_ROUTE_INFO':
        return [...state, action.routeInfo];
      default:
        return state;
    }
  },
};

export const routeData = {};
export function addRoutesToApp({routesMap,routeRootComponent,reducers, routeInfo}) {
  // if (routeInfo) {
  //   store.dispatch({
  //     type: 'ADD_ROUTE_INFO',
  //     routeInfo,
  //   });
  // }
  if (routesMap && routeRootComponent) {
    const newRoutesActionTypeToComponentDict = Object.keys(routesMap).reduce((accum,routeKey) => {
      accum[routeKey] = routeRootComponent;
      return accum;
    },{});
    actionTypeToComponentDict = {...actionTypeToComponentDict, ...newRoutesActionTypeToComponentDict};

    // store.dispatch(addRoutes(routesMap));

  }
  if (reducers) {
    allReducers = {...allReducers, ...reducers};
    // store.replaceReducer(combineReducers(allReducers));
  }

  routeData.routesMap = {...routeData.routesMap,...routesMap};
  routeData.allReducers = allReducers;
  routeData.actionTypeToComponentDict = actionTypeToComponentDict;
  routeData.routeInfo = routeInfo;
};





