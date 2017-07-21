import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCropper from 'react-cropper';
import windowSizer from 'windowSizer';
import 'cropperjs/dist/cropper.css';
import './cropperLibMonkeyPatch';
import vanilla from 'vanilla';

// React-Cropper is a react wrapper around cropperjs.
// cropperjs is DOM based.
// I need some features for my cropper not native to the library.
//  1. drag crop area outside canvas
//    - importing `cropperLibMonkeyPatch` solves this
//  2. template overlay of cropper area
//    - this is accomplished with the DOM included manipulation below
//  3. screen resize re-inits cropper (so cropper resizes appropriately)
//    - this is accomplished with the component lifecycle callbacks below

// Note
// There's some hoops jumped through due to the library dispatching crop events
// on resize.  So bindings on the `onmove` and `onend` are used to circumvent
// crop-dispatch-on-resize circumstance.

class ReactCropperEnhanced extends Component {
  constructor(props) {
    super();
    this.state = {
      cropperExists: true,
    };
    this._readyBound = this._ready.bind(this);
    this._cropBound = this._crop.bind(this);
    this._cropmoveBound = this._cropmove.bind(this);
    this._cropendBound = this._cropend.bind(this);
    this.i = 0;
  }
  componentDidMount() {
    // When window resizes, flicker cropperExists.
    // cropperExists determines whether or not <ReactCropper> renders.
    // So <ReactCropper> will unmount then mount another instance.
    // This lets us reset the cropper for each resize.
    this.windowSizerCb = windowSizer.addCb(() => {
      this.setState({cropperExists: false}, () => {
        this.setState({cropperExists: true});
      });
    });
  }
  componentWillUnmount() {
    // cleanup
    if (this.windowSizerCb) {
      windowSizer.removeCb();
      delete this.windowSizerCb;
    }
  }
  _ready(...args){
    // cropOverlayImg implementation
    // DOM manipulation because core cropperjs lib is DOM based
    //'http://s3-us-west-1.amazonaws.com/bernieapp/decorations/h3.png'
    if (
      this.props.cropSrc &&
      this.refs &&
      this.refs.cropper &&
      this.refs.cropper.cropper &&
      this.refs.cropper.cropper.cropBox
    ) {
      const sampleImg = document.createElement('img');
      sampleImg.setAttribute('src', this.props.cropSrc);
      sampleImg.setAttribute('style', 'position: absolute; width: 100%; height: 100%;');
      vanilla.prepend(this.refs.cropper.cropper.cropBox, sampleImg);
      // because we are resetting the cropper for the sake of resizing
      // we need to re-establish any cropping the user had done previously
      if (this.state.lastCropData) {
        console.log('READY this.state.lastCropData',this.state.lastCropData);
        this.refs.cropper.cropper.setData(this.state.lastCropData);
      }
    }
    console.log(this.i++);
    

    //windowSizer.dimensions.width

    // passthrough of `ready` prop
    this.props.ready && this.props.ready(...args);

    window.xx = this.refs.cropper;
  }
  _crop(cropData, ...args){
    console.log('CROP')
    if (this.state.moving) {

      this.setState({
        lastCropData: cropData.detail,
      });
    }

    // passthrough of `crop` prop
    this.props.crop && this.props.crop(cropData, ...args);
  }

  _cropend(...args){
    console.log('CROPEND')
    this.setState({moving: false});
    // this.moving = false;
    this.props.cropend && this.props.cropend(...args);
  }
  _cropmove(...args){
    console.log('CROPMOVE')
    this.setState({moving: true});
    // this.moving = true;
    this.props.cropmove && this.props.cropmove(...args);
  }
  render() {
    return (
      <div style={{height: '100%'}}>
        {this.state.cropperExists &&
          <ReactCropper
            style={{height: '100%'}}
            ref='cropper'
            {...this.props}
            ready={this._readyBound}
            crop={this._cropBound}
            cropmove={this._cropmoveBound}
            cropend={this._cropendBound}
          />
        }
      </div>
    );
  }
}

export default ReactCropperEnhanced;