import './app.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResponsiveHOC, { ResponsiveMaster, generateGiantSquareDetails } from 'responsive';
import { Route, Link } from 'react-router-dom';
import { buttonGroupComponents, buttonGroupComponentsRegexArrayString, EditDesignButtonGroup, EditSizeButtonGroup, EditBrushButtonGroup, ShareButtonGroup, ImportButtonGroup } from './buttonGroups';
import Cropper from './Cropper';
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
          {[`${this.props.match.url}/crop/:src`,`${this.props.match.url}/crop/:src/:geo`].map((path, i) => 
            <Route
              key={i}
              path={path}
              render={(props) => {
                return (
                  <Cropper
                    src={props.match.params.src}
                    geo={props.match.params.geo}
                    foo={props.match.params.src}
                    {...props}
                  />
                );
              }}
            />  
          )}
                     
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
