import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styleConstants from './style-constants';
import { ConnectResponsiveStatusesDictHOC } from './nameSpacedResponsive';
import ancestorConstantsHoc from './ancestorConstantsHoc';

const StyledLeftPillar = ConnectResponsiveStatusesDictHOC(styled.div`
  ${styleConstants.mixins.leftPillar()} ${props => {
      return props.responsiveStatusesDict.homeResponsive.windowVerticalTooSmall
        ? 'float: none;'
        : '';
    }} @media (max-width: 700px) {
    float: none;
    text-align: center;
  }
`);

const StyledBranding = ConnectResponsiveStatusesDictHOC(styled.div`
  height: ${styleConstants.headerTopHeight}em;
  ${props => {
    return props.responsiveStatusesDict.homeResponsive.windowVerticalTooSmall
      ? 'height: auto;'
      : '';
  }};
`);

const StyledBrandingTitle = ConnectResponsiveStatusesDictHOC(styled.div`
  font-family: ${styleConstants.font1};
  font-size: ${styleConstants.appPad * 2}em;
  ${props => {
    return props.responsiveStatusesDict.homeResponsive.windowVerticalTooSmall
      ? 'text-align: center;'
      : '';
  }};
`);

const StyledBrandingSubtitle = ConnectResponsiveStatusesDictHOC(styled.div`
  font-size: ${styleConstants.appPad * 1.5}em;
  ${props => {
    return props.responsiveStatusesDict.homeResponsive.windowVerticalTooSmall
      ? 'display: none;'
      : '';
  }} @media (max-width: 400px) {
    font-size: 1em;
    line-height: 2em;
  }
  @media (max-width: 280px) {
    font-size: .75em;
  }
`);

const StyledSocialRow = ConnectResponsiveStatusesDictHOC(styled.div`
  ${props => {
    return styleConstants.mixins.socialRow_left(
      props.responsiveStatusesDict.homeResponsive.windowVerticalTooSmall
    );
  }} ${styleConstants.mixins.socialRowClass()};
`);
const StyledSocialWidget = ConnectResponsiveStatusesDictHOC(styled.div`
  ${props => {
    return styleConstants.mixins.socialWidget_left(
      props.responsiveStatusesDict.homeResponsive.windowVerticalTooSmall
    );
  }} ${styleConstants.mixins.socialWidgetClass()};
`);

const StyledRightPillar = ConnectResponsiveStatusesDictHOC(styled.div`
  ${styleConstants.mixins.rightPillar()} ${props => {
      if (props.responsiveStatusesDict.homeResponsive.windowVerticalTooSmall) {
        return `
        ${styleConstants.mixins.socialAtBottom()}
        padding-bottom:0;
      `;
      }
      return '';
    }} @media (max-width: 700px) {
    padding-top: ${styleConstants.appPad}em;
    ${styleConstants.mixins.socialAtBottom()};
  }
`);

const StyledFbLikePageWrap = ConnectResponsiveStatusesDictHOC(styled.div`
  height: ${styleConstants.headerTopHeight}em;
  overflow: hidden;
  & > * {
    float: right;
  }
`);

const StyledFbLikePageWidget = ConnectResponsiveStatusesDictHOC(styled.img`
  ${styleConstants.mixins.socialWidget_rightTop()};
`);
const StyledSocialWidgetRight = ConnectResponsiveStatusesDictHOC(styled.img`
  ${styleConstants.mixins.socialWidget_rightBottom()} ${styleConstants.mixins.socialWidgetClass()};
`);
const StyledSocialRowRight = ConnectResponsiveStatusesDictHOC(styled.div`
  ${styleConstants.mixins.socialRow_right()} ${styleConstants.mixins.socialRowClass()};
`);
const StyledHeader = ConnectResponsiveStatusesDictHOC(styled.div`
  padding: ${styleConstants.appPad}em;
`);

function AppHeader(props) {
  return (
    <StyledHeader className="app_header">
      <StyledLeftPillar className="app_header_leftPillar">
        <StyledBranding className="app_header_leftPillar_branding">
          <StyledBrandingTitle className="app_header_leftPillar_branding_title">
            {props.constants.appTitle}
          </StyledBrandingTitle>
          <StyledBrandingSubtitle className="app_header_leftPillar_branding_subtitle">
            {props.constants.appSubTitle}
          </StyledBrandingSubtitle>
        </StyledBranding>
        <StyledSocialRow className="app_header_leftPillar_socialRow">
          <StyledSocialWidget className="app_header_leftPillar_socialRow_socialWidget">
            <a className="twitter-share-button" href={props.constants.tweetUrl}>
              Tweet
            </a>
          </StyledSocialWidget>
          <StyledSocialWidget
            className="fb-like app_header_leftPillar_socialRow_socialWidget"
            data-share="true"
            data-width="450"
            data-layout="button_count"
            data-show-faces="true"
          />

          <StyledSocialWidget className="app_header_leftPillar_socialRow_socialWidget">
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
          </StyledSocialWidget>
        </StyledSocialRow>
      </StyledLeftPillar>
      <StyledRightPillar className="app_header_rightPillar">
        <StyledFbLikePageWrap className="app_header_rightPillar_fbLikePageWrap">
          <StyledFbLikePageWidget
            className="app_header_rightPillar_fbLikePageWrap_socialWidget"
            src="/images/mock-fb-page.png"
            alt="Facebook Like badge"
          />
        </StyledFbLikePageWrap>
        <StyledSocialRowRight className="app_header_rightPillar_socialRow">
          <StyledSocialWidgetRight
            className="app_header_rightPillar_socialRow_socialWidget"
            src="/images/mock-fb-like.png"
            alt="Facebook Like badge"
          />
          <StyledSocialWidgetRight
            className="app_header_rightPillar_socialRow_socialWidget"
            src="/images/mock-tweet.png"
            alt="Twitter tweet badge"
          />
          <StyledSocialWidgetRight
            className="app_header_rightPillar_socialRow_socialWidget"
            src="/images/mock-pintrest.png"
            alt="Pintrest Pinit badge"
          />
        </StyledSocialRowRight>
      </StyledRightPillar>
    </StyledHeader>
  );
}
AppHeader.propTypes = {
  constants: PropTypes.object.isRequired,
};

export default ancestorConstantsHoc(AppHeader);
