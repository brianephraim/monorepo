/* eslint-disable react/no-multi-comp */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import whitelistFilterProps from '@defualt/whitelist-filter-props';
import windowSizer from '@defualt/window-sizer';
import ReactCropperEnhanced from './ReactCropperEnhanced';
import styleConstants from './style-constants';
import ModalScreen from './ModalScreen';
import {
  EditDesignButtonGroup,
  GetPhotoMinimalButtonGroup,
} from './buttonGroups';

const breakpoints = {
  shrink: 530,
  compact: 375,
};
const shrinkFontBreakpointStyles = `
  @media (max-height: 500px){
    font-size:${styleConstants.appPad * 0.75}em;
  }
  @media (max-width: ${breakpoints.shrink}px){
    font-size:${styleConstants.appPad * 0.75}em;
  }
`;

const isTouchDevice = 'ontouchstart' in document.documentElement;

const StyledHeaderWrap = styled.div`
  line-height: 0;
  height: ${styleConstants.appPad * 8}em
  overflow: hidden;
  ${shrinkFontBreakpointStyles}
`;
class DesignPicker extends Component {
  constructor() {
    super();
    this.reduceButtonInstructions = this.reduceButtonInstructions.bind(this);
  }
  reduceButtonInstructions(buttons){
    return buttons.reduce((accum,buttonInfo) => {
      if (buttonInfo.actionType === 'SELECT_TEMPLATE' && this.props.windowWidth <= breakpoints.compact) {
        accum.push({
          ...buttonInfo,
          text: 'change design',
        });
      } else if (buttonInfo.actionType !== 'UPLOAD_TEMPLATE') {
        accum.push(buttonInfo);
      }
      return accum;
    },[]);
  }
  render() {
    const hideExtras = this.props.windowWidth <= breakpoints.compact;
    return (
      <StyledHeaderWrap>
        <EditDesignButtonGroup filter={this.reduceButtonInstructions} layoutVariation="header" hideExtras={hideExtras} />
        <GetPhotoMinimalButtonGroup filter={this.reduceButtonInstructions} layoutVariation="header" hideExtras={hideExtras} hasLeftBorder={!hideExtras} noLeftPadding={hideExtras} />
      </StyledHeaderWrap>
    );
  }
}
DesignPicker.propTypes = {
  windowWidth: PropTypes.number.isRequired,
};

const StyledModalButtonGroup = styled.div`
  padding-left: ${styleConstants.appPad}em;
  padding-right: ${styleConstants.appPad}em;
`;
const StyledH2 = styled.h2`
  padding:${styleConstants.appPad / 2}em ${styleConstants.appPad * 1.5}em;
  text-align: center;
  font-size: ${styleConstants.appPad * 2}em;
  ${shrinkFontBreakpointStyles}
`;

const StyledButtonAnchor = styled.a`
  ${styleConstants.mixins.button()}
`;
const StyledButtonInnerSpan = styled.span`
  ${styleConstants.mixins.buttonInner()}
  background: ${styleConstants.colors.red};
`;
function CompletionInterface(props) {
  const url = props.generateCompletionUrl(props.activeCompositeImageData);
  return (
    <div>
      <StyledH2>Drag and resize the box to crop</StyledH2>
      <StyledModalButtonGroup className="modal_buttonGroup">
        <StyledButtonAnchor href={url} className="button mainButton cropDoneButton">
          <StyledButtonInnerSpan>Done</StyledButtonInnerSpan>
        </StyledButtonAnchor>
      </StyledModalButtonGroup>
    </div>
  );
}
CompletionInterface.propTypes = {
  activeCompositeImageData: PropTypes.object.isRequired,
  generateCompletionUrl: PropTypes.func.isRequired,
};

class CropperScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      foreground: {
        ...props.foreground,
      },
      background: {
        ...props.background,
      },
    };
    this.crop = this.crop.bind(this);
  }

  componentWillMount() {
    // When window resizes, flicker cropperExists.
    // cropperExists determines whether or not <ReactCropper> renders.
    // So <ReactCropper> will unmount then mount another instance.
    // This lets us reset the cropper for each resize.
    this.setState({ windowHeight: windowSizer.dimensions.height });
    this.setState({ windowWidth: windowSizer.dimensions.width });
    this.windowSizerCb = windowSizer.addCb(() => {
      this.setState({ windowHeight: windowSizer.dimensions.height });
      this.setState({ windowWidth: windowSizer.dimensions.width });
    });
  }
  componentWillUnmount() {
    if (this.windowSizerCb) {
      windowSizer.removeCb(this.windowSizerCb);
      delete this.windowSizerCb;
    }
  }

  crop(cropData) {
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
  }

  render() {
    const isShort = this.state.windowWidth <= breakpoints.shrink;
    const isShorter = this.state.windowWidth <= breakpoints.compact;
    let assumedHeights = {
      header: 128,
      footer: 128,
    };
    if (isShort) {
      assumedHeights = {
        header: 96,
        footer: 88,
      };
    }
    if (isShorter) {
      assumedHeights = {
        header: 50,
        footer: 88,
      };
    }

    const nonCropperTotalHeight = assumedHeights.header + assumedHeights.footer;
    const styles = {
      cropModal: { height: this.state.windowHeight || '', overflow: 'hidden' },
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
      <ModalScreen hasCloseButton style={styles.cropModal}>
        <DesignPicker windowWidth={this.state.windowWidth} />
        <div className="cropOuterContainer">
          <div className="cropContainer" style={styles.cropContainer}>
            <ReactCropperEnhanced
              onResize={this.state.onResize}
              {...reactCropperOptions}
            />
          </div>
        </div>
        <CompletionInterface
          activeCompositeImageData={activeCompositeImageData}
          generateCompletionUrl={this.props.generateCompletionUrl}
        />
      </ModalScreen>
    );
  }
}
CropperScreen.propTypes = {
  background: PropTypes.object.isRequired,
  foreground: PropTypes.object.isRequired,
  generateCompletionUrl: PropTypes.func.isRequired
};

export default CropperScreen;
