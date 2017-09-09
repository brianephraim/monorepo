import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Upload from './Upload';
import AppReduxLink from './AppReduxLink';

import styleConstants from './style-constants';
import {ConnectResponsiveStatusesDictHOC, appConnect} from './nameSpacedResponsive';
import ImagePickerTemplate from './ImagePickerTemplate';
import ModalScreen from './ModalScreen';
import setBackgroundHoc from './setBackgroundHoc';
import ancestorConstantsHoc from './ancestorConstantsHoc';

import './app.scss';

const StyledSubsection = ConnectResponsiveStatusesDictHOC(styled.div`
  padding-bottom: ${styleConstants.appPad}em;
  ${props => {
    let toReturn = '';
    // singleColHome
    if (!props.isModal && props.responsiveStatusesDict.homeResponsive && props.responsiveStatusesDict.homeResponsive.singleCol) {
      toReturn += `
        float:none;
        margin:0 auto;
      `;
      if (
        props.themex === 'editSubsection' ||
        props.themex === 'designSubsection'
      ) {
        toReturn += `display:none;`;
      }
    }

    if (props.themex === 'microSubsection') {
      toReturn += `
        display:none;
      `;
      if (!props.isModal && props.responsiveStatusesDict.homeResponsive.singleCol) {
        toReturn += `
          display:block;
        `;
      }
    }
    return toReturn;
  }} ${(props) => {
      if (props.layoutVariation === 'header') {
        return `
        display: inline-block;
        padding-bottom: 0;
      `;
      }
      return '';
    }} ${(props) => {
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
    if (!props.isModal && props.responsiveStatusesDict.homeResponsive && props.responsiveStatusesDict.homeResponsive.singleCol) {
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
  ${(props) => {
    if (props.layoutVariation === 'header') {
      return `
        color: ${styleConstants.colors.red};
      `;
    }
    return '';
  }}
`;
const StyledHeaderDiv = styled.div`${headerStyle};`;

const StyledMicroText = ConnectResponsiveStatusesDictHOC(styled.div`
  display: none;
  text-align: center;
  line-height: 0;
  padding-top: ${styleConstants.appPad / 2}em;
  padding-bottom: ${styleConstants.appPad}em;
  ${props => {
    // singleColHome
    if (!props.isModal && props.responsiveStatusesDict.homeResponsive && props.responsiveStatusesDict.homeResponsive.singleCol) {
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
    // singleColHome
    if (!props.isModal && props.responsiveStatusesDict.homeResponsive && props.responsiveStatusesDict.homeResponsive.singleCol) {
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
    if (!props.isModal && props.responsiveStatusesDict.homeResponsive && props.responsiveStatusesDict.homeResponsive.singleCol) {
      return `
        padding: ${styleConstants.appPad / 2}em 0 0 0;
        cursor:pointer;
      `;
    }
    return '';
  }}
  background:${styleConstants.colors.red};
  ${(props) => {
    if (props.layoutVariation === 'header') {
      return `
        background: ${styleConstants.colors.white};
        padding-right: 0;
      `;
    }
    return '';
  }}

  ${(props) => {
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
  ${(props) => {
    // singleColHome

    if (!props.isModal && props.responsiveStatusesDict.homeResponsive && props.responsiveStatusesDict.homeResponsive.singleCol) {
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
  ${(props) => {
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
  ${(props) => {
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

let UploadBackgroundSetter = (props) => {
  return (
    <Upload onSuccess={props.setBackground} backendApiPrefix={props.constants.backendApiPrefix}>
      {props.children}
    </Upload>
  );
};
UploadBackgroundSetter.propTypes = {
  setBackground: PropTypes.func.isRequired,
  constants: PropTypes.object.isRequired,
  children: PropTypes.node
};
UploadBackgroundSetter.defaultProps = {
  children: null,
}
UploadBackgroundSetter = ancestorConstantsHoc(setBackgroundHoc(UploadBackgroundSetter));

let AppButtonGroup = class extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const icon =
      this.props.icon &&
      !this.props.hideExtras &&
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
      this.props.headline &&
      !this.props.hideExtras &&
      <StyledText
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
        isModal={this.props.isModal}
        filter={this.props.filter}
      >
        {!this.props.hideExtras && (<ComponentPrepended {...this.props} />)}
        {buttons.map(btnDetails => {
          let btnInner;
          if (btnDetails.isUploadBackgroundSetter) {
            btnInner = (
              <UploadBackgroundSetter>
                {btnDetails.text}
              </UploadBackgroundSetter>
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

    const LinkOrDiv =
      this.props.compositeImageData.screen === this.props.urlFragment
        ? StyledHeaderDiv
        : StyledHeaderLink;
    const to = {
      type: `DYNAMIC`,
      compositeImageData: this.props.compositeImageData,
      dynamicScreen: this.props.urlFragment,
    };
    return (
      <StyledSubsection
        themex={this.props.themex}
        layoutVariation={this.props.layoutVariation}
        hasLeftBorder={this.props.hasLeftBorder}
      >
        <StyledButtonGroup
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
  hideExtras: false,
  noLeftPadding: false,
  hasLeftBorder: false,
  isModal: false,
  themex: '',
  layoutVariation: '',
  filter: (buttons) => {
    return buttons;
  },
  buttonsPrepend: () => {return null},
};

AppButtonGroup = appConnect((appState /* , { params }*/) => {
  return {
    compositeImageData: appState.compositeImageData,
  };
})(AppButtonGroup);

const buttonGroupComponents = {};
function makeButtonGroupComponent(
  options /* {
  headline,// shortHeadline, icon, buttons
}*/
) {

  function ButtonGroup(props) {
    options = typeof options === 'function' ? options(props.constants) : options;
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

  return ancestorConstantsHoc(ButtonGroup);
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
      actionType: 'IMPORT_FACEBOOK',
    },
    {
      text: 'Camera',
      isUploadBackgroundSetter: true,
    },
    {
      text: 'URL',
      routerLinkScreenName: 'import-url',
      actionType: 'IMPORT_URL',
    },
    {
      text: 'Storage',
    },
  ],
});
buttonGroupComponents.import = ImportButtonGroup;

const ShareButtonGroup = makeButtonGroupComponent((constants) => {
  return {
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
          constants.tweetUrl,
      },
    ],
  }
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
      actionType: 'CROP',
    },
  ],
});
buttonGroupComponents.editSize = EditSizeButtonGroup;

function ImagePickerTemplateConfigured(props) {
  return (<ImagePickerTemplate limit={3} layoutVariation={props.layoutVariation} />);
}
ImagePickerTemplateConfigured.propTypes = {
  layoutVariation: PropTypes.string
};
ImagePickerTemplateConfigured.defaultProps = {
  layoutVariation: ''
};
const EditDesignButtonGroup = makeButtonGroupComponent({
  urlFragment: 'editDesign',
  themex: 'designSubsection',
  shortHeadline: 'edit',
  headline: 'Change design:',
  icon: 'brush',
  buttonsPrepend: ImagePickerTemplateConfigured,
  buttons: [
    {
      text: 'more options',
      routerLinkScreenName: 'select-template',
      actionType: 'SELECT_TEMPLATE',
    },
    {
      text: 'upload a template',
      routerLinkScreenName: 'upload-template',
      actionType: 'UPLOAD_TEMPLATE',
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
  themex: 'designSubsection',
  // shortHeadline: 'edit',
  headline: '\u00A0',
  // icon: 'brush',
  buttonsPrepend: ImageNeighborCompensator,
  buttons: [
    {
      text: 'get photo',
      routerLinkScreenName: 'select-template',
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
