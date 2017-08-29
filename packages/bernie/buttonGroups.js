import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Upload from './Upload';
import {BernieLink} from './routingComponents';

import styled from 'styled-components';
import styleConstants from './style-constants';
import ConnectResponsiveStatusesDictHOC from './ConnectResponsiveStatusesDictHOC';
import ImagePickerTemplate from './ImagePickerTemplate';


import './app.scss';

const StyledSubsection = ConnectResponsiveStatusesDictHOC(styled.div`
  padding-bottom: ${styleConstants.appPad}em;
  ${props => {
    let toReturn = '';
    // singleColHome
    if(!props.isModal && props.responsiveStatusesDict.singleCol) {
      toReturn += `
        float:none;
        margin:0 auto;
      `;
      if(props.themex === 'editSubsection' || props.themex === 'designSubsection') {
        toReturn += `display:none;`;
      }
    }

    if(props.themex === 'microSubsection') {
      toReturn += `
        display:none;
      `;
      if(!props.isModal && props.responsiveStatusesDict.singleCol) {
        toReturn += `
          display:block;
        `;
      }
    }
    return toReturn;
  }}

`);

const StyledIconWrapper = ConnectResponsiveStatusesDictHOC(styled.div`
  width:${styleConstants.appPad * 2}em;
  height: ${styleConstants.appPad * 2}em;
  float:left;
  ${props => {
    // singleColHome
    if(!props.isModal && props.responsiveStatusesDict.singleCol) {
      return `
        float:none;
        margin:0 auto;
      `;
    }
    return '';
  }}
`);

const StyledIcon = ConnectResponsiveStatusesDictHOC(styled.i`
  font-size:${styleConstants.appPad * 2}em;
  
`);

const headerStyle = `
  display: block;
  text-decoration: none;
  line-height:${styleConstants.appPad * 2}em;
  color:${styleConstants.colors.white};
  padding-bottom: ${styleConstants.appPad / 2}em;
`;
const StyledHeaderLink = ConnectResponsiveStatusesDictHOC(styled(BernieLink)`
  ${headerStyle}
`);
const StyledHeaderDiv = ConnectResponsiveStatusesDictHOC(styled.div`
  ${headerStyle}
`);

const StyledMicroText = ConnectResponsiveStatusesDictHOC(styled.div`
  display:none;
  text-align:center;
  line-height: 0;
  padding-top: ${styleConstants.appPad / 2}em;
  padding-bottom: ${styleConstants.appPad}em;
  ${props => {
    // singleColHome
    if(!props.isModal && props.responsiveStatusesDict.singleCol) {
      return `
        display:block;
      `;
    }
    return '';
  }}
`);

const StyledText = ConnectResponsiveStatusesDictHOC(styled.div`
  padding-left:${styleConstants.appPad / 2}em;
  overflow: hidden;
  ${props => {
    // singleColHome
    if(!props.isModal && props.responsiveStatusesDict.singleCol) {
      return `
        width:0;
        white-space: nowrap;
        display: none;
      `;
    }
    return '';
  }}
`);

const StyledButtonGroup = ConnectResponsiveStatusesDictHOC(styled.div`
  overflow:hidden;
  padding: ${styleConstants.appPad / 2}em ${styleConstants.appPad}em 0 ${styleConstants.appPad}em;
  ${props => {
    // singleColHome
    if(!props.isModal && props.responsiveStatusesDict.singleCol) {
      return `
        padding: ${styleConstants.appPad / 2}em 0 0 0;
        cursor:pointer;
      `;
    }
    return '';
  }}
  background:${styleConstants.colors.red};
`);

const StyledButtonGroupButtons = ConnectResponsiveStatusesDictHOC(styled.div`
  ${props => {
    // singleColHome
    if(!props.isModal && props.responsiveStatusesDict.singleCol) {
      return `
        display:none;
      `;
    }
    return '';
  }}
`);

const StyledButton = ConnectResponsiveStatusesDictHOC(styled.div`
  ${styleConstants.mixins.button()}
  color: ${styleConstants.colors.red};
`);

const StyledButtonInnerAnchor = ConnectResponsiveStatusesDictHOC(styled.a`
  ${styleConstants.mixins.buttonInner()}
  background: ${styleConstants.colors.white};
`);
const StyledButtonInnerBernieLink = ConnectResponsiveStatusesDictHOC(styled(BernieLink)`
  ${styleConstants.mixins.buttonInner()}
  background: ${styleConstants.colors.white};
`);
const StyledButtonInnerSpan = ConnectResponsiveStatusesDictHOC(styled.span`
  ${styleConstants.mixins.buttonInner()}
  background: ${styleConstants.colors.white};
`);


