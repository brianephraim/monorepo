import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import CropperScreen from './CropperScreen';
import ImagePickerFacebook from './ImagePickerFacebook';
import ImagePickerTemplate from './ImagePickerTemplate';
import BernieHomeLayout from './HomeLayout';
import UrlImportScreen from './UrlImportScreen';
import TemplateUploadScreen from './TemplateUploadScreen';
import ModalScreen from './ModalScreen';
import './app.scss';
import makeActionSetBackground from './makeActionSetBackground';

// ========
// ========
let BernieHomeLayoutWithUploadCallback = (props) => {
  return (
    <BernieHomeLayout onUploadSuccess={props.setBackground} />
  );
}
BernieHomeLayoutWithUploadCallback.propTypes = {
  setBackground: PropTypes.func.isRequired,
};
BernieHomeLayoutWithUploadCallback = connect(
  null,
  {
    setBackground: makeActionSetBackground
    // setCompositeImageData: (action) => {
    //   return action;
    // },
  }
)(BernieHomeLayoutWithUploadCallback);

export {BernieHomeLayoutWithUploadCallback};



// let ImagePickerFacebookWithOnClick = 
let ImagePickerFacebookWithOnClick = (props) => {
  return (
    <ModalScreen hasCloseButton headerText="Pick a photo">
      <ImagePickerFacebook onClick={props.setBackground} />
    </ModalScreen>
  );
};
ImagePickerFacebookWithOnClick.propTypes = {
  setBackground: PropTypes.func.isRequired,
};
ImagePickerFacebookWithOnClick = connect(
  null,
  {
    setBackground: makeActionSetBackground
    // setCompositeImageData: (action) => {
    //   return action;
    // },
  }
)(ImagePickerFacebookWithOnClick);

export {ImagePickerFacebookWithOnClick};


export function ImagePickerTemplateWithOnClick() {
  return (
    <ModalScreen hasCloseButton headerText="Pick a design">
      <ImagePickerTemplate />
    </ModalScreen>
  );
}

export function CropperWithFgBgCompletion(props) {
  return (
    <CropperScreen
      foreground={props.compositeImageData.foreground}
      background={props.compositeImageData.background}
      generateCompletionUrl={props.generateCompletionUrl}
    />
  );
}
CropperWithFgBgCompletion.propTypes = {
  compositeImageData: PropTypes.object.isRequired,
  generateCompletionUrl: PropTypes.func.isRequired,
};

export function UrlImportScreenWithWithUploadCallback() {
  return (
    <ModalScreen hasCloseButton headerText="Enter the URL to an Image">
      <UrlImportScreen />
    </ModalScreen>
  );
}

export function TemplateUploadScreenWithUploadCallback() {
  return <TemplateUploadScreen />;
}
