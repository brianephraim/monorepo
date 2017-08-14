/* eslint-disable react/no-multi-comp */
// import React from 'react';
import { connectRoutes, NOT_FOUND } from 'redux-first-router'
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import Link from 'redux-first-router-link'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import ToDoUserAssignmentScreen from 'todo_app';
import Bernie from 'bernie';
import Battleship from 'battleship';
import history from '@defualt/shared-history';
import { combineReducers } from 'redux';
import React, { Component } from 'react';
import { bernieRoutesMap } from 'bernie/state';
// import PropTypes from 'prop-types';

class Tacos extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <p>tacos</p>
        <Route
          path={this.props.match.url + '/carnitas'}
          component={Carnitas}
        />
      </div>
    );
  }
}
Tacos.propTypes = {};

class Carnitas extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (<div>carnitas</div>);
  }
}
Carnitas.propTypes = {};
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
    action: 'BERNIE',
    description: 'Bernie',
    path: '/bernie',
    component: Bernie,
  },
  {
    action: 'BATTLESHIP',
    description: 'Battleship',
    path: '/battleship',
    component: Battleship,
  },
  {
    action: 'TACOS',
    description: 'Tacos',
    path: '/tacos',
    component: Tacos,
  },
];

let actionTypeToScreenDict = routes.reduce((accum,route) => {
  accum[route.action] = route.component;
  return accum;
}, {});
const bernieRoutesActionTypeToScreenDict = Object.keys(bernieRoutesMap).reduce((accum,routeKey) => {
  console.log(routeKey)
  accum[routeKey] = Bernie;
  return accum;
},{});
actionTypeToScreenDict = {...actionTypeToScreenDict, ...bernieRoutesActionTypeToScreenDict};

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

export const userIdReducer = (state = null, action = {}) => {
  switch(action.type) {
    case 'HOME':
    case NOT_FOUND:
      return null
    case 'USER':
      return action.payload.id
    default: 
      return state
  }
}
export const todosRouteReducer = (state = null, action = {}) => {
  if(action.type === 'TODOS') {
    console.log('!!!!');
  }
  return state;
}
const routesMap = routes.reduce((accum,route) => {
  accum[route.action] = route.path
  return accum;
},{});

export const bernieRouteReduceer = () => {
  if(action.type[bernieRoutesMap]) {
    console.log('!!!!');
  }
  
};

const { reducer, middleware, enhancer } = connectRoutes(history, {...routesMap,...bernieRoutesMap});
const routingMiddleware = middleware;
const routingEnhancer = enhancer;

const routingReducers = {
  location: reducer,
  todosRoute: todosRouteReducer,
  userId: userIdReducer
};
export { routingReducers/* combineReducers(routingReducer) */, routingMiddleware/* applyMiddleware(routingMiddleware) */, routingEnhancer/* createStore(rootReducer, compose(routingEnhancer, middlewares))*/ };

class RoutingApp extends Component {
  render() {
    // const Comp = this.props.routeScreenComponent;
    const Comp = actionTypeToScreenDict[this.props.locationType] || LandingScreen;
    return (
      <Provider store={this.props.store}>
        <Comp />
      </Provider>
      
    );
  }
}
RoutingApp.propTypes = {
  store: PropTypes.object.isRequired,
  // routeScreenComponent: PropTypes.func.isRequired,
  locationType: PropTypes.string.isRequired
};
export default connect(
  ( state/* , { params }*/) => {
    return {
      locationType: state.location.type,


      // routes.reduce((component, route) => {
      //   console.log(route.path,state.location.pathname,state)
      //   if (state.location.pathname === route.path) {
      //     console.log(route.path)
      //     component = route.component
      //   }
      //   return component;
      // }, LandingScreen),
      // toBeAssigned: getDetailsOfToBeAssigned(state),
    };
  },
  {
  }
)(RoutingApp);

