/* eslint-disable react/no-multi-comp */
/* eslint-disable class-methods-use-this */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBinder from '@defualt/make-binder';
import {nameSpace,bernieScreenComponentMap} from './setup';
import { formUrl } from './deriveUrlInfo';
import { getNormalizedImageInfo } from './s3';
import { setterActionCreator as compositeImageSetterActionCreator } from './compositeImage';
import './app.scss';

const Routing = class extends Component {
  constructor() {
    super();
    this.state = {};
    makeBinder(this, 'handleBackroundImageSelection');
    makeBinder(this, 'handleForegroundImageSelection');
    this.generateCompletionUrl = this.generateCompletionUrl.bind(this);
  }
  handleBackroundImageSelection(imgSrcObj) {
    // bs.loader.load
    const imgSrc = imgSrcObj.src;
    getNormalizedImageInfo(imgSrc).then(response => {
      this.props.setCompositeImageData({
        background: {
          srcKey: response.srcKey,
        },
        screen: 'crop'
      });
    });
  }
  handleForegroundImageSelection(imgSrcObj) {
    this.props.setCompositeImageData({
      foreground: {
        srcKey: imgSrcObj.srcKey,
      },
      screen: 'crop'
    });
  }
  generateCompletionUrl(activeCompositeImageData) {
    return `${nameSpace}/${formUrl(activeCompositeImageData)}`;
  }
  render() {
    const Comp = bernieScreenComponentMap[this.props.bernieScreen];

    return (
      <Comp
        handleBackroundImageSelection={this.handleBackroundImageSelection}
        handleForegroundImageSelection={this.handleForegroundImageSelection}
        generateCompletionUrl={this.generateCompletionUrl}
        compositeImageData={this.props.compositeImageData}
        dynamicScreen={this.props.dynamicScreen}
      />
    );
  }
}
Routing.propTypes = {
  bernieScreen: PropTypes.string.isRequired,
  dynamicScreen: PropTypes.string,
  compositeImageData: PropTypes.object.isRequired,
  setCompositeImageData: PropTypes.func.isRequired,
};
Routing.defaultProps = {
  dynamicScreen: ''
};

export default connect(
  ( state /* , { params }*/) => {
    return {
      compositeImageData: state.bernie.compositeImageData,
      bernieScreen: state.bernie.bernieScreen,
      dynamicScreen: state.location.payload.bernieDynamicScreen,
    };
  },
  {
    setCompositeImageData: compositeImageSetterActionCreator,
  }
)(Routing);



