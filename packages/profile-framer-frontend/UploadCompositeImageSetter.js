import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Upload from './Upload';
import AppReduxLink from './AppReduxLink';

import styleConstants from './style-constants';
import {
  ConnectResponsiveStatusesDictHOC,
  appConnect,
} from './nameSpacedResponsive';
import ImagePickerTemplate from './ImagePickerTemplate';
import ModalScreen from './ModalScreen';
import setBackgroundHoc from './setBackgroundHoc';
import ancestorConstantsHoc from './ancestorConstantsHoc';
import { postToWall, exportStuff } from './fb';
import { formUrl } from './deriveUrlInfo';

let UploadCompositeImageSetter = props => {
  const onSuccess = props.isTemplateUploader ? props.setBackgroundTemplateUploader : props.setBackground;
  return (
    <Upload
      onSuccess={onSuccess}
      onLoading={props.onLoading}
      onError={props.onError}
      backendApiPrefix={props.constants.backendApiPrefix}
    >
      {props.children}
    </Upload>
  );
};
UploadCompositeImageSetter.propTypes = {
  isTemplateUploader: PropTypes.bool,
  setBackground: PropTypes.func.isRequired,
  setBackgroundTemplateUploader: PropTypes.func.isRequired,
  constants: PropTypes.object.isRequired,
  children: PropTypes.node,
};
UploadCompositeImageSetter.defaultProps = {
  isTemplateUploader: false,
  children: null,
};
UploadCompositeImageSetter = ancestorConstantsHoc(
  setBackgroundHoc(UploadCompositeImageSetter)
);

export default UploadCompositeImageSetter;