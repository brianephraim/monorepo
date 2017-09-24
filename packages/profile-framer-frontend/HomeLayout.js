import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { generateGiantSquareDetails } from '@defualt/responsive';
import { generateCompositeImgSrcUrl } from './compositeImage';
import ButtonGroup, {
  EditDesignButtonGroup,
  EditSizeButtonGroup,
  EditBrushButtonGroup,
  ShareButtonGroup,
  ImportButtonGroup,
} from './buttonGroups';
import ancestorConstantsHoc from './ancestorConstantsHoc';

import Disclaimer from './Disclaimer';
import HomeLayoutHeader from './HomeLayoutHeader';

import styleConstants from './style-constants';

import {
  ResponsiveHOC,
  ResponsiveReduxMasterHOC,
  ConnectResponsiveStatusesDictHOC,
  appConnect,
} from './nameSpacedResponsive';

const StyledHomeLayout = styled.div`position: relative;`;

const StyledTopBanner = ConnectResponsiveStatusesDictHOC(styled.div`
  text-align: center;
  @media (min-width: 1160px) {
    position: absolute;
    width: 100%;
    padding-top: ${styleConstants.appPad}em;
    ${props => {
      if (props.responsiveStatusesDict.homeResponsive.windowVerticalTooSmall) {
        return `
          padding-top:0;
          position:static;
        `;
      }
      return '';
    }};
  }
`);

const StyledTopBannerLink = styled.a`
  padding: ${styleConstants.appPad / 2}em;
  border: ${styleConstants.appPad / 2}em solid ${styleConstants.colors.red};
  display: inline-block;
  text-align: center;
  color: ${styleConstants.colors.red};
  text-decoration: none;
  font-weight: bold;
`;

let ContributeBanner = props => {
  return (
    <StyledTopBanner className="topBanner">
      <StyledTopBannerLink
        className="topBanner_link"
        href={props.constants.topBanner.href}
      >
        {props.constants.topBanner.text}&nbsp;{'>>'}
      </StyledTopBannerLink>
    </StyledTopBanner>
  );
};
ContributeBanner.propTypes = {
  constants: PropTypes.object.isRequired,
};
ContributeBanner = ancestorConstantsHoc(ContributeBanner);

const StyledSelfieFrame = ConnectResponsiveStatusesDictHOC(styled.div`
  background: ${styleConstants.colors.white};
  padding: ${styleConstants.appPad}em ${styleConstants.appPad}em
    ${styleConstants.appPad}em ${styleConstants.appPad}em;
  ${props => {
    if (props.responsiveStatusesDict.homeResponsive.noFloat) {
      return `
        margin: 0 auto;
        padding:${styleConstants.appPad}em;
      `;
    }
    return '';
  }} box-sizing:border-box;
`);
function AppMainSelfieFrame(props) {
  const style = props.style ? props.style : {
    width:'300px',
    height:'300px',

  };
  return (
    <StyledSelfieFrame
      style={style}
      className="app_body_leftPillar_selfieFrame js_mainSelfieFrame"
      // WTF is innerRef https://github.com/styled-components/styled-components/issues/102
      // use instead of ref when adding ref to component affected by styled-components
      innerRef={props.responsiveRef}
    >
      {props.children}
    </StyledSelfieFrame>
  );
}
AppMainSelfieFrame.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  responsiveRef: PropTypes.func.isRequired,
};
AppMainSelfieFrame.defaultProps = {
  style: null,
};

const AppMainSelfieFrameResponsive = ResponsiveHOC(AppMainSelfieFrame, {
  masterName: 'homeResponsive',
  turns: [
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
  ],
});

const StyledInstructions = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  margin: ${styleConstants.appPad * -1.5}em 0 0 0;
  left: 0;
`;
const StyledSelfie = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  box-shadow: 0 0 .25em rgba(0, 0, 0, .75);
`;
const StyledLeftPillar = ConnectResponsiveStatusesDictHOC(styled.div`
  ${styleConstants.mixins.leftPillar()} position: relative;
  ${props => {
    if (props.responsiveStatusesDict.homeResponsive.noFloat) {
      return `
        float:none;
      `;
    }
    return '';
  }};
`);
let AppHero = class extends Component {
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
    return (
      <StyledLeftPillar className="app_body_leftPillar">
        <AppMainSelfieFrameResponsive>
          <StyledInstructions className="app_body_leftPillar_selfieFrame_instructions ">
            <span className="selfieFrame_instructions_text">
              Right click to save{this.state.measurement}
            </span>
          </StyledInstructions>
          <StyledSelfie
            className="app_body_leftPillar_selfieFrame_selfie"
            src={this.props.imSrc}
            alt={this.props.constants.heroImageAltText}
          />
        </AppMainSelfieFrameResponsive>
      </StyledLeftPillar>
    );
  }
};

AppHero.propTypes = {
  imSrc: PropTypes.string.isRequired,
  constants: PropTypes.object.isRequired,
};

AppHero = ancestorConstantsHoc(
  appConnect((appState /* , { params }*/) => {
    return {
      imSrc: appState && appState.compositeImageData && appState.compositeImageData.compositeImageUrl || '/images/mock-selfie.png',
          // ? generateCompositeImgSrcUrl(appState.compositeImageData)
          // : '/images/mock-selfie.png',
      // toBeAssigned: getDetailsOfToBeAssigned(state),
    };
  }, {})(AppHero)
);

