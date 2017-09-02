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
      <Comp
        compositeImageData={this.props.compositeImageData}
        dynamicScreen={this.props.dynamicScreen}
      />
    );
  }
};
Routing.propTypes = {
  bernieScreen: PropTypes.string.isRequired,
  dynamicScreen: PropTypes.string,
  compositeImageData: PropTypes.object.isRequired,
};
Routing.defaultProps = {
  dynamicScreen: '',
};

export default connect(
  (state /* , { params }*/) => {
    return {
      compositeImageData: state.bernie.compositeImageData,
      bernieScreen: state.bernie.bernieScreen,
      dynamicScreen: state.location.payload.bernieDynamicScreen,
    };
  },
  {
    setCompositeImageData: action => {
      return action;
    },
  }
)(Routing);