let BernieAppButtonGroup = class extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const icon =
      this.props.icon &&
      <StyledIconWrapper className="section_header_icon" isModal={this.props.isModal}>
        <StyledIcon className="material-icons" isModal={this.props.isModal}>
          {this.props.icon}
        </StyledIcon>
      </StyledIconWrapper>;

    const shortHeadline =
      this.props.shortHeadline &&
      <StyledMicroText className="section_header_microText" isModal={this.props.isModal}>
        <span>
          {this.props.shortHeadline}
        </span>
      </StyledMicroText>;

    const headline =
      this.props.headline &&
      <StyledText className="section_header_text" isModal={this.props.isModal}>
        <span>
          {this.props.headline}
        </span>
      </StyledText>;
    const buttons =
      this.props.buttons &&
      <StyledButtonGroupButtons className="buttonGroup_buttons" isModal={this.props.isModal}>
        {this.props.buttonsPrepend}
        {this.props.buttons.map(btnDetails => {
          let btnInner;
          let className = 'buttonGroup_button button';
          if (btnDetails.onUploadSuccess) {
            btnInner = (
              <Upload
                className={btnDetails.className}
                onSuccess={this.props.onUploadSuccess}
              >
                {btnDetails.text}
              </Upload>
            );
          } else if (btnDetails.aHref) {
            btnInner = (
              <StyledButtonInnerAnchor className={btnDetails.className} href={btnDetails.aHref}>
                {btnDetails.text}
              </StyledButtonInnerAnchor>
            );
          } else if (btnDetails.actionType) {
            btnInner = (
              <StyledButtonInnerBernieLink
                className={btnDetails.className}
                to={
                  {
                    type: `BERNIE_${btnDetails.actionType}`,
                    compositeImageData: this.props.compositeImageData,
                  }
                }
              >
                {btnDetails.text}
              </StyledButtonInnerBernieLink>
            );
          } else if (btnDetails.onClick) {
            btnInner = (
              <StyledButtonInnerSpan onClick={btnDetails.onClick} role="button" tabIndex="0">
                {btnDetails.text}
              </StyledButtonInnerSpan>
            );
            className = `${className} ${btnDetails.className}`;
          } else {
            btnInner = (
              <StyledButtonInnerSpan>
                {btnDetails.text}
              </StyledButtonInnerSpan>
            );
            className = `${className} ${btnDetails.className}`;
          }

          return (
            <StyledButton key={btnDetails.text} className={className}>
              {btnInner}
            </StyledButton>
          );
        })}
      </StyledButtonGroupButtons>;

    const LinkOrDiv = this.props.compositeImageData.screen === this.props.urlFragment ? StyledHeaderDiv : StyledHeaderLink;
    const to = {
      type: `BERNIE_DYNAMIC`,
      compositeImageData: this.props.compositeImageData,
      bernieDynamicScreen: this.props.urlFragment,
    };
    return (
      <StyledSubsection
        themex={this.props.themex}
        className={`app_body_rightPillar_section_subsection ${this.props
          .className}`}
      >
        <StyledButtonGroup className="buttonGroup" isModal={this.props.isModal}>
          <LinkOrDiv to={to} className="section_header">
            {shortHeadline}
            {icon}
            {headline}
          </LinkOrDiv>
          {buttons}
        </StyledButtonGroup>
      </StyledSubsection>
    );
  }
}
BernieAppButtonGroup.propTypes = {
  icon: PropTypes.string,
  shortHeadline: PropTypes.string,
  className: PropTypes.string,
  headline: PropTypes.string,
  buttons: PropTypes.array,
  urlFragment: PropTypes.string,
  compositeImageData: PropTypes.object,
  onUploadSuccess: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
BernieAppButtonGroup.defaultProps = {
  icon: '',
  shortHeadline: '',
  className: '',
  headline: '',
  buttons: [],
  urlFragment: '',
  compositeImageData: null,
  onUploadSuccess: null,
};

BernieAppButtonGroup = connect(
  ( state /* , { params }*/) => {
    return {
      compositeImageData: state.bernie.compositeImageData,
      location: state.location,
    };
  },
  {
  }
)(BernieAppButtonGroup);

const buttonGroupComponents = {};
function makeButtonGroupComponent(
  options /* {
  headline,// shortHeadline, icon, buttons
}*/
) {
  function ButtonGroup(props) {
    const ButtonGroup = <BernieAppButtonGroup {...props} {...options} />;
    if (props.isModal) {
      return (
        <div className="modal">
          {ButtonGroup}
        </div>
      );
    }
    return ButtonGroup;
  }
  ButtonGroup.propTypes = {
    isModal: PropTypes.bool,
  };
  ButtonGroup.defaultProps = {
    isModal: false,
  };
  return ButtonGroup;
}

const ImportButtonGroup = makeButtonGroupComponent({
  urlFragment: 'import',
  headline: 'Photo from:',
  shortHeadline: 'import',
  icon: 'photo_camera',
  buttons: [
    {
      text: 'Facebook',
      routerLinkScreenName: 'import-photo-from-facebook',
      actionType: 'IMPORT_FACEBOOK'
    },
    {
      text: 'Camera',
      onUploadSuccess(imgData) {
        /*
          Key: "selfies/a-brian14744733088711500480799004.png",
          failingSquare: undefined,
          height: 1280,
          public_id:"a-brian14744733088711500480799004.png",
          url:"https://bernieapp.s3.amazonaws.com/selfies/a-brian14744733088711500480799004.png",
          width:
          960
        */
        this.props.onUploadSuccess(imgData);
      },
    },
    {
      text: 'URL',
      routerLinkScreenName: 'import-url',
      actionType: 'IMPORT_URL'
    },
    {
      text: 'Storage',
    },
  ],
});
buttonGroupComponents.import = ImportButtonGroup;

const ShareButtonGroup = makeButtonGroupComponent({
  urlFragment: 'share',
  headline: 'Share this via:',
  shortHeadline: 'share',
  icon: 'share',
  buttons: [
    {
      text: 'Facebook photo',
    },
    {
      text: 'Facebook post',
    },
    {
      text: 'Tweet',
      aHref:
        'https://twitter.com/intent/tweet?url=xXxXxXxXxXxXxXxXxXxXxXxX&via=bernieselfie&hashtags=BernieSanders%2Cfeelthebern%2Cbernieselfie&related=BernieSander',
    },
  ],
});
buttonGroupComponents.share = ShareButtonGroup;

const EditBrushButtonGroup = makeButtonGroupComponent({
  urlFragment: 'editBrush',
  className: 'microSubsection',
  themex: 'microSubsection',
  shortHeadline: 'edit',
  icon: 'brush',
});
buttonGroupComponents.editBrush = EditBrushButtonGroup;

const EditSizeButtonGroup = makeButtonGroupComponent({
  urlFragment: 'editSize',
  className: 'editSubsection',
  themex: 'editSubsection',
  shortHeadline: 'edit',
  headline: 'Edit:',
  icon: 'transform',
  buttons: [
    {
      text: 'Size and position',
      routerLinkScreenName: 'crop',
      actionType: 'CROP'
    },
  ],
});
buttonGroupComponents.editSize = EditSizeButtonGroup;


const StyledDesignImg = ConnectResponsiveStatusesDictHOC(styled.img`
  width: 100%;
  display: block;
`);
const StyledDesignInnerWrap = ConnectResponsiveStatusesDictHOC(styled.div`
  cursor: pointer;
  background: #eee;
`);
const StyledDesign = ConnectResponsiveStatusesDictHOC(styled.div`
  padding-bottom: ${styleConstants.appPad}em;
  box-sizing: border-box;
`);


const EditDesignButtonGroup = makeButtonGroupComponent({
  urlFragment: 'editDesign',
  className: 'designSubsection',
  themex: 'designSubsection',
  shortHeadline: 'edit',
  headline: 'Change design:',
  icon: 'brush',
  buttonsPrepend: (
    <div>
      <StyledDesign className="designFrame">
        <StyledDesignInnerWrap className="designFrame_innerWrap">
          <StyledDesignImg className="designFrame_design standardTemplate" src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/h3.png" />
        </StyledDesignInnerWrap>
      </StyledDesign>
      <StyledDesign className="designFrame">
        <StyledDesignInnerWrap className="designFrame_innerWrap">
          <StyledDesignImg className="designFrame_design standardTemplate" src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/h4.png" />
        </StyledDesignInnerWrap>
      </StyledDesign>
      <StyledDesign className="designFrame">
        <StyledDesignInnerWrap className="designFrame_innerWrap">
          <StyledDesignImg className="designFrame_design standardTemplate" src="http://s3-us-west-1.amazonaws.com/bernieapp/decorations/wg.png" />
        </StyledDesignInnerWrap>
      </StyledDesign>
    </div>
  ),
  buttons: [
    {
      text: 'Size and position',
      routerLinkScreenName: 'crop',
      actionType: 'CROP'
    },
    {
      text: 'more options',
      routerLinkScreenName: 'select-template',
      actionType: 'SELECT_TEMPLATE'
    },
    {
      text: 'upload a template',
      routerLinkScreenName: 'upload-template',
      actionType: 'UPLOAD_TEMPLATE'
    },
  ],
});
buttonGroupComponents.editDesign = EditDesignButtonGroup;
const objectKeysButtonGroupComponents = Object.keys(buttonGroupComponents);
const buttonGroupComponentsRegexArrayString = objectKeysButtonGroupComponents.reduce(
  (regexArray, componentKey, i) => {
    regexArray.push(componentKey);
    if (i === objectKeysButtonGroupComponents.length - 1) {
      return regexArray.join('|');
    }
    return regexArray;
  },
  []
);


export {
  buttonGroupComponents,
  buttonGroupComponentsRegexArrayString,
  EditDesignButtonGroup,
  EditSizeButtonGroup,
  EditBrushButtonGroup,
  ShareButtonGroup,
  ImportButtonGroup,
};
