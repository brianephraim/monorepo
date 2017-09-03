import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeActionFetchPhotos } from './fb';
import ImagePicker from './ImagePicker';
import makeActionSetBackground from './makeActionSetBackground';

class ImagePickerFacebook extends Component {
  componentWillMount() {
    this.props.fetchFacebookPhotos();
  }
  render() {
    return <ImagePicker images={this.props.images} onClick={this.props.setBackground} {...this.props} />;
  }
}
ImagePickerFacebook.propTypes = {
  setBackground: PropTypes.func.isRequired,
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
    setBackground: makeActionSetBackground
  }
)(ImagePickerFacebook);
