import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ResponsiveHOC, {
  generateGiantSquareDetails
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
import HomeLayoutHeader from './HomeLayoutHeader';

import styled from 'styled-components';
import styleConstants from './style-constants';
import ConnectResponsiveStatusesDictHOC from './ConnectResponsiveStatusesDictHOC';

const StyledHomeLayout = styled.div`
  position: relative;
`;


const StyledTopBanner = ConnectResponsiveStatusesDictHOC(styled.div`
  text-align:center;
  @media (min-width: 1160px){
    position:absolute;
    width:100%;
    padding-top:${styleConstants.appPad}em;
    ${props => {
      if (props.responsiveStatusesDict.windowVerticalTooSmall) {
        return `
          padding-top:0;
          position:static;
        `;
      }
      return '';
    }}
  }
`);

const StyledTopBannerLink = ConnectResponsiveStatusesDictHOC(styled.a`
  padding: ${styleConstants.appPad/2}em;
  border: ${styleConstants.appPad/2}em solid ${styleConstants.colors.red};
  display: inline-block;;
  text-align:center;
  color:${styleConstants.colors.red};
  text-decoration: none;
  font-weight:bold;
`);

function BernieContributeBanner() {
  return (
    <StyledTopBanner className="topBanner">
      <StyledTopBannerLink className="topBanner_link" href="http://www.berniesanders.com/">
        Contribute to Bernie at BernieSanders.comx&nbsp;{'>>'}
      </StyledTopBannerLink>
    </StyledTopBanner>
  );
}

const StyledSelfieFrame = ConnectResponsiveStatusesDictHOC(styled.div`
  background:${styleConstants.colors.white};
  padding:${styleConstants.appPad}em ${styleConstants.appPad}em ${styleConstants.appPad}em ${styleConstants.appPad}em;
  ${props => {
    if (props.responsiveStatusesDict.noFloat) {
      return `
        margin: 0 auto;
        padding:${styleConstants.appPad}em;
      `;
    }
    return '';
  }}
  box-sizing:border-box;
`);
function BernieAppMainSelfieFrame(props) {
  return (
    <StyledSelfieFrame
      style={props.style}
      className="app_body_leftPillar_selfieFrame js_mainSelfieFrame"
      // WTF is innerRef https://github.com/styled-components/styled-components/issues/102
      // use instead of ref when adding ref to component affected by styled-components
      innerRef={props.responsiveRef}
    >
      {props.children}
    </StyledSelfieFrame>
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


const StyledInstructions = ConnectResponsiveStatusesDictHOC(styled.div`
  text-align: center;
  position:absolute;
  width:100%;
  margin:${styleConstants.appPad * -1.5}em 0 0 0;
  left:0;
`);
const StyledSelfie = ConnectResponsiveStatusesDictHOC(styled.img`
  display:block;
  width:100%;
  height:100%;
  margin:0 auto;
  box-shadow: 0 0 .25em rgba(0,0,0,.75);
`);
const StyledLeftPillar = ConnectResponsiveStatusesDictHOC(styled.div`
  ${styleConstants.mixins.leftPillar()}
  position: relative;
  ${props => {
    if (props.responsiveStatusesDict.noFloat) {
      return `
        float:none;
      `;
    }
    return '';
  }}
`);
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
      <StyledLeftPillar className="app_body_leftPillar">
        <BernieAppMainSelfieFrameResponsive turns={turns} masterName="bernie">
          <StyledInstructions className="app_body_leftPillar_selfieFrame_instructions ">
            <span className="selfieFrame_instructions_text">
              Right click to save{this.state.measurement}
            </span>
          </StyledInstructions>
          <StyledSelfie
            className="app_body_leftPillar_selfieFrame_selfie"
            src={this.props.imSrc}
            alt="My BernieSelfie"
          />
        </BernieAppMainSelfieFrameResponsive>
      </StyledLeftPillar>
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

const StyledRightPillar = ConnectResponsiveStatusesDictHOC(styled.div`
  ${styleConstants.mixins.rightPillar()}
  padding-top:${styleConstants.appPad}em;
  ${props => {
    if (props.responsiveStatusesDict.noFloat) {
      return `
        margin-left:${styleConstants.appPad}em;
        position: relative;
      `;
    }
    return '';
  }}
`);
let BernieAppBusiness = props => {
  return (
    <StyledRightPillar className="app_body_rightPillar" innerRef={props.responsiveRef}>
      {props.children}
    </StyledRightPillar>
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

const StyledSection = ConnectResponsiveStatusesDictHOC(styled.div`
  box-sizing:border-box;
  width:33.3333%;
  float:left;
  padding-right:${styleConstants.appPad}em;
  ${props => {
    let toReturn = '';
    if (props.section === 'share') {
      toReturn += 'float:right;';
      if (props.responsiveStatusesDict.singleCol) {
        toReturn += 'float: none;';
      }
    } else if (props.section === 'photo') {
      toReturn += 'float:left;';
      if (props.responsiveStatusesDict.doubleCol) {
        toReturn += 'float: none;';
      }
    }
    return toReturn;
  }}
  
  ${props => {
    if (props.responsiveStatusesDict.doubleCol) {
      return `
        width:50%;
      `;
    }
    return '';
  }}
  ${props => {
    let toReturn = '';
    if (props.responsiveStatusesDict.singleCol) {
      toReturn += `
        float:none;
        width:auto;
      `;
      if (props.responsiveStatusesDict.noFloat) {
        toReturn += `
          float:left;
          width:33.3333%;
        `;
      }
    }
    return toReturn;
  }}
`);

const StyledApp = ConnectResponsiveStatusesDictHOC(styled.div`
  z-index:2;
  position:relative;
  box-sizing:border-box;

  ${props => {
    if (props.responsiveStatusesDict.singleCol) {
      return `
        padding-bottom:${styleConstants.appPad}em;
      `;
    }
    return '';
  }}
`);

const StyledAppBody = ConnectResponsiveStatusesDictHOC(styled.div`
  ${styleConstants.mixins.clearfix()}
  background:${styleConstants.colors.white};
`);

// This component exists as a container to distingsh from the modals outside this container.
// This was used for descendant selectors.
// For instance, .someButton within .homeLayout was styled differently than within .modal
// (modal was outside .homeLayout)
// It was also used to display:none the home screen when modal appears.
function BernieHomeLayout(props) {
  return (
    <StyledHomeLayout className="homeLayout">
      {/* The wrapping element below distinguishes the photo-plus-buttonGroupComponents from disclaimer.*/}
      <StyledApp className="app">
        <BernieContributeBanner />
        <HomeLayoutHeader />
        <StyledAppBody className="app_body">
          <BernieAppHero {...props} />
          <BernieAppBusiness>
            <StyledSection section="share">
              <ShareButtonGroup section="share" {...props} />
            </StyledSection>
            <StyledSection section="photo" featured>
              <ImportButtonGroup section="photo" {...props} />
            </StyledSection>
            <StyledSection section="design">
              <EditBrushButtonGroup section="design" {...props} />
              <EditSizeButtonGroup section="design" {...props} />
              <EditDesignButtonGroup section="design" layoutVariation="vertical" {...props} />
            </StyledSection>
          </BernieAppBusiness>
        </StyledAppBody>
      </StyledApp>
      <BernieDisclaimer />
    </StyledHomeLayout>
  );
}

export default BernieHomeLayout;
