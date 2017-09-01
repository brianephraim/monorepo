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

// ========
// ========

export function BernieHomeLayoutWithUploadCallback(props) {
  return (
    <BernieHomeLayout onUploadSuccess={props.handleBackroundImageSelection()} />
  );
}
BernieHomeLayoutWithUploadCallback.propTypes = {
  handleBackroundImageSelection: PropTypes.func.isRequired,
};

export function ImagePickerFacebookWithOnClick(props) {
  return (
    <ModalScreen hasCloseButton headerText="Pick a photo">
      <ImagePickerFacebook onClick={props.handleBackroundImageSelection()} />
    </ModalScreen>
  );
}
ImagePickerFacebookWithOnClick.propTypes = {
  handleBackroundImageSelection: PropTypes.func.isRequired,
};

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

function zzz (a) {
  console.log(a);
}
export function UrlImportScreenWithWithUploadCallback(props) {
  return (
    <ModalScreen hasCloseButton headerText="Enter the URL to an Image">
      <UrlImportScreen onSubmit={zzz} />
    </ModalScreen>
  );
}
ImagePickerFacebookWithOnClick.propTypes = {
  handleBackroundImageSelection: PropTypes.func.isRequired,
};

export function TemplateUploadScreenWithUploadCallback() {
  return <TemplateUploadScreen />;
}
