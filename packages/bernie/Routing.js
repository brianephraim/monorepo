import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {
  screenComponentMap,
} from './setup';
import './app.scss';

function Routing (props) {
  const Comp = screenComponentMap[props.activeAppScreen];
  return (
    <Comp />
  );
};
Routing.propTypes = {
  activeAppScreen: PropTypes.string.isRequired,
};

export default connect(
  (state /* , { params }*/) => {
    return {
      activeAppScreen: state.bernie.activeAppScreen,
    };
  }
)(Routing);
