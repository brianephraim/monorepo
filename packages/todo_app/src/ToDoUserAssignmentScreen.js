import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import ToDos from './toDos/Component';
import { Users } from './users';
// <Users filter={params.filter} />

const ToDoUserAssignmentScreen = ({ filter }) => {
  return (
    <div>
      <ToDos filter={filter} />
      <Users filter={filter} /> 
      <Users filter={filter} />
    </div>
  );
};

ToDoUserAssignmentScreen.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default connect(
  ( state/* , { params }*/) => {
    return {
      filter: state.toDos.filter,
    };
  },
  {
  }
)(ToDoUserAssignmentScreen);
