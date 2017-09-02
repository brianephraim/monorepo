import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImagePicker from './ImagePicker';
import makeActionFetchTemplates from './makeActionFetchTemplates';

class ImagePickerTemplate extends Component {
  componentWillMount() {
    if (this.props.limit > 3) {
      this.props.fetchTemplates();
    }
  }
  render() {
    return (
      <ImagePicker
        images={this.props.images}
        setsForegroundForCrop
        limit={this.props.limit}
        layoutVariation={this.props.layoutVariation}
        generateLinkTo={this.props.generateLinkTo}
      />
    );
  }
}
ImagePickerTemplate.propTypes = {
  fetchTemplates: PropTypes.func.isRequired,
  images: PropTypes.array,
  limit: PropTypes.number,
  layoutVariation: PropTypes.string,
  generateLinkTo: PropTypes.func,
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
    };
  },
  {
    fetchTemplates: makeActionFetchTemplates,
  }
)(ImagePickerTemplate);
