import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import appConnect from './appConnect';
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

export default appConnect(
  (appState /* , { params }*/) => {
    return {
      activeAppScreen: appState.activeAppScreen,
    };
  }
)(Routing);
