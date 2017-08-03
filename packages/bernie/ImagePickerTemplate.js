import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImagePicker from './ImagePicker';

let imagesFromFetchPromise = null;
class ImagePickerTemplate extends Component {
  constructor() {
    super();

    this.state = {};
  }
  componentWillMount() {
    imagesFromFetchPromise = imagesFromFetchPromise || fetch('/bernieBackend/get_template_list').then((r) => { return r.json(); });
    imagesFromFetchPromise.then(response => {
      window.xx = response;
      console.log(response);
      if (response && response.userTemplates && response.userTemplates.length) {
        const images = response.userTemplates.reduce((accum, imageObj) => {
          if (
            imageObj &&
            imageObj.customTemplate
          ) {
            return [...accum, {
              srcKey: imageObj.customTemplate,
              src: `http://s3-us-west-1.amazonaws.com/bernieapp/decorations/${imageObj.customTemplate}.png`
            }];
          }
          return accum;
        }, []);
        this.setState({
          images,
        });
      }
    });
    imagesFromFetchPromise.catch(response => {});
  }
  render() {
    return (
      <ImagePicker images={this.state.images} onClick={this.props.onClick} />
    );
  }
}
ImagePickerTemplate.propTypes = {};
export default ImagePickerTemplate;
