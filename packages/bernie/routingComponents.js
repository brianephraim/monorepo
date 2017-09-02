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
import makeActionSetForeground from './makeActionSetForeground';
import { formUrl } from './deriveUrlInfo';
import {
  nameSpace,
} from './setup';
import { compositeImageIntoParams } from './compositeImage';
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

// ===

class ImagePickerTemplateWithOnClick extends Component {
  constructor() {
    super();
    this.generateLinkTo = this.generateLinkTo.bind(this);
  }
  generateLinkTo(imgSrcObj) {
    return {
      type: `BERNIE_CROP`,
      payload: {
        ...compositeImageIntoParams(this.props.compositeImageData),
        fgSrcKey: imgSrcObj.srcKey,
      },
    };
  }
  render(){
    return (
      <ModalScreen hasCloseButton headerText="Pick a design">
        <ImagePickerTemplate generateLinkTo={this.generateLinkTo} />
      </ModalScreen>
    );
  }
};
ImagePickerTemplateWithOnClick.propTypes = {
  setForeground: PropTypes.func.isRequired,
};
ImagePickerTemplateWithOnClick = connect(
  (state /* , { params }*/) => {
    return {
      compositeImageData: state.bernie.compositeImageData,
    };
  },
  {
    setForeground: makeActionSetForeground
    // setCompositeImageData: (action) => {
    //   return action;
    // },
  }
)(ImagePickerTemplateWithOnClick);

export {ImagePickerTemplateWithOnClick};



function generateCompletionUrl(activeCompositeImageData) {
  return `${nameSpace}/${formUrl(activeCompositeImageData)}`;
}
let CropperWithFgBgCompletion = (props) => {
  return (
    <CropperScreen
      foreground={props.compositeImageData.foreground}
      background={props.compositeImageData.background}
      generateCompletionUrl={generateCompletionUrl}
    />
  );
}
CropperWithFgBgCompletion.propTypes = {
  compositeImageData: PropTypes.object.isRequired,
};
CropperWithFgBgCompletion = connect(
  (state /* , { params }*/) => {
    return {
      compositeImageData: state.bernie.compositeImageData,
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
  return <TemplateUploadScreen />;
}
