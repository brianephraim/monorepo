import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCropper from 'react-cropper';
import windowSizer from '@defualt/window-sizer';
import vanilla from '@defualt/vanilla';
import bindHere from '@defualt/bind_here';
import './cropperLibMonkeyPatch';

// React-Cropper is a react wrapper around cropperjs.
// cropperjs is DOM based.
// I need some features for my cropper not native to the library.
//  1. drag crop area outside canvas
//    - importing `cropperLibMonkeyPatch` solves this
//  2. template overlay of cropper area
//    - this is accomplished with the DOM manipulation included below
//  3. screen resize re-inits cropper (so cropper resizes appropriately)
//    - this is accomplished with the component lifecycle callbacks below

// Note
// There's some hoops jumped through due to the library dispatching crop events
// on resize.  So bindings on the `onmove` and `onend` are used to circumvent a
// crop-dispatch-on-resize circumstance.

class ReactCropperEnhanced extends Component {
  constructor(props) {
    super();
    this.state = {
      cropperExists: true,
      moving: false,
      lastCropData: props.data,
    };
    this.methodsBoundHere = bindHere(this, [
      'ready',
      'crop',
      'cropmove',
      'cropend',
    ]);
    Object.assign(this, this.methodsBoundHere);
  }
  componentDidMount() {
    // When window resizes, flicker cropperExists.
    // cropperExists determines whether or not <ReactCropper> renders.
    // So <ReactCropper> will unmount then mount another instance.
    // This lets us reset the cropper for each resize.
    this.removeWindowSizerCb = windowSizer.addCb(() => {
      this.refreshCropper();
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.cropSrc !== this.props.cropSrc) {
      this.refreshCropper();
    }
  }
  componentWillUnmount() {
    this.unmounted = true;
    if (this.removeWindowSizerCb) {
      this.removeWindowSizerCb();
      delete this.removeWindowSizerCb;
    }
  }
  refreshCropper() {
    this.setState({ cropperExists: false }, () => {
      // setTimeout(() => {
      this.setState({ cropperExists: true });
      // },2000);
    });
  }
  ready(...args) {
    if (
      this.props.cropSrc &&
      this.cropper &&
      this.cropper.cropper &&
      this.cropper.cropper.cropBox
    ) {
      // cropOverlayImg implementation
      // DOM manipulation because core cropperjs lib is DOM based
      const sampleImg = document.createElement('img');
      sampleImg.setAttribute('src', this.props.cropSrc);
      sampleImg.setAttribute(
        'style',
        'position: absolute; width: 100%; height: 100%;'
      );
      vanilla.prepend(this.cropper.cropper.cropBox, sampleImg);

      // because we are resetting the cropper for the sake of resizing
      // we need to re-establish any cropping the user had done previously
      if (this.state.lastCropData) {
        this.cropper.cropper.setData(this.state.lastCropData);
      }
    }

    this.props.ready(...args);
  }
  crop(cropData, ...args) {
    if (this.state.moving) {
      this.setState({
        lastCropData: cropData.detail,
      });
    }

    // was getting a "setState after unmounted" warning
    // I'm blaming janky 3rd party ReactCropper
    // track unmounted.  Call this.props.crop only if mounted.
    // btw this.props.crop contains the setState that was erroring.
    // Burying this semi-ugly fix in this less business oriented component here.
    if (!this.unmounted) {
        this.props.crop(cropData, ...args);
    }
  }

  cropend(...args) {
    this.setState({ moving: false });
    this.props.cropend(...args);
  }
  cropmove(...args) {
    this.setState({ moving: true });
    this.props.cropmove(...args);
  }
  render() {
    // The `data` prop below cancels `this.props.data` if present
    // It was breaking cropBox dragging.
    // this.props.data will have an effect on initial crobBox sizing
    // and find that implementation starting in the contructor
    if (this.state.cropperExists) {
      return (
        <ReactCropper
          style={{ height: '100%' }}
          ref={cropper => {
            this.cropper = cropper;
          }}
          {...this.props}
          data={null}
          ready={this.ready}
          crop={this.crop}
          cropmove={this.cropmove}
          cropend={this.cropend}
          {...this.props.otherReactCropperOptions}
        />
      );
    }
    return null;
  }
}
ReactCropperEnhanced.propTypes = {
  cropend: PropTypes.func,
  cropmove: PropTypes.func,
  crop: PropTypes.func,
  ready: PropTypes.func,
  data: PropTypes.object,
  cropSrc: PropTypes.string,
  otherReactCropperOptions: PropTypes.object,
};
ReactCropperEnhanced.defaultProps = {
  cropend: () => {},
  cropmove: () => {},
  crop: () => {},
  ready: () => {},
  data: null,
  cropSrc: '',
  otherReactCropperOptions: {}
};

export default ReactCropperEnhanced;
