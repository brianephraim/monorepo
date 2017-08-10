// import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import ToDoUserAssignmentScreen from 'todo_app';
import Bernie from 'bernie';
import Battleship from 'battleship';
import history from '@defualt/shared-history';

import React, { Component } from 'react';
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
    description: 'Todos',
    path: '/todos/:filter',
    demoPath: '/todos/all',
    component: ToDoUserAssignmentScreen,
  },
  {
    description: 'Bernie',
    path: '/bernie',
    component: Bernie,
  },
  {
    description: 'Battleship',
    path: '/battleship',
    component: Battleship,
  },
  {
    description: 'Tacos',
    path: '/tacos',
    component: Tacos,
  },
];

const LandingScreen = ({ dispatch }) => {
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
//   <Router history={browserHistory}>
console.log('history',history)
const Routes = (
  <ConnectedRouter history={history}>
    <div>
      {
        [
          ...routes,
          ...[{
            description: 'Landing',
            path: '/',
            component: LandingScreen,
          }],
        ].map((details) => {
          return <Route key={details.path} path={details.path} component={details.component} />;
        })
      }
    </div>
  </ConnectedRouter>
);


const Routing = ({ store }) => {
  return (
    <Provider store={store}>
      {Routes}
    </Provider>
  );
};

Routing.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Routing;
