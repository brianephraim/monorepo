import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { appConnect } from './nameSpacedResponsive';
import ImagePicker from './ImagePicker';
import { compositeImageIntoParams } from './compositeImage';
import fetchTemplatesHoc from './fetchTemplatesHoc';
import { gql } from 'react-apollo';

class ImagePickerTemplate extends Component {
  constructor() {
    super();
    this.generateLinkTo = this.generateLinkTo.bind(this);
  }
  componentWillMount() {
    // if (this.props.limit > 3) {
    //   this.props.fetchTemplates();
    // }
  }
  generateLinkTo(imgSrcObj) {
    return {
      type: `CROP`,
      payload: {
        ...compositeImageIntoParams(this.props.compositeImageData),
        fgSrcKey: imgSrcObj.srcKey,
      },
    };
  }
  render() {
    return (
      <ImagePicker
        images={this.props.templates}
        limit={this.props.limit}
        layoutVariation={this.props.layoutVariation}
        generateLinkTo={this.generateLinkTo}
        removeItem={this.props.removeUserTemplate}
      />
    );
  }
}

ImagePickerTemplate.propTypes = {
  templates: PropTypes.array,
  limit: PropTypes.number,
  layoutVariation: PropTypes.string,
  compositeImageData: PropTypes.object.isRequired,
};
ImagePickerTemplate.defaultProps = {
  generateLinkTo: () => {},
  templates: [],
  limit: Infinity,
  layoutVariation: '',
};


export default fetchTemplatesHoc(appConnect(
  (appState) => {
    return {
      compositeImageData: appState.compositeImageData,
    };
  },
)(ImagePickerTemplate));