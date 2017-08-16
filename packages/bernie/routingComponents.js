import React from 'react';
import PropTypes from 'prop-types';
import Link from 'redux-first-router-link'
import { buttonGroupComponents } from './buttonGroups';
import {payloadRefineAction} from './setup';
import CropperScreen from './CropperScreen';
import ImagePickerFacebook from './ImagePickerFacebook';
import ImagePickerTemplate from './ImagePickerTemplate';
import BernieHomeLayout from './HomeLayout'
import { compositeImageIntoParams } from './compositeImage';
import './app.scss';
/*
<BernieLink
  className={btnDetails.className}
  to={
    {
      type: `BERNIE_${btnDetails.actionType}`,
      compositeImageData: this.props.compositeImageData,
    }
  }
>
  {btnDetails.text}
</BernieLink>
*/
function BernieLink (props) {
  let to = props.to;
  if (to.compositeImageData) {
    const payload = compositeImageIntoParams(to.compositeImageData);
    if (to.bernieDynamicScreen) {
      payload.bernieDynamicScreen = to.bernieDynamicScreen;
    }
    to = {
      type: to.type,
      payload
    }
  }
  return (
    <Link
      className={props.className}
      to={payloadRefineAction(to)}
    >
      {props.children}
    </Link>);
}
BernieLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
BernieLink.defaultProps = {
  className: '',
  bernieDynamicScreen: ''
};
export {BernieLink};

// ========
// ========

export function BernieHomeLayoutWithUploadCallback(props){
  return (
    <BernieHomeLayout
      onUploadSuccess={props.handleBackroundImageSelection()}
    />
  );
};
BernieHomeLayoutWithUploadCallback.propTypes = {
  handleBackroundImageSelection: PropTypes.func.isRequired,
};

export function ImagePickerFacebookWithOnClick(props){
  return (
    <ImagePickerFacebook
      onClick={props.handleBackroundImageSelection()}
    />
  );
};
ImagePickerFacebookWithOnClick.propTypes = {
  handleBackroundImageSelection: PropTypes.func.isRequired,
};

export function ImagePickerTemplateWithOnClick(props){
  return (
    <ImagePickerTemplate
      onClick={props.handleForegroundImageSelection()}
    />
  );
};
ImagePickerTemplateWithOnClick.propTypes = {
  handleForegroundImageSelection: PropTypes.func.isRequired,
};

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

export function Dynamic(props) {
  const Comp = buttonGroupComponents[props.dynamicScreen];
  return (
    <Comp
      isModal
    />
  );
}
Dynamic.propTypes = {
  dynamicScreen: PropTypes.string.isRequired,
};