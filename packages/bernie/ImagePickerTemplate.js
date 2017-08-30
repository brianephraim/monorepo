import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImagePicker from './ImagePicker';
import makeActionFetchTemplates from './makeActionFetchTemplates';


class ImagePickerTemplate extends Component {
  componentWillMount() {
    this.props.fetchTemplates();
  }
  render() {
    return (
      <ImagePicker images={this.props.images} setsForegroundForCrop limit={3} />
    );
  }
}
ImagePickerTemplate.propTypes = {
  fetchTemplates: PropTypes.func.isRequired,
  images: PropTypes.array
};
ImagePickerTemplate.defaultProps = {
  onClick: () => {},
  images: [],
};
export default connect(
  ( state /* , { params }*/) => {
    return {
      images: state.bernie.templates,
    };
  },
  {
    fetchTemplates: makeActionFetchTemplates,
  }
)(ImagePickerTemplate);
