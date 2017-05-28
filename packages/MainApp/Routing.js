import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import ToDoUserAssignmentScreen from 'ToDoUserAssignmentScreen';
import Bernie from 'bernie';
import Battleship from 'Battleship';
const Routing = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/todos/(:filter)" component={ToDoUserAssignmentScreen} />
        <Route path="/bernie" component={Bernie} />
        <Route path="/battleship" component={Battleship} />
      </Router>
    </Provider>
  );
};

Routing.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Routing;
