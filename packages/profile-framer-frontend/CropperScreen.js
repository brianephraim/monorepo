import root from 'window-or-global'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import whitelistFilterProps from '@defualt/whitelist-filter-props';
import windowSizer from '@defualt/window-sizer';

import styleConstants from './style-constants';
import ControlsBar, { controlsBarHeights } from './ControlsBar';
import CompletionInterface, {
  completionInterfaceHeights,
} from './CompletionInterface';
// import 'cropperjs/dist/cropper.css';

const isTouchDevice = root.document && root.document.documentElement && 'ontouchstart' in document.documentElement;

const hasDom = typeof window !== 'undefined';

let ReactCropperEnhanced = (<p>cropper loading...</p>);

class CropperScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      cropperLibraryReady: false,
      foreground: {
        ...props.foreground,
      },
      background: {
        ...props.background,
      },
    };
    if (props.defaultGeo) {
      delete this.state.foreground.x;
      delete this.state.foreground.y;
      delete this.state.foreground.width;
      delete this.state.foreground.height;
    }
    if (props.hideForeground) {
      delete this.state.foreground.src;
      delete this.state.foreground.srcKey;
    }
    
    this.crop = this.crop.bind(this);
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      this.setState({ windowHeight: windowSizer.dimensions.height });
      this.setState({ windowWidth: windowSizer.dimensions.width });
      this.removeWindowSizerCb = windowSizer.addCb(() => {
        this.setState({ windowHeight: windowSizer.dimensions.height });
        this.setState({ windowWidth: windowSizer.dimensions.width });
      });
      import('./ReactCropperEnhanced').then((module) => {
        console.log('@@@@ cropper lib loaded');
        ReactCropperEnhanced = module.default;
        
        this.setState({ cropperLibraryReady: true }, () => {
        
          // When window resizes, flicker cropperExists.
          // cropperExists determines whether or not <ReactCropper> renders.
          // So <ReactCropper> will unmount then mount another instance.
          // This lets us reset the cropper for each resize.
          
        });
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.foreground.src !== this.state.foreground.src) {
      this.setState({
        foreground: {
          ...this.state.foreground,
          src: nextProps.foreground.src,
          srcKey: nextProps.foreground.srcKey,
        },
      });
    }
  }
  componentWillUnmount() {
    if (this.removeWindowSizerCb) {
      this.removeWindowSizerCb();
      delete this.removeWindowSizerCb;
    }
  }

  crop(cropData) {
    this.setState({
      foreground: {
        ...this.state.foreground,
        x: Math.round(cropData.detail.x),
        y: Math.round(cropData.detail.y),
        width: Math.round(cropData.detail.width),
        height: Math.round(cropData.detail.height),
      },
    });
  }

  render() {
    if (!this.state.cropperLibraryReady) {
      return (<p>Cropper Loading</p>);
    }

    const isShort = this.state.windowWidth <= styleConstants.breakpoints.shrink;
    const isShorter =
      this.state.windowWidth <= styleConstants.breakpoints.compact;

    let assumedHeights = {
      header: controlsBarHeights.normal,
      footer: completionInterfaceHeights.normal,
    };
    if (isShort) {
      assumedHeights = {
        header: controlsBarHeights.shrink,
        footer: completionInterfaceHeights.shrink,
      };
    }
    if (isShorter) {
      assumedHeights = {
        header: controlsBarHeights.compact,
        footer: completionInterfaceHeights.compact,
      };
    }

    const nonCropperTotalHeight = assumedHeights.header + assumedHeights.footer;
    const styles = {
      cropContainer: {
        height: this.state.windowHeight - nonCropperTotalHeight,
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
      crop: this.crop,
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

    if (isTouchDevice) {
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
      <div>
        <ControlsBar windowWidth={this.state.windowWidth} />
        <div className="cropContainer" style={styles.cropContainer}>
          <ReactCropperEnhanced {...reactCropperOptions} />
        </div>
        <CompletionInterface
          useClickHandledButton={this.props.useClickHandledButton}
          activeCompositeImageData={activeCompositeImageData}
          generateCompletionUrl={this.props.generateCompletionUrl}
          onClick={this.props.publishTemplateCrop}
        />
      </div>
    );
  }
}
CropperScreen.propTypes = {
  useClickHandledButton:PropTypes.bool,
  defaultGeo:PropTypes.bool,
  hideForeground:PropTypes.bool,
  background: PropTypes.object.isRequired,
  foreground: PropTypes.object.isRequired,
  generateCompletionUrl: PropTypes.func.isRequired,
  publishTemplateCrop: PropTypes.func.isRequired,
};
CropperScreen.defaultProps = {
  useClickHandledButton:false,
  defaultGeo: false,
  hideForeground:false,
};

export default CropperScreen;
