import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Asdf extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
Asdf.propTypes = {
  children: PropTypes.node.isRequired,
};
