/* eslint-disable react/no-multi-comp */
// import React from 'react';
import { connectRoutes, addRoutes, NOT_FOUND } from 'redux-first-router'
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import Link from 'redux-first-router-link'
import history from '@defualt/shared-history';
import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const routes = [];

let actionTypeToComponentDict = {};

const LandingScreen = () => {
  return (
    <div>
      <h1>WELCOME</h1>
      { routes.map((details) => {
        return (
          <div key={details.path}>
            <Link to={details.demoPath || details.path}>
              {details.description}
            </Link>
          </div>
        );
      }) }
    </div>
  );
};

let RootComponent = class extends Component {
  render(){
    const Comp = actionTypeToComponentDict[this.props.nameOfScreenComponent] || LandingScreen;
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

const { reducer, middleware, enhancer, initialDispatch } = connectRoutes(history, routesMap, {initialDispatch: false});

let allReducers = {
  location: reducer,
};

const configureStore = () => {
  const middlewares = [thunk, middleware];
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
    routes.push(routeInfo);
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

