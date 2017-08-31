import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Upload from './Upload';
import BernieLink from './BernieLink';

import styleConstants from './style-constants';
import ConnectResponsiveStatusesDictHOC from './ConnectResponsiveStatusesDictHOC';
import ImagePickerTemplate from './ImagePickerTemplate';
import ModalScreen from './ModalScreen';


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

  ${props => {
    if(props.layoutVariation === 'header') {
      return `
        display: inline-block;
        padding-bottom: 0;
      `;
    }
  }}

  ${props => {
    if(props.hasLeftBorder) {
      return `
        border-left: ${styleConstants.appPad * 0.5}em solid ${styleConstants.colors.red};
      `;
    }
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

const StyledIcon = styled.i`
  font-size:${styleConstants.appPad * 2}em;
`;

const headerStyle = `
  display: block;
  text-decoration: none;
  line-height:${styleConstants.appPad * 2}em;
  color:${styleConstants.colors.white};
  padding-bottom: ${styleConstants.appPad / 2}em;
`;
const StyledHeaderLink = styled(BernieLink)`
  ${headerStyle}
  ${props => {
    if(props.layoutVariation === 'header') {
      return `
        color: ${styleConstants.colors.red};
      `;
    }
  }}
`;
const StyledHeaderDiv = styled.div`
  ${headerStyle}
`;

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
  ${props => {
    if(props.layoutVariation === 'header') {
      return `
        background: ${styleConstants.colors.white};
        padding-right: 0;
      `;
    }
  }}

  ${props => {
    if(props.noLeftPadding) {
      return `
        padding-left: 0;
      `;
    }
  }}

  noLeftPadding
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


const headerButtonsStyles = `
  cursor:pointer;
  display:inline-block;
  vertical-align: middle;
  padding-right: ${styleConstants.appPad}em;

`;

const StyledButton = styled.div`
  ${styleConstants.mixins.button()}
  color: ${styleConstants.colors.red};
  ${props => {
    if(props.layoutVariation === 'header') {
      return headerButtonsStyles;
    }
  }}
`;

const StyledButtonInnerAnchor = styled.a`
  ${styleConstants.mixins.buttonInner()}
  background: ${styleConstants.colors.white};
`;
const StyledButtonInnerBernieLink = styled(BernieLink)`
  ${styleConstants.mixins.buttonInner()}
  background: ${styleConstants.colors.white};
  ${props => {
    if(props.layoutVariation === 'header') {
      return `
        ${styleConstants.mixins.buttonInner()}
        background: ${styleConstants.colors.red};
        color: ${styleConstants.colors.white};
        padding: ${styleConstants.appPad / 2}em ${styleConstants.appPad / 2}em;
        height: auto;
        line-height: normal;
        cursor: normal;
      `;
    }
  }}
`;
const StyledButtonInnerSpan = styled.span`
  ${styleConstants.mixins.buttonInner()}
  background: ${styleConstants.colors.white};
`;


let BernieAppButtonGroup = class extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    console.log(this.props.hideExtras);
    const icon =
      this.props.icon && !this.props.hideExtras && 
      <StyledIconWrapper isModal={this.props.isModal}>
        <StyledIcon className="material-icons" isModal={this.props.isModal}>
          {this.props.icon}
        </StyledIcon>
      </StyledIconWrapper>;

    const shortHeadline =
      this.props.shortHeadline &&
      <StyledMicroText isModal={this.props.isModal}>
        <span>
          {this.props.shortHeadline}
        </span>
      </StyledMicroText>;

    const headline =
      this.props.headline && !this.props.hideExtras && 
      <StyledText isModal={this.props.isModal} layoutVariation={this.props.layoutVariation}>
        <span>
          {this.props.headline}
        </span>
      </StyledText>;
    const buttons = this.props.filter(this.props.buttons);
    const buttonComponents =
      buttons &&
      <StyledButtonGroupButtons isModal={this.props.isModal} filter={this.props.filter}>
        {!this.props.hideExtras && this.props.buttonsPrepend(this.props)}
        {buttons.map(btnDetails => {
          let btnInner;
          if (btnDetails.onUploadSuccess) {
            btnInner = (
              <Upload
                onSuccess={this.props.onUploadSuccess}
              >
                {btnDetails.text}
              </Upload>
            );
          } else if (btnDetails.aHref) {
            btnInner = (
              <StyledButtonInnerAnchor href={btnDetails.aHref}>
                {btnDetails.text}
              </StyledButtonInnerAnchor>
            );
          } else if (btnDetails.actionType) {
            const toSettings = {
              type: `BERNIE_${btnDetails.actionType}`,
              compositeImageData: this.props.compositeImageData,
            };
            if (btnDetails.bernieDynamicScreen) {
              toSettings.bernieDynamicScreen = btnDetails.bernieDynamicScreen;
            }
            btnInner = (
              <StyledButtonInnerBernieLink
                layoutVariation={this.props.layoutVariation}
                to={
                  toSettings
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
          } else {
            btnInner = (
              <StyledButtonInnerSpan>
                {btnDetails.text}
              </StyledButtonInnerSpan>
            );
          }

          return (
            <StyledButton key={btnDetails.text} layoutVariation={this.props.layoutVariation}>
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
        layoutVariation={this.props.layoutVariation}
        hasLeftBorder={this.props.hasLeftBorder}
      >
        <StyledButtonGroup isModal={this.props.isModal}  layoutVariation={this.props.layoutVariation} noLeftPadding={this.props.noLeftPadding}>
          <LinkOrDiv to={to} layoutVariation={this.props.layoutVariation}>
            {shortHeadline}
            {icon}
            {headline}
          </LinkOrDiv>
          {buttonComponents}
        </StyledButtonGroup>
      </StyledSubsection>
    );
  }
}
BernieAppButtonGroup.propTypes = {
  icon: PropTypes.string,
  shortHeadline: PropTypes.string,
  headline: PropTypes.string,
  buttons: PropTypes.array,
  urlFragment: PropTypes.string,
  compositeImageData: PropTypes.object,
  onUploadSuccess: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  isModal: PropTypes.bool,
  themex: PropTypes.string,
  filter: PropTypes.func,
  buttonsPrepend: PropTypes.func,
};
BernieAppButtonGroup.defaultProps = {
  icon: '',
  shortHeadline: '',
  headline: '',
  buttons: [],
  urlFragment: '',
  compositeImageData: null,
  onUploadSuccess: null,
  isModal: false,
  themex: '',
  filter: (buttons) => {
    return buttons;
  },
  buttonsPrepend: () => {},
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

        <ModalScreen hasCloseButton>
          {ButtonGroup}
        </ModalScreen>
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
  themex: 'microSubsection',
  shortHeadline: 'edit',
  icon: 'brush',
});
buttonGroupComponents.editBrush = EditBrushButtonGroup;

const EditSizeButtonGroup = makeButtonGroupComponent({
  urlFragment: 'editSize',
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

const EditDesignButtonGroup = makeButtonGroupComponent({
  urlFragment: 'editDesign',
  themex: 'designSubsection',
  shortHeadline: 'edit',
  headline: 'Change design:',
  icon: 'brush',
  buttonsPrepend: (props) => {
    return (
      <ImagePickerTemplate limit={3} layoutVariation={props.layoutVariation} />
    );
  },
  buttons: [
    {
      text: 'more options',
      routerLinkScreenName: 'select-template',
      actionType: 'SELECT_TEMPLATE'
    },
    {
      text: 'upload a template',
      routerLinkScreenName: 'upload-template',
      actionType: 'UPLOAD_TEMPLATE'
    }
  ]
});
buttonGroupComponents.editDesign = EditDesignButtonGroup;

const ImageNeighborCompensator = styled.div`
  display: inline-block;
  vertical-align: middle;
  height: 5em;
`;

const GetPhotoMinimalButtonGroup = makeButtonGroupComponent({
  urlFragment: 'editDesign',
  themex: 'designSubsection',
  // shortHeadline: 'edit',
  headline: '\u00A0',
  // icon: 'brush',
  buttonsPrepend: () => {
    return (
      <ImageNeighborCompensator />
    );
  },
  buttons: [
    {
      text: 'get photo',
      routerLinkScreenName: 'select-template',
      actionType: 'DYNAMIC',
      bernieDynamicScreen: 'import',
    },
  ]
});
buttonGroupComponents.getPhotoMinimal = GetPhotoMinimalButtonGroup;

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
  GetPhotoMinimalButtonGroup,
};
