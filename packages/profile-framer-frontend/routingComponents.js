import React from 'react';
import PropTypes from 'prop-types'; 
import {appConnect} from './nameSpacedResponsive';
import CropperScreen from './CropperScreen';
import ImagePickerFacebook from './ImagePickerFacebook';
import ImagePickerTemplate from './ImagePickerTemplate';
import HomeLayout from './HomeLayout';
import UrlImportScreen from './UrlImportScreen';
import TemplateUploadScreen from './TemplateUploadScreen';
import ModalScreen from './ModalScreen';
import './app.scss';
import makeActionSetBackground from './makeActionSetBackground';
import { formUrl } from './deriveUrlInfo';
import constants from './constants';
// ========
// ========
let HomeLayoutWithUploadCallback = (props) => {
  return (
    <HomeLayout onUploadSuccess={props.setBackground} />
  );
}
HomeLayoutWithUploadCallback.propTypes = {
  setBackground: PropTypes.func.isRequired,
};
HomeLayoutWithUploadCallback = appConnect(
  null,
  {
    setBackground: makeActionSetBackground
  }
)(HomeLayoutWithUploadCallback);

export {HomeLayoutWithUploadCallback};



// let ImagePickerFacebookWithOnClick = 
export function ImagePickerFacebookWithOnClick () {
  return (
    <ModalScreen hasCloseButton headerText="Pick a photo">
      <ImagePickerFacebook />
    </ModalScreen>
  );
}

// ===

export function ImagePickerTemplateWithOnClick () {
  return (
    <ModalScreen hasCloseButton headerText="Pick a design">
      <ImagePickerTemplate />
    </ModalScreen>
  );
}



function generateCompletionUrl(activeCompositeImageData) {
  return `${constants.urlAppNameSpace}/${formUrl(activeCompositeImageData)}`;
}
let CropperWithFgBgCompletion = (props) => {
  return (
    <ModalScreen hasCloseButton>
      <CropperScreen
        foreground={props.compositeImageData.foreground}
        background={props.compositeImageData.background}
        generateCompletionUrl={generateCompletionUrl}
      />
    </ModalScreen>
  );
}
CropperWithFgBgCompletion.propTypes = {
  compositeImageData: PropTypes.object.isRequired,
};
CropperWithFgBgCompletion = appConnect(
  (appState /* , { params }*/) => {
    return {
      compositeImageData: appState.compositeImageData,
    };
  },
)(CropperWithFgBgCompletion);
export {CropperWithFgBgCompletion};




export function UrlImportScreenWithWithUploadCallback() {
  return (
    <ModalScreen hasCloseButton headerText="Enter the URL to an Image">
      <UrlImportScreen />
    </ModalScreen>
  );
}

export function TemplateUploadScreenWithUploadCallback() {
  return (
    <ModalScreen hasCloseButton headerText="Upload a template">
      <TemplateUploadScreen />
    </ModalScreen>
  );
}
