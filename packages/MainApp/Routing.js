import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, Link } from 'react-router';
import ToDoUserAssignmentScreen from 'ToDoUserAssignmentScreen';
import Bernie from 'bernie';
import Battleship from 'Battleship';



/*

*/


const routes = [
  {
    description: 'Todos',
    path: '/todos/(:filter)',
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

const Routes = (
  <Router history={browserHistory}>
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
  </Router>
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
