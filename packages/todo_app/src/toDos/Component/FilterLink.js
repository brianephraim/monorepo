import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './FilterLink.scss';

const FilterLink = ({ filter, children }) => (
  <NavLink
    className="aaaa"
    to={`/todos/${filter}`}
    activeClassName="activex"
    activeStyle={{
      textDecoration: 'none',
      color: 'black',
    }}
  >
    {children}
  </NavLink>
);

FilterLink.propTypes = {
  filter: PropTypes.oneOf(['all', 'completed', 'active']).isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterLink;
