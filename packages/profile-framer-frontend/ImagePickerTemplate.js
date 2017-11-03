import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql } from 'react-apollo';
import { appConnect } from './nameSpacedResponsive';
import ImagePicker from './ImagePicker';
import { compositeImageIntoParams } from './compositeImage';
import fetchTemplatesHoc from './fetchTemplatesHoc';
import {appApolloClientHoc} from './nameSpacedResponsive';
import ancestorConstantsHoc from './ancestorConstantsHoc';

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
    // const userTemplates = this.props.userTemplatesQuery.userTemplates;
    // console.log('userTemplates',userTemplates);
    // console.log('this.props.images',this.props.images);
    return (
      <ImagePicker
        images={this.props.templates}
        limit={this.props.limit}
        layoutVariation={this.props.layoutVariation}
        generateLinkTo={this.generateLinkTo}
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


export default fetchTemplatesHoc(appConnect((appState) => {
  return {
    compositeImageData: appState.compositeImageData,
  };
})(ImagePickerTemplate));