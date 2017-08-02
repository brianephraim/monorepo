import './app.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResponsiveHOC, {
  ResponsiveMaster,
  generateGiantSquareDetails,
} from 'responsive';
import { Route, Link } from 'react-router-dom';
import Upload from './Upload';
import { formUrl } from './deriveUrlInfo';

const Div = props => {
  return (
    <div {...props}>
      {props.children}
    </div>
  );
};

const A = props => {
  return (
    <a {...props}>
      {props.children}
    </a>
  );
};

class BernieAppButtonGroup extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const icon =
      this.props.icon &&
      <div className="section_header_icon">
        <i className="material-icons">
          {this.props.icon}
        </i>
      </div>;

    const shortHeadline =
      this.props.shortHeadline &&
      <div className="section_header_microText">
        <span>
          {this.props.shortHeadline}
        </span>
      </div>;

    const headline =
      this.props.headline &&
      <div className="section_header_text">
        <span>
          {this.props.headline}
        </span>
      </div>;

    const buttons =
      this.props.buttons &&
      <div className="buttonGroup_buttons">
        {this.props.buttons.map((btnDetails, i) => {
          const LinkOrDiv = btnDetails.url ? Link : Div;
          let btnInner;
          let className = 'buttonGroup_button button';
          if (btnDetails.onUploadSuccess) {
            btnInner = (
              <Upload
                className={btnDetails.className}
                onSuccess={btnDetails.onUploadSuccess.bind(this)}
              >
                {btnDetails.text}
              </Upload>
            );
          } else if (btnDetails.aHref) {
            btnInner = (
              <a className={btnDetails.className} href={btnDetails.aHref}>
                {btnDetails.text}
              </a>
            );
          } else if (btnDetails.routerLink) {
            const routerLink =
              typeof btnDetails.routerLink === 'function'
                ? btnDetails.routerLink(this.props)
                : btnDetails.routerLink;
            btnInner = (
              <Link
                className={btnDetails.className}
                to={`${this.props.match.url}/${routerLink}`}
              >
                {btnDetails.text}
              </Link>
            );
          } else if (btnDetails.onClick) {
            btnInner = (
              <span onClick={btnDetails.onClick}>
                {btnDetails.text}
              </span>
            );
            className = `${className} ${btnDetails.className}`;
          } else {
            btnInner = (
              <span>
                {btnDetails.text}
              </span>
            );
            className = `${className} ${btnDetails.className}`;
          }

          return (
            <div key={i} className={className}>
              {btnInner}
            </div>
          );
        })}
      </div>;
    const match = this.props.match;

    const splitted = match.url.split('/');
    const LinkOrDiv =
      match.url.split('/').reverse()[0] === this.props.urlFragment ? Div : Link;
    const linkUrl =
      match && match.url
        ? `${match.url}/${formUrl(this.props.compositeImageData)}/${this.props
            .urlFragment}`
        : '/bernie';
    return (
      <div
        className={`app_body_rightPillar_section_subsection ${this.props
          .className}`}
      >
        <div className="buttonGroup">
          <LinkOrDiv to={linkUrl} className="section_header">
            {shortHeadline}
            {icon}
            {headline}
          </LinkOrDiv>
          {buttons}
        </div>
      </div>
    );
  }
}
BernieAppButtonGroup.propTypes = {
  // className: PropTypes.string,
  // headline: PropTypes.string,
  // shortHeadline: PropTypes.string,
  // icon: PropTypes.string,
  // children: PropTypes.object,
  // buttons: PropTypes.array,
};

const buttonGroupComponents = {};
function makeButtonGroupComponent(
  options /* {
  headline,// shortHeadline, icon, buttons
}*/
) {
  class ButtonGroup extends Component {
    constructor() {
      super();
      this.state = {};
    }
    render() {
      const ButtonGroup = (
        <BernieAppButtonGroup
          { ...this.props }
          { ...options }
        />
      );

      if (this.props.isModal) {
        return (
          <div className="modal">
            {ButtonGroup}
          </div>
        );
      }
      return ButtonGroup;
    }
  }
  ButtonGroup.propTypes = {};
  return ButtonGroup;
}

const ImportButtonGroup = makeButtonGroupComponent({
  urlFragment: 'import',
  headline: 'Photo from:',
  shortHeadline: 'import',
  icon: 'photo_camera',
  buttons: [
    {
      className: 'importFbPhotoButton',
      text: 'Facebook',
      routerLink: props => {
        return `${formUrl(
          props.compositeImageData
        )}/import-photo-from-facebook`;
      },
    },
    {
      className: 'cameraUploadizer',
      text: 'Camera',
      onUploadSuccess(imgData) {
        
        console.log(this);
        /*
          Key: "selfies/a-brian14744733088711500480799004.png",
          failingSquare: undefined,
          height: 1280,
          public_id:"a-brian14744733088711500480799004.png",
          url:"https://bernieapp.s3.amazonaws.com/selfies/a-brian14744733088711500480799004.png",
          width:
          960
        */
        
        console.log('WE DID IT', imgData);
        this.props.onUploadSuccess(imgData.url);
      },
    },
    {
      className: 'urlUploadizer',
      text: 'URL',
    },
    {
      className: 'storageUploadizer',
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
      className: 'shareFbPhotoButton',
      text: 'Facebook photo',
    },
    {
      className: 'shareFbWallButton',
      text: 'Facebook post',
    },
    {
      className: 'twitterBigButton mainButton',
      text: 'Tweet',
      aHref:
        'https://twitter.com/intent/tweet?url=xXxXxXxXxXxXxXxXxXxXxXxX&via=bernieselfie&hashtags=BernieSanders%2Cfeelthebern%2Cbernieselfie&related=BernieSander',
    },
  ],
});
buttonGroupComponents.share = ShareButtonGroup;

const EditBrushButtonGroup = makeButtonGroupComponent({
  urlFragment: 'editBrush',
  className: 'editMicroSubsection microSubsection',
  shortHeadline: 'edit',
  icon: 'brush',
});
buttonGroupComponents.editBrush = EditBrushButtonGroup;

const EditSizeButtonGroup = makeButtonGroupComponent({
  urlFragment: 'editSize',
  className: 'editSubsection',
  shortHeadline: 'edit',
  headline: 'Edit:',
  icon: 'transform',
  buttons: [
    {
      className: 'editSizeAndPositionButton',
      text: 'Size and position',
      routerLink: props => {
        const compositeImageData = props.compositeImageData;
        console.log('compositeImageData', compositeImageData);
        const fg = compositeImageData.foreground;
        const bg = compositeImageData.background;
        console.log('formUrl', formUrl(compositeImageData));
        const routerLink = `${formUrl(compositeImageData)}/crop`;
        return routerLink;
      },
    },
  ],
});
buttonGroupComponents.editSize = EditSizeButtonGroup;

const EditDesignButtonGroup = makeButtonGroupComponent({
  urlFragment: 'editDesign',
  className: 'designSubsection',
  shortHeadline: 'edit',
  headline: 'Change design:',
  icon: 'brush',
  buttons: [
    {
      className: 'moreimageOptionsHome',
      text: 'more options',
    },
    {
      className: 'templateModalButton',
      text: 'upload a template',
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
