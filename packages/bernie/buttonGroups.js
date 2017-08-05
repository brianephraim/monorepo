import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Upload from './Upload';
import { formUrl } from './deriveUrlInfo';
import './app.scss';

const Div = props => {
  return (
    <div {...props}>
      {props.children}
    </div>
  );
};
Div.propTypes = {
  children: PropTypes.node.isRequired,
};

const A = props => {
  return (
    <a {...props}>
      {props.children}
    </a>
  );
};
A.propTypes = {
  children: PropTypes.node.isRequired,
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
              <span onClick={btnDetails.onClick} role="button" tabIndex="0">
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
            <div key={btnDetails.text} className={className}>
              {btnInner}
            </div>
          );
        })}
      </div>;
    const match = this.props.match;

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
  icon: PropTypes.string,
  shortHeadline: PropTypes.string,
  className: PropTypes.string,
  headline: PropTypes.string,
  buttons: PropTypes.array,
  match: PropTypes.object.isRequired,
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
      routerLink: props => {
        return `${formUrl(props.compositeImageData)}/select-template`;
      },
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
