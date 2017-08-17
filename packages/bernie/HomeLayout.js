import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ResponsiveHOC, {
  generateGiantSquareDetails,
} from '@defualt/responsive';
import {generateCompositeImgSrcUrl} from './compositeImage';

import {
  EditDesignButtonGroup,
  EditSizeButtonGroup,
  EditBrushButtonGroup,
  ShareButtonGroup,
  ImportButtonGroup,
} from './buttonGroups';


// This adds padding to the bottom and serves as disclaimer.
// Disclaimer can probably be nested inside BernieApp.
function BernieDisclaimer() {
  return (
    <div className="disclaimer">
      <p>
        contact: admin@bernieselfie.com <br />
        <a href="/terms">Terms&nbsp;and&nbsp;Conditions</a>
        {' -- '}
        <a href="/privacy">Privacy&nbsp;Policy</a>
        <br />
        bernieselfie.com is not affiliated with any political party, candidate,
        or interest group.
      </p>
    </div>
  );
}

function BernieContributeBanner() {
  return (
    <div className="topBanner">
      <a className="topBanner_link" href="http://www.berniesanders.com/">
        Contribute to Bernie at BernieSanders.comx&nbsp;{'>>'}
      </a>
    </div>
  );
}

function BernieAppHeader() {
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
              Tweet
            </a>
          </div>
          <div
            className="fb-like app_header_leftPillar_socialRow_socialWidget socialWidget"
            data-share="true"
            data-width="450"
            data-layout="button_count"
            data-show-faces="true"
          />

          <div className="app_header_leftPillar_socialRow_socialWidget socialWidget">
            <a
              href="//www.pinterest.com/pin/create/button/?url=xXxXxXxXxXxXxXxXxX&description=xXxXxXxXxXxXxXxXxXxXxXxXxXxXxX"
              data-pin-do="buttonPin"
              data-pin-config="beside"
              data-pin-color="red"
            >
              <img
                src="//assets.pinterest.com/images/pidgets/pinit_fg_en_rect_red_20.png"
                alt="Pintrest Pinit badge"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="app_header_rightPillar rightPillar">
        <div className="app_header_rightPillar_fbLikePageWrap">
          <img
            className="app_header_rightPillar_fbLikePageWrap_socialWidget socialWidget"
            src="/images/mock-fb-page.png"
            alt="Facebook Like badge"
          />
        </div>
        <div className="app_header_rightPillar_socialRow socialRow">
          <img
            className="app_header_rightPillar_socialRow_socialWidget socialWidget"
            src="/images/mock-fb-like.png"
            alt="Facebook Like badge"
          />
          <img
            className="app_header_rightPillar_socialRow_socialWidget socialWidget"
            src="/images/mock-tweet.png"
            alt="Twitter tweet badge"
          />
          <img
            className="app_header_rightPillar_socialRow_socialWidget socialWidget"
            src="/images/mock-pintrest.png"
            alt="Pintrest Pinit badge"
          />
        </div>
      </div>
    </div>
  );
}

function BernieAppMainSelfieFrame(props) {
  return (
    <div
      style={props.style}
      className="app_body_leftPillar_selfieFrame js_mainSelfieFrame"
      ref={props.responsiveRef}
    >
      {props.children}
    </div>
  );
}
BernieAppMainSelfieFrame.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  responsiveRef: PropTypes.func.isRequired,
};
BernieAppMainSelfieFrame.defaultProps = {
  style: null,
};

const BernieAppMainSelfieFrameResponsive = ResponsiveHOC(
  BernieAppMainSelfieFrame
);

let BernieAppHero = class extends Component {
  constructor() {
    super();
    this.state = {};
    this.onChange = (a, b, c) => {
      this.setState({
        measurement: c.measurement,
      });
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
          const gapAtBottomViaMargin = masterClasses.noFloat ? 75 : 0;
          return generateGiantSquareDetails(el, gapAtBottomViaMargin);
        },
      },
    ];

    return (
      <div className="app_body_leftPillar">
        <BernieAppMainSelfieFrameResponsive turns={turns} masterName="bernie">
          <div className="app_body_leftPillar_selfieFrame_instructions ">
            <span className="selfieFrame_instructions_text">
              Right click to save{this.state.measurement}
            </span>
          </div>
          <img
            className="app_body_leftPillar_selfieFrame_selfie"
            src={this.props.imSrc}
            alt="My BernieSelfie"
          />
        </BernieAppMainSelfieFrameResponsive>
      </div>
    );
  }
}
BernieAppHero.propTypes = {
  imSrc: PropTypes.string.isRequired,
};

BernieAppHero = connect(
  ( state/* , { params }*/) => {
    return {
      imSrc: (
        state.bernie && state.bernie.compositeImageData
        ?
        generateCompositeImgSrcUrl(state.bernie.compositeImageData)
        :
        '/images/mock-selfie.png'
      ),
      // toBeAssigned: getDetailsOfToBeAssigned(state),
    };
  },
  {
  }
)(BernieAppHero);


let BernieAppBusiness = props => {
  return (
    <div className="app_body_rightPillar" ref={props.responsiveRef}>
      {props.children}
    </div>
  );
};
BernieAppBusiness.propTypes = {
  responsiveRef: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

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
    },
  ],
});

function BernieAppPod (props) {
  return (
    <div className={`app_body_rightPillar_section ${props.className}`}>
      {props.children}
    </div>
  );
}
BernieAppPod.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
BernieAppPod.defaultProps = {
  className: '',
};

// This component exists as a container to distingsh from the modals outside this container.
// This was used for descendant selectors.
// For instance, .someButton within .homeLayout was styled differently than within .modal
// (modal was outside .homeLayout)
// It was also used to display:none the home screen when modal appears.
function BernieHomeLayout(props) {
  return (
    <div className="homeLayout">
      {/* The wrapping element below distinguishes the photo-plus-buttonGroupComponents from disclaimer.*/}
      <div className="app">
        <BernieContributeBanner />
        <BernieAppHeader />
        <div className="app_body">
          <BernieAppHero {...props} />
          <BernieAppBusiness>
            <BernieAppPod className="section_share">
              <ShareButtonGroup {...props} />
            </BernieAppPod>
            <BernieAppPod className="section_photo featured">
              <ImportButtonGroup {...props} />
            </BernieAppPod>
            <BernieAppPod className="section_design">
              <EditBrushButtonGroup {...props} />
              <EditSizeButtonGroup {...props} />
              <EditDesignButtonGroup {...props} />
            </BernieAppPod>
          </BernieAppBusiness>
        </div>
      </div>
      <BernieDisclaimer />
    </div>
  );
}

export default BernieHomeLayout;
