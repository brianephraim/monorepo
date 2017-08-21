import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ResponsiveHOC, {
  generateGiantSquareDetails, ResponsiveListener
} from '@defualt/responsive';
import {generateCompositeImgSrcUrl} from './compositeImage';

import {
  EditDesignButtonGroup,
  EditSizeButtonGroup,
  EditBrushButtonGroup,
  ShareButtonGroup,
  ImportButtonGroup,
} from './buttonGroups';

import BernieDisclaimer from './Disclaimer';
import styled from 'styled-components';
import styleConstants from './style-constants';

const Styled_HomeLayout = styled.div`
  position: relative;
`;

const ConnectResponsiveStatusesDictHOC = connect(( state /* , { params }*/) => {
  return {
    responsiveStatusesDict: state.bernie.responsiveStatusesDict,
  };
});

const Styled_Left_Pillar = ConnectResponsiveStatusesDictHOC(styled.div`
  ${styleConstants.mixins.leftPiller()}
  ${props => {
    return props.responsiveStatusesDict.windowVerticalTooSmall ? 'float: none;' : '';
  }}
  @media (max-width: 700px){
    float:none;
    text-align:center;
  }
`);

const Styled_Branding = ConnectResponsiveStatusesDictHOC(styled.div`
  height:${styleConstants.headerTopHeight}em;
  ${props => {
    return props.responsiveStatusesDict.windowVerticalTooSmall ? 'height: auto;' : '';
  }}
`);

const Styled_Branding_Title = ConnectResponsiveStatusesDictHOC(styled.div`
  font-size: ${styleConstants.appPad * 2}em;
  ${props => {
    return props.responsiveStatusesDict.windowVerticalTooSmall ? 'text-align: center;' : '';
  }}
`);

const Styled_Branding_Subtitle = ConnectResponsiveStatusesDictHOC(styled.div`
  font-size: ${styleConstants.appPad * 1.5}em;
  ${props => {
    return props.responsiveStatusesDict.windowVerticalTooSmall ? 'display: none;' : '';
  }}
  @media (max-width: 400px){
    font-size:1em;
    line-height:2em;  
  }
  @media (max-width: 280px){
    font-size:.75em;
  }
`);

const Styled_Social_Row = ConnectResponsiveStatusesDictHOC(styled.div`
  ${props => {
    return styleConstants.mixins.socialRow_left(props.responsiveStatusesDict.windowVerticalTooSmall);
  }}
`);
const Styled_Social_Widget = ConnectResponsiveStatusesDictHOC(styled.div`
  ${props => {
    console.log(styleConstants.mixins.socialWidget_left(props.responsiveStatusesDict.windowVerticalTooSmall));
    return styleConstants.mixins.socialWidget_left(props.responsiveStatusesDict.windowVerticalTooSmall);
  }}
  
`);

/*
&_leftPillar{
  @extend %leftPillar;
  x.responsive_windowVerticalTooSmall &{
  x  float: none;
  x}
  x@media (max-width: 700px){
  x  float:none;
  x  text-align:center;
  x}
  x&_branding{
  x  height:$headerTopHeight;
  x  .responsive_windowVerticalTooSmall &{
  x    height:auto;
  x  }
  x  &_title{
  x    font-size:$appPad*2;
  x    .responsive_windowVerticalTooSmall &{
  x      text-align:center;
  x    }
  x  }
  x  &_subtitle{
  x    font-size:$appPad*1.5;
  x    .responsive_windowVerticalTooSmall &{
  x      display: none;
  x    }
  x    @media (max-width: 400px){
  x      font-size:1em;
  x      line-height:2em;  
  x    }
  x    @media (max-width: 280px){
  x      font-size:.75em;
  x    }
  x  }
  }

  &_socialRow{
    @include socialRow_left;
  }
}
*/


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
      <Styled_Left_Pillar className="app_header_leftPillar leftPillar">
        <Styled_Branding className="app_header_leftPillar_branding branding">
          <Styled_Branding_Title className="app_header_leftPillar_branding_title branding_title">
            BernieSelfie.com
          </Styled_Branding_Title>
          <div className="app_header_leftPillar_branding_subtitle branding_subtitle">
            Support Bernie with your picture
          </div>
        </Styled_Branding>
        <Styled_Social_Row className="app_header_leftPillar_socialRow socialRow">
          <Styled_Social_Widget className="app_header_leftPillar_socialRow_socialWidget socialWidget">
            <a
              className="twitter-share-button"
              href="https://twitter.com/intent/tweet?url=xXxXxXxXxXxXxXxXxXxXxXxX&via=bernieselfie&hashtags=BernieSanders%2Cfeelthebern%2Cbernieselfie&related=BernieSanders"
            >
              Tweet
            </a>
          </Styled_Social_Widget>
          <Styled_Social_Widget
            className="fb-like app_header_leftPillar_socialRow_socialWidget socialWidget"
            data-share="true"
            data-width="450"
            data-layout="button_count"
            data-show-faces="true"
          />

          <Styled_Social_Widget className="app_header_leftPillar_socialRow_socialWidget socialWidget">
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
          </Styled_Social_Widget>
        </Styled_Social_Row>
      </Styled_Left_Pillar>
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
    <Styled_HomeLayout className="homeLayout">
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
    </Styled_HomeLayout>
  );
}

export default BernieHomeLayout;
