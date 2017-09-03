/* eslint-disable react/no-multi-comp */
/* eslint-disable class-methods-use-this */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  bernieScreenComponentMap,
} from './setup';
import './app.scss';

const Routing = class extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const Comp = bernieScreenComponentMap[this.props.bernieScreen];

    return (
      <Comp />
    );
  }
};
Routing.propTypes = {
  bernieScreen: PropTypes.string.isRequired,
};

export default connect(
  (state /* , { params }*/) => {
    return {
      bernieScreen: state.bernie.bernieScreen,
    };
  }
)(Routing);
