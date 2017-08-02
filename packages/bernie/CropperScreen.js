import React, { Component } from 'react';
import PropTypes from 'prop-types';
import windowSizer from 'windowSizer';
import ReactCropperEnhanced from './ReactCropperEnhanced';
import history from 'MainApp/history';
import { formUrl } from './deriveUrlInfo';

function whitelistFilterProps(obj, whitelist) {
  return Object.keys(obj).reduce((accum, key) => {
    const keyIsAllowed =
      whitelist.filter(whitelistItem => {
        return key === whitelistItem;
      }).length > 0;
    if (keyIsAllowed) {
      accum[key] = obj[key];
    }
    return accum;
  }, {});
}

class DesignPicker extends Component {
  render() {
    return (
      <div className="modalFooter clearfix">
        <div className="footer_section footer_imageOptions">
          <h3>Change design</h3>
          <div className="designFrame">
            <div className="designFrame_innerWrap">
              <img
                className="designFrame_design standardTemplate"
                src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/h3.png"
              />
            </div>
          </div>
          <div className="designFrame">
            <div className="designFrame_innerWrap">
              <img
                className="designFrame_design standardTemplate"
                src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/h4.png"
              />
            </div>
          </div>
          <div className="designFrame">
            <div className="designFrame_innerWrap">
              <img
                className="designFrame_design standardTemplate"
                src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/wg.png"
              />
            </div>
          </div>
          <div className="moreimageOptions button">
            <span className="macro">more options</span>
            <span className="micro">change design</span>
          </div>
        </div>
        <div className="footer_section">
          <h3>&nbsp;</h3>
          <div className="designFrame designFrame-empty" />
          <div className="getPhotoButton button">
            <span>get photo</span>
          </div>
        </div>
      </div>
    );
  }
}

class CloseButton extends Component {
  render() {
    return (
      <div className="closeButton button" onClick={history.goBack}>
        <span>X</span>
      </div>
    );
  }
}

class CompletionInterface extends Component {
  render() {
    const url = `${this.props.rootUrl}/${formUrl(
      this.props.activeCompositeImageData
    )}`;
    console.log('this.props.activeCompositeImageData', url);
    // console.log('this.props.rootUrl', this.props.rootUrl);
    return (
      <div className="modalHeader clearfix">
        <div className="doneSection">
          <h2>Drag and resize the box to crop</h2>
          <div className="modal_buttonGroup">
            <a href={url} className="button mainButton cropDoneButton">
              <span>Done</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class CropInterface extends Component {
  render() {
    return (
      <div className="modalFooter clearfix">
        <div className="footer_section footer_imageOptions">
          <h3>Change design</h3>
          <div className="designFrame">
            <div className="designFrame_innerWrap">
              <img
                className="designFrame_design standardTemplate"
                src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/h3.png"
              />
            </div>
          </div>
          <div className="designFrame">
            <div className="designFrame_innerWrap">
              <img
                className="designFrame_design standardTemplate"
                src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/h4.png"
              />
            </div>
          </div>
          <div className="designFrame">
            <div className="designFrame_innerWrap">
              <img
                className="designFrame_design standardTemplate"
                src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/wg.png"
              />
            </div>
          </div>
          <div className="moreimageOptions button">
            <span className="macro">more options</span>
            <span className="micro">change design</span>
          </div>
        </div>
        <div className="footer_section">
          <h3>&nbsp;</h3>
          <div className="designFrame designFrame-empty" />
          <div className="getPhotoButton button">
            <span>get photo</span>
          </div>
        </div>
      </div>
    );
  }
}

class CropperScreen extends Component {
  constructor(props) {
    super();
    console.log('props.foreground', props.foreground);
    this.state = {
      foreground: {
        ...props.foreground,
      },
      background: {
        ...props.background,
      },
    };
    this._cropBound = this._crop.bind(this);
  }

  _crop(cropData) {
    const data = cropData.detail;

    // this.setState(result);
    this.setState({
      foreground: {
        ...this.state.foreground,
        x: Math.round(cropData.detail.x),
        y: Math.round(cropData.detail.y),
        width: Math.round(cropData.detail.width),
        height: Math.round(cropData.detail.height),
      },
    });
    // image in dataUrl
    // console.log(this.refs.cropper);
  }

  componentDidMount() {
    // When window resizes, flicker cropperExists.
    // cropperExists determines whether or not <ReactCropper> renders.
    // So <ReactCropper> will unmount then mount another instance.
    // This lets us reset the cropper for each resize.
    this.setState({ windowHeight: windowSizer.dimensions.height });
    this.windowSizerCb = windowSizer.addCb(() => {
      this.setState({ windowHeight: windowSizer.dimensions.height });
    });
  }
  componentWillUnmount() {
    if (this.windowSizerCb) {
      windowSizer.removeCb(this.windowSizerCb);
      delete this.windowSizerCb;
    }
  }

  render() {
    const styles = {
      cropModal: { height: this.state.windowHeight || '', overflow: 'hidden' },
      cropContainer: {
        height: this.state.windowHeight - 256,
        overflow: 'hidden',
      },
    };

    const reactCropperOptions = {
      zoomOnWheel: false,
      aspectRatio: 1 / 1,
      responsive: true,
      guides: false,
      autoCropArea: 0.9,
      rotatable: false,
      crop: this._cropBound,
      src: this.state.background.src,
      cropSrc: this.state.foreground.src,
      data: this.state.foreground
        ? whitelistFilterProps(this.state.foreground, [
            'width',
            'height',
            'x',
            'y',
          ])
        : null,
      //{width: 200, height: 200, x: 10, y: 10, scaleX: 1, scaleY: 1,}
    };
    reactCropperOptions.strict = false;

    if (false /* bs.featureDetection.is_touch_device*/) {
      Object.assign(reactCropperOptions, {
        mouseWheelZoom: false,
        cropBoxMovable: false,
        movable: true,
        cropBoxResizable: false,
        dragCrop: false,
        minCropBoxWidth: windowSizer.dimensions.width - 20,
      });
    }

    const activeCompositeImageData = {
      foreground: this.state.foreground,
      background: this.props.background,
    };
    return (
      <div className="modal cropModal" style={styles.cropModal}>
        <CloseButton />
        <DesignPicker />
        <div className="cropOuterContainer">
          <div className="cropContainer" style={styles.cropContainer}>
            <ReactCropperEnhanced
              ref="cropper"
              onResize={this.state.onResize}
              {...reactCropperOptions}
            />
          </div>
        </div>
        <CompletionInterface
          activeCompositeImageData={activeCompositeImageData}
          rootUrl={this.props.rootUrl}
        />
      </div>
    );
  }
}
CropperScreen.propTypes = {};

export default CropperScreen;
