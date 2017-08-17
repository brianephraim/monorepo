/* eslint-disable react/no-multi-comp */
// import React from 'react';
import { connectRoutes, addRoutes, NOT_FOUND } from 'redux-first-router'
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import Link from 'redux-first-router-link'
import ToDoUserAssignmentScreen from 'todo_app';
import Battleship from 'battleship';
import history from '@defualt/shared-history';
import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import ToDosReducers from 'todo_app/src/toDos/state/reducers';
import { usersReducers } from 'todo_app/src/users';
import appRootReducers from './appRootReducers';

/*

*/

const routes = [
  {
    action: 'TODOS',
    description: 'Todos',
    path: '/todos/:filter',
    demoPath: '/todos/all',
    component: ToDoUserAssignmentScreen,
  },
  {
    action: 'BATTLESHIP',
    description: 'Battleship',
    path: '/battleship',
    component: Battleship,
  },
];

let actionTypeToComponentDict = routes.reduce((accum,route) => {
  accum[route.action] = route.component;
  return accum;
}, {});

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


const routesMap = routes.reduce((accum,route) => {
  accum[route.action] = route.path
  return accum;
},{});

const { reducer, middleware, enhancer, initialDispatch } = connectRoutes(history, {...routesMap}, {initialDispatch: false,});
const routingMiddleware = middleware;
const routingEnhancer = enhancer;

const routingReducers = {
  location: reducer,
};
export { routingReducers/* combineReducers(routingReducer) */, routingMiddleware/* applyMiddleware(routingMiddleware) */, routingEnhancer/* createStore(rootReducer, compose(routingEnhancer, middlewares))*/ };





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



let allReducers = {
  ...routingReducers,
  toDos: ToDosReducers,
  users: usersReducers,
  appRoot: appRootReducers,
  // bernie: bernieReducers,
};

const configureStore = () => {
  const middlewares = [thunk, routingMiddleware];
  // if (process.env.NODE_ENV !== 'production') {
    // middlewares.push(createLogger());
  // }

  return createStore(
    combineReducers(allReducers),
    compose(routingEnhancer, applyMiddleware(...middlewares))
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

