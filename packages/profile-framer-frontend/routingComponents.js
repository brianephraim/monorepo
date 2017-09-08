import React, {Component} from 'react';
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
import ancestorConstantsHoc from './ancestorConstantsHoc';
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



let CropperWithFgBgCompletion = class extends Component {
  constructor(){
    super();
    this.generateCompletionUrl = this.generateCompletionUrl.bind(this);
  }
  generateCompletionUrl(activeCompositeImageData) {
    return `${this.props.constants.urlAppNameSpace}/${formUrl(activeCompositeImageData)}`;
  }
  render(){
    return (
      <ModalScreen hasCloseButton>
        <CropperScreen
          foreground={this.props.compositeImageData.foreground}
          background={this.props.compositeImageData.background}
          generateCompletionUrl={this.generateCompletionUrl}
        />
      </ModalScreen>
    );
  }
}
CropperWithFgBgCompletion.propTypes = {
  compositeImageData: PropTypes.object.isRequired,
  constants: PropTypes.object.isRequired,
};
CropperWithFgBgCompletion = ancestorConstantsHoc(appConnect(
  (appState /* , { params }*/) => {
    return {
      compositeImageData: appState.compositeImageData,
    };
  },
)(CropperWithFgBgCompletion));
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
