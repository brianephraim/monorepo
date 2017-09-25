/* eslint-disable import/no-mutable-exports */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Upload from './Upload';
import AppReduxLink from './AppReduxLink';

import styleConstants from './style-constants';
import {
  ConnectResponsiveStatusesDictHOC,
  appConnect,
} from './nameSpacedResponsive';
import ImagePickerTemplate from './ImagePickerTemplate';
import ModalScreen from './ModalScreen';
import setBackgroundHoc from './setBackgroundHoc';
import ancestorConstantsHoc from './ancestorConstantsHoc';
import { postToWall, exportStuff } from './fb';
import { formUrl } from './deriveUrlInfo';
import UploadCompositeImageSetter from './UploadCompositeImageSetter';
import shareUrlHoc from './shareUrlHoc';

import './app.scss';
const StyledSubsection = ConnectResponsiveStatusesDictHOC(styled.div`
  padding-bottom: ${styleConstants.appPad}em;
  ${props => {
    let toReturn = '';
    // singleColHome
    if (
      props.isSingleButton
    ) {
      toReturn += `
        float:none;
        margin:0 auto;
      `;
    }
    return toReturn;
  }} ${props => {
      if (props.layoutVariation === 'header') {
        return `
        display: inline-block;
        padding-bottom: 0;
      `;
      }
      return '';
    }} ${props => {
      if (props.hasLeftBorder) {
        return `
        border-left: ${styleConstants.appPad * 0.5}em solid ${styleConstants
          .colors.red};
      `;
      }
      return '';
    }};
`);

const StyledIconWrapper = ConnectResponsiveStatusesDictHOC(styled.div`
  width: ${styleConstants.appPad * 2}em;
  height: ${styleConstants.appPad * 2}em;
  float: left;
  ${props => {
    // singleColHome
    if (
      props.isSingleButton
    ) {
      return `
        float:none;
        margin:0 auto;
      `;
    }
    return '';
  }};
`);

const StyledIcon = styled.i`font-size: ${styleConstants.appPad * 2}em;`;

const headerStyle = `
  display: block;
  text-decoration: none;
  line-height:${styleConstants.appPad * 2}em;
  color:${styleConstants.colors.white};
  padding-bottom: ${styleConstants.appPad / 2}em;
`;
const StyledHeaderLink = styled(AppReduxLink)`
  ${headerStyle}
  ${props => {
    if (props.layoutVariation === 'header') {
      return `
        color: ${styleConstants.colors.red};
      `;
    }
    return '';
  }}
`;
const StyledHeaderDiv = styled.div`
  ${headerStyle}
  ${props => {
    if (props.layoutVariation === 'header') {
      return `
        color: ${styleConstants.colors.red};
      `;
    }
    return '';
  }}
`;

const StyledMicroText = ConnectResponsiveStatusesDictHOC(styled.div`
  display: none;
  text-align: center;
  line-height: 0;
  padding-top: ${styleConstants.appPad / 2}em;
  padding-bottom: ${styleConstants.appPad}em;
  ${props => {
    if (
      props.isSingleButton
    ) {
      return `
        display:block;
      `;
    }
    return '';
  }};
`);

const StyledText = ConnectResponsiveStatusesDictHOC(styled.div`
  padding-left: ${styleConstants.appPad / 2}em;
  overflow: hidden;
  ${props => {
    if (
      props.isSingleButton
    ) {
      return `
        width:0;
        white-space: nowrap;
        display: none;
      `;
    }
    return '';
  }};
`);
const StyledButtonGroup = ConnectResponsiveStatusesDictHOC(styled.div`
  overflow:hidden;
  padding: ${styleConstants.appPad /
    2}em ${styleConstants.appPad}em 0 ${styleConstants.appPad}em;
  ${props => {
    // singleColHome
    if (
      props.isSingleButton
    ) {
      return `
        padding: ${styleConstants.appPad / 2}em 0 0 0;
        cursor:pointer;
      `;
    }
    return '';
  }}
  background:${styleConstants.colors.red};
  ${props => {
    if (props.layoutVariation === 'header') {
      return `
        background: ${styleConstants.colors.white};
        padding-right: 0;
      `;
    }
    return '';
  }}

  ${props => {
    if (props.noLeftPadding) {
      return `
        padding-left: 0;
      `;
    }
    return '';
  }}

  noLeftPadding
`);


