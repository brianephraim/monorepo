/* eslint-disable react/no-multi-comp */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import windowSizer from '@defualt/window-sizer';
import {back} from 'redux-first-router';
import ReactCropperEnhanced from './ReactCropperEnhanced';
import CloseButton from './CloseButton';
import styled from 'styled-components';
import styleConstants from './style-constants';
import ConnectResponsiveStatusesDictHOC from './ConnectResponsiveStatusesDictHOC';

const StyledButton = ConnectResponsiveStatusesDictHOC(styled.div`
  ${styleConstants.mixins.button()}
`);

const StyledButtonAnchor = ConnectResponsiveStatusesDictHOC(styled.a`
  ${styleConstants.mixins.button()}
`);

const StyledButtonInnerSpan = ConnectResponsiveStatusesDictHOC(styled.span`
  ${styleConstants.mixins.buttonInner()}
  background: ${styleConstants.colors.red};
`);
const StyledModalFooterButtonInnerSpan = StyledButtonInnerSpan.extend`
  padding: ${styleConstants.appPad / 2}em ${styleConstants.appPad / 2}em;
  height: auto;
  line-height: normal;
`;


const StyledModalFooterButtonInnerSpanMicro = StyledModalFooterButtonInnerSpan.extend`
  display:none;
  @media (max-width: 430px){
    display:block;
  }
`;

const StyledModalFooterButtonInnerSpanMacro = StyledModalFooterButtonInnerSpan.extend`
  @media (max-width: 430px){
    display:none;
  }
`;

const footerSectionButtonAndDesignFrameStyles = `
  cursor:pointer;
  display:inline-block;
  vertical-align: middle;
  padding-right: ${styleConstants.appPad}em;
  @media (max-width: 430px){
    padding-right: 0;
  }
`;

const StyledFooterButton = StyledButton.extend`
  ${footerSectionButtonAndDesignFrameStyles}
`;

const StyledDesignFrame = ConnectResponsiveStatusesDictHOC(styled.div`
  box-sizing:border-box;
  ${footerSectionButtonAndDesignFrameStyles}
  width:${styleConstants.appPad * 5}em;
  height:${styleConstants.appPad * 5}em;
  padding-bottom: ${styleConstants.appPad}em;
  @media (max-width: 430px){
    display:none;
  }
`);
const StyledDesignFrameEmpty = StyledDesignFrame.extend`
  width:0;
  padding-right:0;
  visibility: hidden;
`;
const StyledDesignFrameInnerWrap = ConnectResponsiveStatusesDictHOC(styled.div`
  cursor:pointer;
  background: ${styleConstants.colors.grey0};
`);

const StyledDesignFrameDesign = ConnectResponsiveStatusesDictHOC(styled.img`
  width:100%;
  display:block;
`);

const footerSectionStyles = `
  padding: ${styleConstants.appPad}em 0 0 ${styleConstants.appPad}em;
  float:left;
  @media (max-height: 500px){
    font-size:.75em;
  }
  @media (max-width: 530px){
    font-size:.75em;
  }

  
`;
const StyledFooterSection = ConnectResponsiveStatusesDictHOC(styled.div`
  ${footerSectionStyles}
`);




const StyledImageOptions = ConnectResponsiveStatusesDictHOC(styled.div`
  ${footerSectionStyles}
  border-right: ${styleConstants.appPad * 0.5}em solid ${styleConstants.colors.grey1};
  @media (max-width: 430px){
    border-right:0;
  }
  padding-right:${styleConstants.appPad}em;
`);

const StyledFooterSectionH3 = ConnectResponsiveStatusesDictHOC(styled.h3`
  padding-bottom: ${styleConstants.appPad}em;
  @media (max-width: 430px){
    display:none;
  }
`);
const StyledImageOptionsH3 = StyledFooterSectionH3.extend`
  padding:${styleConstants.appPad/2}em ${styleConstants.appPad}em;
`;




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

const isTouchDevice = 'ontouchstart' in document.documentElement;

class DesignPicker extends Component {
  render() {
    return (
      <div className="modalFooter clearfix">
        <StyledImageOptions className="footer_section footer_imageOptions">
          <StyledImageOptionsH3>Change design</StyledImageOptionsH3>
          <StyledDesignFrame className="designFrame">
            <StyledDesignFrameInnerWrap className="designFrame_innerWrap">
              <StyledDesignFrameDesign
                alt="Basic Hair and Glasses Template"
                className="designFrame_design standardTemplate"
                src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/h3.png"
              />
            </StyledDesignFrameInnerWrap>
          </StyledDesignFrame>
          <StyledDesignFrame className="designFrame">
            <StyledDesignFrameInnerWrap className="designFrame_innerWrap">
              <StyledDesignFrameDesign
                alt="Colorful Hair and Glasses Template"
                className="designFrame_design standardTemplate"
                src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/h4.png"
              />
            </StyledDesignFrameInnerWrap>
          </StyledDesignFrame>
          <StyledDesignFrame className="designFrame">
            <StyledDesignFrameInnerWrap className="designFrame_innerWrap">
              <StyledDesignFrameDesign
                alt="Text and GradientTemplate Template"
                className="designFrame_design standardTemplate"
                src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/wg.png"
              />
            </StyledDesignFrameInnerWrap>
          </StyledDesignFrame>
          <StyledFooterButton className="moreimageOptions button">
            <StyledModalFooterButtonInnerSpanMacro className="macro">more options</StyledModalFooterButtonInnerSpanMacro>
            <StyledModalFooterButtonInnerSpanMicro className="micro">change design</StyledModalFooterButtonInnerSpanMicro>
          </StyledFooterButton>
        </StyledImageOptions>
        <StyledFooterSection className="footer_section">
          <StyledFooterSectionH3>&nbsp;</StyledFooterSectionH3>
          <StyledDesignFrameEmpty className="designFrame designFrame-empty" />
          <StyledFooterButton className="getPhotoButton button">
            <StyledModalFooterButtonInnerSpan>get photo</StyledModalFooterButtonInnerSpan>
          </StyledFooterButton>
        </StyledFooterSection>
      </div>
    );
  }
}

function CompletionInterface(props) {
  const url = props.generateCompletionUrl(props.activeCompositeImageData);
  return (
    <div className="modalHeader clearfix">
      <div className="doneSection">
        <h2>Drag and resize the box to crop</h2>
        <div className="modal_buttonGroup">
          <StyledButtonAnchor href={url} className="button mainButton cropDoneButton">
            <StyledButtonInnerSpan>Done</StyledButtonInnerSpan>
          </StyledButtonAnchor>
        </div>
      </div>
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
      <div className="modal cropModal" style={styles.cropModal}>
        <CloseButton />
        <DesignPicker />
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
      </div>
    );
  }
}
CropperScreen.propTypes = {
  background: PropTypes.object.isRequired,
  foreground: PropTypes.object.isRequired,
  generateCompletionUrl: PropTypes.func.isRequired
};

export default CropperScreen;
