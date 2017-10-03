import React from 'react';
import PropTypes from 'prop-types';
import Upload from './Upload';
import setBackgroundHoc from './setBackgroundHoc';
import ancestorConstantsHoc from './ancestorConstantsHoc';

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