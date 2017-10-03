import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchFacebookPhotosHoc } from './fb';
import ImagePicker from './ImagePicker';
import { appConnect } from './nameSpacedResponsive';
import setBackgroundHoc from './setBackgroundHoc';

class ImagePickerFacebook extends Component {
  constructor(props){
    super();
    this.fetchFacebookPhotosWithoutPassingEvent = () => {
      props.fetchFacebookPhotos();
    };
  }
  componentWillMount() {
    this.props.fetchFacebookPhotos();
  }
  render() {
    if (!this.props.images.length) {
      return (
        <p onClick={this.fetchFacebookPhotosWithoutPassingEvent}>Get photos from Facebook</p>
      );
    }
    return (
      <ImagePicker
        images={this.props.images}
        onClick={this.props.setBackground}
        {...this.props}
      />
    );
  }
}
ImagePickerFacebook.propTypes = {
  setBackground: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  fetchFacebookPhotos: PropTypes.func.isRequired,
};

export default fetchFacebookPhotosHoc(setBackgroundHoc(ImagePickerFacebook));
