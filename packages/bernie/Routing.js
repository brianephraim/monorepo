import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {
  bernieScreenComponentMap,
} from './setup';
import './app.scss';

function Routing (props) {
  const Comp = bernieScreenComponentMap[props.bernieScreen];
  return (
    <Comp />
  );
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
