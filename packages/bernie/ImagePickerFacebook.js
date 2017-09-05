import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeActionFetchPhotos } from './fb';
import ImagePicker from './ImagePicker';
import makeActionSetBackground from './makeActionSetBackground';
import appConnect from './appConnect';



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

const appConnected = appConnect(
  (appState /* , { params }*/) => {
    return {
      images: appState.facebookPhotos,
    };
  },
  {
    fetchFacebookPhotos: makeActionFetchPhotos,
    setBackground: makeActionSetBackground
  }
)(ImagePickerFacebook);
export default appConnected;