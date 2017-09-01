import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeActionFetchPhotos } from './fb';
import ImagePicker from './ImagePicker';

class ImagePickerFacebook extends Component {
  componentWillMount() {
    this.props.fetchFacebookPhotos();
  }
  render() {
    return <ImagePicker images={this.props.images} {...this.props} />;
  }
}
ImagePickerFacebook.propTypes = {
  images: PropTypes.array.isRequired,
  fetchFacebookPhotos: PropTypes.func.isRequired,
};
export default connect(
  (state /* , { params }*/) => {
    return {
      images: state.bernie.facebookPhotos,
    };
  },
  {
    fetchFacebookPhotos: makeActionFetchPhotos,
  }
)(ImagePickerFacebook);
