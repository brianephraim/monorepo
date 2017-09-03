import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImagePicker from './ImagePicker';
import makeActionFetchTemplates from './makeActionFetchTemplates';
import { compositeImageIntoParams } from './compositeImage';

class ImagePickerTemplate extends Component {
  constructor() {
    super();
    this.generateLinkTo = this.generateLinkTo.bind(this);
  }
  componentWillMount() {
    if (this.props.limit > 3) {
      this.props.fetchTemplates();
    }
  }
  generateLinkTo(imgSrcObj) {
    return {
      type: `BERNIE_CROP`,
      payload: {
        ...compositeImageIntoParams(this.props.compositeImageData),
        fgSrcKey: imgSrcObj.srcKey,
      },
    };
  }
  render() {
    return (
      <ImagePicker
        images={this.props.images}
        limit={this.props.limit}
        layoutVariation={this.props.layoutVariation}
        generateLinkTo={this.generateLinkTo}
      />
    );
  }
}
ImagePickerTemplate.propTypes = {
  fetchTemplates: PropTypes.func.isRequired,
  images: PropTypes.array,
  limit: PropTypes.number,
  layoutVariation: PropTypes.string,
  compositeImageData: PropTypes.object.isRequired,
};
ImagePickerTemplate.defaultProps = {
  generateLinkTo: () => {},
  images: [],
  limit: Infinity,
  layoutVariation: '',
};
export default connect(
  (state /* , { params }*/) => {
    return {
      images: state.bernie.templates,
      compositeImageData: state.bernie.compositeImageData,
    };
  },
  {
    fetchTemplates: makeActionFetchTemplates,
  }
)(ImagePickerTemplate);
