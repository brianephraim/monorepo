import React from 'react';
import PropTypes from 'prop-types';
import ToDos from './toDos/Component';
import { Users } from './users';
// <Users filter={params.filter} />
const ToDoUserAssignmentScreen = ({ match }) => {
  return (
    <div>
      <ToDos filter={match.params.filter} />
      <Users filter={match.params.filter} />
      <Users filter={match.params.filter} />
    </div>
  );
};

ToDoUserAssignmentScreen.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      filter: PropTypes.string,
    }),
  }),
};

export default ToDoUserAssignmentScreen;
