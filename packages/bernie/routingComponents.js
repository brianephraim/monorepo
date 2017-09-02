import { connect } from 'react-redux';
import React, {Component} from 'react';
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
import { formUrl } from './deriveUrlInfo';
import {
  nameSpace,
} from './setup';

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

function generateCompletionUrl(activeCompositeImageData) {
  return `${nameSpace}/${formUrl(activeCompositeImageData)}`;
}
class CropperWithFgBgCompletion extends Component {
  render(){
    return (
      <CropperScreen
        foreground={this.props.compositeImageData.foreground}
        background={this.props.compositeImageData.background}
        generateCompletionUrl={generateCompletionUrl}
      />
    );
  }
}
CropperWithFgBgCompletion.propTypes = {
  compositeImageData: PropTypes.object.isRequired,
};
export {CropperWithFgBgCompletion};

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
