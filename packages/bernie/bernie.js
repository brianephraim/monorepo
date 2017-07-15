import './app.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResponsiveHOC, { ResponsiveMaster, generateGiantSquareDetails } from 'responsive';
import { Route, Link } from 'react-router-dom';

// import { withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import styled from 'styled-components';


class Asdf extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (<div>{this.props.children}</div>);
  }
}
Asdf.propTypes = {};

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

// This component exists because its el had a class of 'bodyInner'
// and this was affected by:
//  >> var modalManager = bs.setupNewModalManager($('.bodyInner'));
class BernieHomeScreen extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (<div className="homeScreen">{this.props.children}</div>);
  }
}
BernieHomeScreen.propTypes = {};

// This component exists as a container to distingsh from the modals outside this container.
// THis was used for descendant selectors.
// FOr instance, .someButton within .homeLayout was styled differently than within .modal 
// (modal was outside .homeLayout)
// It was also used to display:none the home screen when modal appears.
// This can be merged into BernieHomeScreen probably.
class BernieHomeLayout extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div className="homeLayout">
        <BernieApp>
          <BernieContributeBanner />
          <BernieAppHeader />
          <BernieAppBody>
            <BernieAppHero />
            <BernieAppBusiness>
              <BernieAppPod className="section_share">
                <ShareButtonGroup
                  match={this.props.match}
                />
              </BernieAppPod>
              <BernieAppPod className="section_photo featured">
                <ImportButtonGroup
                  match={this.props.match}
                />
              </BernieAppPod>
              <BernieAppPod className="section_design">
                <EditBrushButtonGroup
                  match={this.props.match}
                />
                <EditSizeButtonGroup
                  match={this.props.match}
                />
                <EditDesignButtonGroup
                  match={this.props.match}
                />
              </BernieAppPod>
            </BernieAppBusiness>
          </BernieAppBody>
        </BernieApp>
        <BernieDisclaimer />
      </div>);
  }
}
BernieHomeLayout.propTypes = {};

// This component distinguishes the photo-plus-buttonGroupComponents from disclaimer.

class BernieApp extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (<div className="app">{this.props.children}</div>);
  }
}
BernieApp.propTypes = {};

// This adds padding to the bottom and serves as disclaimer.
// Disclaimer can probably be nested inside BernieApp.
class BernieDisclaimer extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (<div className="disclaimer">
      <p>
        contact: admin@bernieselfie.com <br />
        <a href="/terms">Terms&nbsp;and&nbsp;Conditions</a>
        {' -- '}
        <a href="/privacy">Privacy&nbsp;Policy</a>
        <br />
        bernieselfie.com is not affiliated with any political party, candidate, or interest group.
      </p>
    </div>);
  }
}
BernieDisclaimer.propTypes = {};

class BernieContributeBanner extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div className="topBanner">
        <a className="topBanner_link" href="http://www.berniesanders.com/">
          Contribute to Bernie at BernieSanders.comx&nbsp;>>
        </a>
      </div>
    );
  }
}
BernieContributeBanner.propTypes = {};

class BernieAppHeader extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div className="app_header header">
        <div className="app_header_leftPillar leftPillar">
          <div className="app_header_leftPillar_branding branding">
            <div className="app_header_leftPillar_branding_title branding_title">
              BernieSelfie.com
            </div>
            <div className="app_header_leftPillar_branding_subtitle branding_subtitle">
              Support Bernie with your picture
            </div>
          </div>
          <div className="app_header_leftPillar_socialRow socialRow">
            <div className="app_header_leftPillar_socialRow_socialWidget socialWidget">
              <a
                className="twitter-share-button"
                href="https://twitter.com/intent/tweet?url=xXxXxXxXxXxXxXxXxXxXxXxX&via=bernieselfie&hashtags=BernieSanders%2Cfeelthebern%2Cbernieselfie&related=BernieSanders"
              >
              Tweet</a>
            </div>
            <div
              className="fb-like app_header_leftPillar_socialRow_socialWidget socialWidget"
              data-share="true"
              data-width="450"
              data-layout="button_count"
              data-show-faces="true"
            >
            </div>

            <div className="app_header_leftPillar_socialRow_socialWidget socialWidget">
              <a href="//www.pinterest.com/pin/create/button/?url=xXxXxXxXxXxXxXxXxX&description=xXxXxXxXxXxXxXxXxXxXxXxXxXxXxX" data-pin-do="buttonPin" data-pin-config="beside" data-pin-color="red"><img src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_red_20.png" /></a>
            </div>
          </div>
        </div>
        <div className="app_header_rightPillar rightPillar">
          <div className="app_header_rightPillar_fbLikePageWrap">
            <img className="app_header_rightPillar_fbLikePageWrap_socialWidget socialWidget" src="/images/mock-fb-page.png" />
          </div>
          <div className="app_header_rightPillar_socialRow socialRow">
            <img className="app_header_rightPillar_socialRow_socialWidget socialWidget" src="/images/mock-fb-like.png" />
            <img className="app_header_rightPillar_socialRow_socialWidget socialWidget" src="/images/mock-tweet.png" />
            <img className="app_header_rightPillar_socialRow_socialWidget socialWidget" src="/images/mock-pintrest.png" />
          </div>
        </div>
      </div>
    );
  }
}
BernieAppHeader.propTypes = {};

