import './app.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResponsiveHOC, { ResponsiveMaster, generateGiantSquareDetails } from 'responsive';
import { Route, Link } from 'react-router-dom';
import Upload from './Upload';

const Div = (props) => {
  return (<div {...props} >{props.children}</div>);
};

const A = (props) => {
  return (<a {...props} >{props.children}</a>);
};

class BernieAppButtonGroup extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    const icon = this.props.icon && (
      <div className="section_header_icon">
        <i className="material-icons">{this.props.icon}</i>
      </div>
    );

    const shortHeadline = this.props.shortHeadline && (
      <div className="section_header_microText">
        <span>{this.props.shortHeadline}</span>
      </div>
    );

    const headline = this.props.headline && (
      <div className="section_header_text">
        <span>{this.props.headline}</span>
      </div>
    );

    const buttons = this.props.buttons && (
      <div className="buttonGroup_buttons">
        {this.props.buttons.map((btnDetails, i) => {
          let btnInner;
          let className = 'buttonGroup_button button';
          if (btnDetails.component) {
            const Comp = btnDetails.component;
            btnInner = (
              <Comp
                className={btnDetails.className}
                onSuccess={btnDetails.onSuccess.bind(this)}
              >
                {btnDetails.text}
              </Comp>
            );
          } else if (btnDetails.aHref) {
            btnInner = (
              <a
                className={btnDetails.className}
                href={btnDetails.aHref}
              >
                {btnDetails.text}
              </a>
            );
          } else {
            btnInner = (<span>{btnDetails.text}</span>);
            className = `${className} ${btnDetails.className}`;
          }

          return (
            <div key={i} className={className}>
              {btnInner}
            </div>
          );
        })}
      </div>
    );
    const match = this.props.match;

    const splitted = match.url.split('/');
    const LinkOrDiv = match.url.split('/').reverse()[0] === this.props.urlFragment ? Div : Link;
    const linkUrl = match && match.url ? `${match.url}/${this.props.urlFragment}` : '/bernie';
    console.log(linkUrl.indexOf(``))
    return (      
      <div className={`app_body_rightPillar_section_subsection ${this.props.className}`}>
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
  className: PropTypes.string,
  headline: PropTypes.string,
  shortHeadline: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.object,
  buttons: PropTypes.array,
};

const buttonGroupComponents = {};
function makeButtonGroupComponent( options/*{
  headline,// shortHeadline, icon, buttons
}*/) {
  class ButtonGroup extends Component {
    constructor() {
      super();
      this.state = {
      };
    }
    render() {
      const ButtonGroup = (
        <BernieAppButtonGroup
          match={this.props.match}
          {...options}
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
    },
    {
      className: 'cameraUploadizer',
      text: 'Camera',
      component: Upload,
      onSuccess: function(imgData) {
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
        console.log('WE DID IT',imgData);
      }
    },
    {
      className: 'urlUploadizer',
      text: 'URL',
    },
    {
      className: 'storageUploadizer',
      text: 'Storage',
    },
  ]
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
      aHref: 'https://twitter.com/intent/tweet?url=xXxXxXxXxXxXxXxXxXxXxXxX&via=bernieselfie&hashtags=BernieSanders%2Cfeelthebern%2Cbernieselfie&related=BernieSander',
    },
  ]
});
buttonGroupComponents.share = ShareButtonGroup;

const EditBrushButtonGroup = makeButtonGroupComponent({
  urlFragment: 'editBrush',
  className: 'editMicroSubsection microSubsection',
  shortHeadline: 'edit',
  icon: 'brush'
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
    },
  ]
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
    }
  ]
});
buttonGroupComponents.editDesign = EditDesignButtonGroup;
const objectKeysButtonGroupComponents = Object.keys(buttonGroupComponents);
const buttonGroupComponentsRegexArrayString = objectKeysButtonGroupComponents.reduce((regexArray, componentKey, i) => {
  regexArray.push(componentKey);
  if(i === objectKeysButtonGroupComponents.length - 1) {
    return regexArray.join('|');
  }
  return regexArray;
}, []);


export { buttonGroupComponents, buttonGroupComponentsRegexArrayString, EditDesignButtonGroup, EditSizeButtonGroup, EditBrushButtonGroup, ShareButtonGroup, ImportButtonGroup };