const StyledRightPillar = ConnectResponsiveStatusesDictHOC(styled.div`
  ${styleConstants.mixins.rightPillar()}
  padding-top:${styleConstants.appPad}em;
  ${props => {
    if (props.responsiveStatusesDict.homeResponsive.noFloat) {
      return `
        margin-left:${styleConstants.appPad}em;
        position: relative;
      `;
    }
    return '';
  }}
`);
let AppBusiness = props => {
  return (
    <StyledRightPillar
      className="app_body_rightPillar"
      innerRef={props.responsiveRef}
    >
      {props.children}
    </StyledRightPillar>
  );
};
AppBusiness.propTypes = {
  responsiveRef: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

AppBusiness = ResponsiveHOC(AppBusiness, {
  masterName: 'homeResponsive',
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
  box-sizing: border-box;
  width: 33.3333%;
  float: left;
  padding-right: ${styleConstants.appPad}em;
  ${props => {
    let toReturn = '';
    if (props.section === 'share') {
      toReturn += 'float:right;';
      if (props.responsiveStatusesDict.homeResponsive.singleCol) {
        toReturn += 'float: none;';
      }
    } else if (props.section === 'photo') {
      toReturn += 'float:left;';
      if (props.responsiveStatusesDict.homeResponsive.doubleCol) {
        toReturn += 'float: none;';
      }
    }
    return toReturn;
  }} ${props => {
      if (props.responsiveStatusesDict.homeResponsive.doubleCol) {
        return `
        width:50%;
      `;
      }
      return '';
    }} ${props => {
      let toReturn = '';
      if (props.responsiveStatusesDict.homeResponsive.singleCol) {
        toReturn += `
        float:none;
        width:auto;
      `;
        if (props.responsiveStatusesDict.homeResponsive.noFloat) {
          toReturn += `
          float:left;
          width:33.3333%;
        `;
        }
      }
      return toReturn;
    }};
`);

const StyledApp = ConnectResponsiveStatusesDictHOC(styled.div`
  z-index: 2;
  position: relative;
  box-sizing: border-box;

  ${props => {
    if (props.responsiveStatusesDict.homeResponsive.singleCol) {
      return `
        padding-bottom:${styleConstants.appPad}em;
      `;
    }
    return '';
  }};
`);

const StyledAppBody = styled.div`
  ${styleConstants.mixins.clearfix()}
  background:${styleConstants.colors.white};
`;

// This component exists as a container to distingsh from the modals outside this container.
// This was used for descendant selectors.
// For instance, .someButton within .homeLayout was styled differently than within .modal
// (modal was outside .homeLayout)
// It was also used to display:none the home screen when modal appears.
function HomeLayout(props) {
  const singleCol = (
    props.responsiveStatusesDict.homeResponsive &&
    props.responsiveStatusesDict.homeResponsive &&
    props.responsiveStatusesDict.homeResponsive.singleCol
  );
  return (
    <StyledHomeLayout className="homeLayout">
      {/* The wrapping element below distinguishes the photo-plus-buttonGroupComponents from disclaimer.*/}
      <StyledApp className="app">
        <ContributeBanner />
        <HomeLayoutHeader />
        <StyledAppBody className="app_body">
          <AppHero {...props} />
          <AppBusiness section="design">
            {
              singleCol && (
                <div>
                  <StyledSection section="share">
                    <ButtonGroup
                      isSingleButton
                      urlFragment='share'
                      themex='microSubsection'
                      shortHeadline='share'
                      icon='share'
                    />
                  </StyledSection>
                  <StyledSection section="photo" featured>

                    <ButtonGroup
                      isSingleButton
                      urlFragment='import'
                      themex='microSubsection'
                      shortHeadline='import'
                      icon='photo_camera'
                    />
                    
                  </StyledSection>
                  <StyledSection section="design">
                    <ButtonGroup
                      isSingleButton
                      headerButtonActionType='CROP'
                      themex='microSubsection'
                      shortHeadline='edit'
                      icon='brush'
                    />
                  </StyledSection>
                </div>
              )
            }
            {
              !singleCol && (
                <div>
                  <StyledSection section="share">
                    <ShareButtonGroup section="share" {...props} />
                  </StyledSection>
                  <StyledSection section="photo" featured>
                    <ImportButtonGroup section="photo" {...props} />
                  </StyledSection>
                  <StyledSection section="design">
                    <EditSizeButtonGroup section="design" {...props} />
                    <EditDesignButtonGroup
                      section="design"
                      layoutVariation="vertical"
                      {...props}
                    />
                  </StyledSection>
                </div>
              )
            }
          </AppBusiness>
        </StyledAppBody>
      </StyledApp>
      <Disclaimer />
    </StyledHomeLayout>
  );
}


export default ResponsiveReduxMasterHOC(appConnect((appState) => {
  return {
    responsiveStatusesDict: appState.responsiveStatusesDict
  };
})(HomeLayout), 'homeResponsive');
// export default HomeLayout;