const StyledButtonGroupButtons = ConnectResponsiveStatusesDictHOC(styled.div`
  ${props => {
    // singleColHome

    if (
      props.isSingleButton
    ) {
      return `
        display:none;
      `;
    }
    return '';
  }};
`);

const headerButtonsStyles = `
  display:inline-block;
  vertical-align: middle;
  padding-right: ${styleConstants.appPad}em;

`;

const StyledButton = styled.div`
  ${styleConstants.mixins.button()};
  color: ${styleConstants.colors.red};
  ${props => {
    if (props.layoutVariation === 'header') {
      return headerButtonsStyles;
    }
    return '';
  }};
`;

const StyledButtonInnerAnchor = styled.a`
  ${styleConstants.mixins.buttonInner()} background: ${styleConstants.colors
      .white};
`;
const StyledButtonInnerAppReduxLink = styled(AppReduxLink)`
  ${styleConstants.mixins.buttonInner()}
  background: ${styleConstants.colors.white};
  ${props => {
    if (props.layoutVariation === 'header') {
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
    return '';
  }}
`;
const StyledButtonInnerSpan = styled.span`
  ${styleConstants.mixins.buttonInner()} background: ${styleConstants.colors
      .white};
`;



let AppButtonGroup = class extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const icon =
      this.props.icon &&
      !this.props.hideExtras &&
      <StyledIconWrapper isModal={this.props.isModal} isSingleButton={this.props.isSingleButton}>
        <StyledIcon className="material-icons" isModal={this.props.isModal}>
          {this.props.icon}
        </StyledIcon>
      </StyledIconWrapper>;

    const shortHeadline =
      this.props.shortHeadline &&
      <StyledMicroText isModal={this.props.isModal} isSingleButton={this.props.isSingleButton}>
        <span>
          {this.props.shortHeadline}
        </span>
      </StyledMicroText>;

    const headline =
      this.props.headline &&
      !this.props.hideExtras &&
      <StyledText
        isSingleButton={this.props.isSingleButton}
        isModal={this.props.isModal}
        layoutVariation={this.props.layoutVariation}
      >
        <span>
          {this.props.headline}
        </span>
      </StyledText>;
    const buttons = this.props.filter(this.props.buttons);
    const ComponentPrepended = this.props.buttonsPrepend;
    const buttonComponents =
      buttons &&
      <StyledButtonGroupButtons
        isSingleButton={this.props.isSingleButton}
        isModal={this.props.isModal}
        filter={this.props.filter}
      >
        {!this.props.hideExtras && <ComponentPrepended {...this.props} />}
        {buttons.map(btnDetails => {
          if (btnDetails.hideWhen && btnDetails.hideWhen(this.props)) {
            return null
          }
          let btnInner;
          if (btnDetails.isUploadCompositeImageSetter) {
            btnInner = (
              <UploadCompositeImageSetter isTemplateUploader={btnDetails.isTemplateUploader} >
                {btnDetails.text}
              </UploadCompositeImageSetter>
            );
          } else if (btnDetails.aHref) {
            btnInner = (
              <StyledButtonInnerAnchor href={btnDetails.aHref}>
                {btnDetails.text}
              </StyledButtonInnerAnchor>
            );
          } else if (btnDetails.actionType) {
            const toSettings = {
              type: `${btnDetails.actionType}`,
              compositeImageData: this.props.compositeImageData,
            };
            if (btnDetails.dynamicScreen) {
              toSettings.dynamicScreen = btnDetails.dynamicScreen;
            }
            btnInner = (
              <StyledButtonInnerAppReduxLink
                layoutVariation={this.props.layoutVariation}
                to={toSettings}
              >
                {btnDetails.text}
              </StyledButtonInnerAppReduxLink>
            );
          } else if (btnDetails.onClick) {
            btnInner = (
              <StyledButtonInnerSpan
                onClick={btnDetails.onClick}
                role="button"
                tabIndex="0"
              >
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
            <StyledButton
              key={btnDetails.text}
              layoutVariation={this.props.layoutVariation}
            >
              {btnInner}
            </StyledButton>
          );
        })}
      </StyledButtonGroupButtons>;
    // headerButtonActionType
    const LinkOrDiv =
      this.props.layoutVariation === 'header' ||
      this.props.compositeImageData.screen === this.props.urlFragment
        ? StyledHeaderDiv
        : StyledHeaderLink;
    const to = 
      this.props.headerButtonActionType
      ? {
          type: this.props.headerButtonActionType,
          compositeImageData: this.props.compositeImageData,
        }
      : {
          type: `DYNAMIC`,
          compositeImageData: this.props.compositeImageData,
          dynamicScreen: this.props.urlFragment,
        };
    return (
      <StyledSubsection
        isSingleButton={this.props.isSingleButton}
        themex={this.props.themex}
        layoutVariation={this.props.layoutVariation}
        hasLeftBorder={this.props.hasLeftBorder}
      >
        <StyledButtonGroup
          isSingleButton={this.props.isSingleButton}
          isModal={this.props.isModal}
          layoutVariation={this.props.layoutVariation}
          noLeftPadding={this.props.noLeftPadding}
        >
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
};
AppButtonGroup.propTypes = {
  icon: PropTypes.string,
  shortHeadline: PropTypes.string,
  headline: PropTypes.string,
  buttons: PropTypes.array,
  urlFragment: PropTypes.string,
  headerButtonActionType: PropTypes.string,
  compositeImageData: PropTypes.object.isRequired,
  hideExtras: PropTypes.bool,
  noLeftPadding: PropTypes.bool,
  hasLeftBorder: PropTypes.bool,
  isModal: PropTypes.bool,
  themex: PropTypes.string,
  layoutVariation: PropTypes.string,
  filter: PropTypes.func,
  buttonsPrepend: PropTypes.func,
};
AppButtonGroup.defaultProps = {
  icon: '',
  shortHeadline: '',
  headline: '',
  buttons: [],
  urlFragment: '',
  headerButtonActionType: '',
  hideExtras: false,
  noLeftPadding: false,
  hasLeftBorder: false,
  isModal: false,
  themex: '',
  layoutVariation: '',
  filter: buttons => {
    return buttons;
  },
  buttonsPrepend: () => {
    return null;
  },
};

AppButtonGroup = appConnect((appState /* , { params }*/) => {
  return {
    compositeImageData: appState.compositeImageData,
    responsiveStatusesDict:appState.responsiveStatusesDict,
  };
})(AppButtonGroup);

export default AppButtonGroup;





const buttonGroupComponents = {};
function makeButtonGroupComponent(
  options /* {
  headline,// shortHeadline, icon, buttons
}*/
) {
  function ButtonGroup(props) {
    const imageUrl = `${props.serverClientOrigin}${props.compositeImageUrl}`

    options =
      typeof options === 'function' ? options(props.constants,props.shareUrl, imageUrl) : options;
    const ButtonGroup = <AppButtonGroup {...props} {...options} />;
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
    constants: PropTypes.object.isRequired,
  };
  ButtonGroup.defaultProps = {
    isModal: false,
  };

  return shareUrlHoc(connect(
    (state) => {
      return {
        serverClientOrigin: state.serverClientOrigin,
      };
    }
  )(appConnect(
    (appState) => {
      return {
        compositeImageData: appState.compositeImageData,
        compositeImageUrl: appState.compositeImageData.compositeImageUrl,
        constants: appState.constants
      };
    }
  )(ButtonGroup)));
}

const ImportButtonGroup = makeButtonGroupComponent({
  urlFragment: 'import',
  headline: 'Photo from:',
  shortHeadline: 'import',
  icon: 'photo_camera',
  buttons: [
    {
      text: 'Facebook',
      actionType: 'IMPORT_FACEBOOK',
    },
    {
      text: 'Camera',
      isUploadCompositeImageSetter: true,
    },
    {
      text: 'URL',
      actionType: 'IMPORT_URL',
    },
    {
      text: 'Storage',
    },
  ],
});
buttonGroupComponents.import = ImportButtonGroup;

const ShareButtonGroup = makeButtonGroupComponent((constants, shareUrl, imageUrl) => {
  return {
    urlFragment: 'share',
    headline: 'Share this via:',
    shortHeadline: 'share',
    icon: 'share',
    buttons: [
      {
        text: 'Facebook photo',
        onClick: () => {
          exportStuff(imageUrl);
        },
      },
      {
        text: 'Facebook post',
        onClick: () => {
          postToWall(shareUrl);
        },
      },
      {
        text: 'Tweet',
        aHref: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&via=bernieselfie&hashtags=BernieSanders%2Cfeelthebern%2Cbernieselfie&related=BernieSanders`,
      },
    ],
  };
});
buttonGroupComponents.share = ShareButtonGroup;

const EditBrushButtonGroup = makeButtonGroupComponent({
  isSingleButton: true,
  headerButtonActionType: 'CROP',
  themex: 'microSubsection',
  shortHeadline: 'edit',
  icon: 'brush',
});
buttonGroupComponents.editBrush = EditBrushButtonGroup;

const EditSizeButtonGroup = makeButtonGroupComponent({
  headerButtonActionType: 'CROP',
  themex: 'editSubsection',
  shortHeadline: 'edit',
  headline: 'Edit:',
  icon: 'transform',
  buttons: [
    {
      text: 'Size and position',
      actionType: 'CROP',
    },
  ],
});
buttonGroupComponents.editSize = EditSizeButtonGroup;

function ImagePickerTemplateConfigured(props) {
  return (
    <ImagePickerTemplate limit={3} layoutVariation={props.layoutVariation} />
  );
}
ImagePickerTemplateConfigured.propTypes = {
  layoutVariation: PropTypes.string,
};
ImagePickerTemplateConfigured.defaultProps = {
  layoutVariation: '',
};

console.log('need to modify design when full screen mode');
const EditDesignButtonGroup = makeButtonGroupComponent({
  headerButtonActionType: 'SELECT_TEMPLATE',
  themex: 'designSubsection',
  shortHeadline: 'edit',
  headline: 'Change design:',
  icon: 'brush',
  buttonsPrepend: ImagePickerTemplateConfigured,
  buttons: [
    {
      text: 'more options',
      actionType: 'SELECT_TEMPLATE',
    },
    // {
    //   text: 'upload a template',
    //   actionType: 'UPLOAD_TEMPLATE',
    // },
    {
      text: 'upload a template',
      isUploadCompositeImageSetter: true,
      isTemplateUploader: true,
      hideWhen: ({layoutVariation}) => {
        return layoutVariation === 'header';
      }
    },
  ],
});
buttonGroupComponents.editDesign = EditDesignButtonGroup;

const ImageNeighborCompensator = styled.div`
  display: inline-block;
  vertical-align: middle;
  height: 5em;
`;

const GetPhotoMinimalButtonGroup = makeButtonGroupComponent({
  urlFragment: 'editDesign',
  // shortHeadline: 'edit',
  headline: '\u00A0',
  // icon: 'brush',
  buttonsPrepend: ImageNeighborCompensator,
  buttons: [
    {
      text: 'get photo',
      actionType: 'DYNAMIC',
      dynamicScreen: 'import',
    },
  ],
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

let ButtonGroupFeaturedRouteScreen = props => {
  if (props.dynamicScreen) {
    const Comp = buttonGroupComponents[props.dynamicScreen];
    return <Comp isModal />;
  }
  return null;
};
ButtonGroupFeaturedRouteScreen.propTypes = {
  dynamicScreen: PropTypes.string.isRequired,
};
ButtonGroupFeaturedRouteScreen.defaultProps = {
  dynamicScreen: '',
};
ButtonGroupFeaturedRouteScreen = connect((state) => {
  return {
    dynamicScreen: state.location.payload.dynamicScreen,
  };
}, {})(ButtonGroupFeaturedRouteScreen);

export {
  ButtonGroupFeaturedRouteScreen,
  buttonGroupComponents,
  buttonGroupComponentsRegexArrayString,
  EditDesignButtonGroup,
  EditSizeButtonGroup,
  EditBrushButtonGroup,
  ShareButtonGroup,
  ImportButtonGroup,
  GetPhotoMinimalButtonGroup,
};