class BernieAppBody extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (<div className="app_body">{this.props.children}</div>);
  }
}
BernieApp.propTypes = {};

class BernieAppMainSelfieFrame extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div style={this.props.style} className="app_body_leftPillar_selfieFrame js_mainSelfieFrame" ref={this.props.responsiveRef}>{this.props.children}</div>
    );
  }
}
BernieAppMainSelfieFrame.propTypes = {};
const BernieAppMainSelfieFrameResponsive = ResponsiveHOC(BernieAppMainSelfieFrame);

class BernieAppHero extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.onChange = (a,b,c) => {
      console.log('onCHange',a,b,c);
      this.setState({
        measurement: c.measurement,
      })
    };
  }
  render() {
    const turns = [
      {
        priority: 1,
        magicSquareName: generateGiantSquareDetails,
      },
      {
        priority: 3,
        magicSquareName: (el, masterClasses) => {
          const gapAtBottomViaMargin = masterClasses.noFloat ? 75: 0;
          return generateGiantSquareDetails(el, gapAtBottomViaMargin);
        },
      }
    ];
    return (
      <div className="app_body_leftPillar">
        <BernieAppMainSelfieFrameResponsive
          turns={turns}
          masterName="bernie"
        >
          <div className="app_body_leftPillar_selfieFrame_instructions "><span className="selfieFrame_instructions_text">Right click to save{this.state.measurement}</span></div>
          <img className="app_body_leftPillar_selfieFrame_selfie" src="/images/mock-selfie.png" />
        </BernieAppMainSelfieFrameResponsive>
      </div>
    );
  }
}
BernieContributeBanner.propTypes = {};

const Div = (props) => {
  return (<div {...props} >{props.children}</div>);
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
          if (btnDetails.aHref) {
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

class BernieAppBusiness extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (<div className="app_body_rightPillar" ref={this.props.responsiveRef}>{this.props.children}</div>);
  }
}
BernieAppBusiness.propTypes = {};
BernieAppBusiness = ResponsiveHOC(BernieAppBusiness, {
  masterName: 'bernie',
  turns: [
    {
      priority: 2,
      statusIncrementsRoundUp: {
        noFloat: 200,
      },
    },
    {
      priority: 4,
      statusIncrementsRoundUp: {
        singleCol: 390,
        doubleCol: 600,
      },
    }
  ]
});

class BernieAppPod extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (<div className={`app_body_rightPillar_section ${this.props.className}`}>{this.props.children}</div>);
  }
}
BernieAppPod.propTypes = {

};

class Bernie extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <ResponsiveMaster name="bernie">
        <BernieHomeScreen>
          
          <Route
            path={ this.props.match.url}
            exact
            render={(props) => {
              const Comp = buttonGroupComponents[props.match.params.foo];
              return (
                <BernieHomeLayout {...this.props}/>
              );
            }}
          />           
          <Route
            path={ `${this.props.match.url}/:foo(${buttonGroupComponentsRegexArrayString})`}
            render={(props) => {
              const Comp = buttonGroupComponents[props.match.params.foo];
              return (
                <Comp
                  isModal={true}
                  {...props}
                />
              );
            }}
          />
        </BernieHomeScreen>

      </ResponsiveMaster>
    );
  }
}

Bernie.propTypes = {

};

// const mapStateToProps = (state, props) => {
//   return {
//     assignedUser: state.users.idDict[props.assignedUserId],
//   };
// };

// ToDoItem = withRouter(connect(mapStateToProps)(ToDoItem));

export default Bernie;
