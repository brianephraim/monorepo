/* eslint-disable react/no-multi-comp */
// import React from 'react';
import { connectRoutes, NOT_FOUND } from 'redux-first-router'
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import Link from 'redux-first-router-link'
import ToDoUserAssignmentScreen from 'todo_app';
import Bernie from 'bernie';
import Battleship from 'battleship';
import history from '@defualt/shared-history';
import React, { Component } from 'react';
import { bernieRoutesMap } from 'bernie/setup';
// import PropTypes from 'prop-types';

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
];

let actionTypeToComponentDict = routes.reduce((accum,route) => {
  accum[route.action] = route.component;
  return accum;
}, {});
const bernieRoutesActionTypeToComponentDict = Object.keys(bernieRoutesMap).reduce((accum,routeKey) => {
  accum[routeKey] = Bernie;
  return accum;
},{});
actionTypeToComponentDict = {...actionTypeToComponentDict, ...bernieRoutesActionTypeToComponentDict};

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

const routesMap = routes.reduce((accum,route) => {
  accum[route.action] = route.path
  return accum;
},{});

const { reducer, middleware, enhancer } = connectRoutes(history, {...routesMap,...bernieRoutesMap});
const routingMiddleware = middleware;
const routingEnhancer = enhancer;

const routingReducers = {
  location: reducer,
  userId: userIdReducer
};
export { routingReducers/* combineReducers(routingReducer) */, routingMiddleware/* applyMiddleware(routingMiddleware) */, routingEnhancer/* createStore(rootReducer, compose(routingEnhancer, middlewares))*/ };

class RoutingApp extends Component {
  render() {
    // const Comp = this.props.routeScreenComponent;
    const Comp = actionTypeToComponentDict[this.props.locationType] || LandingScreen;
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

