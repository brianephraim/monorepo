import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styleConstants from './style-constants';
import { ConnectResponsiveStatusesDictHOC } from './nameSpacedResponsive';
import ancestorConstantsHoc from './ancestorConstantsHoc';
import shareUrlHoc from './shareUrlHoc';

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
const StyledSocialWidgetRight = ConnectResponsiveStatusesDictHOC(styled.div`
  ${styleConstants.mixins.socialWidget_rightBottom()} ${styleConstants.mixins.socialWidgetClass()};
`);
const StyledSocialRowRight = ConnectResponsiveStatusesDictHOC(styled.div`
  ${styleConstants.mixins.socialRow_right()} ${styleConstants.mixins.socialRowClass()};
`);
const StyledHeader = ConnectResponsiveStatusesDictHOC(styled.div`
  padding: ${styleConstants.appPad}em;
`);

class AppHeader extends Component {
  componentDidMount(){
    if(typeof window !== 'undefined') {
      // TWITTER
      window.twttr = (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
          if (d.getElementById(id)) return t;
          js = d.createElement(s);
          js.id = id;
          js.src = "https://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);
         
          t._e = [];
          t.ready = function(f) {
            t._e.push(f);
          };
         
          return t;
        }(document, "script", "twitter-wjs"));

      // PINTREST
      window.pntrst = (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.pntrst || {};
          if (d.getElementById(id)) return t;
          js = d.createElement(s);
          js.id = id;
          js.src = "//assets.pinterest.com/js/pinit.js";
          fjs.parentNode.insertBefore(js, fjs);
         
          t._e = [];
          t.ready = function(f) {
            t._e.push(f);
          };
         
          return t;
        }(document, "script", "pintrest-js"));

      // GOOGLE ANALYTICS
      if (window.location.host.indexOf('bernieselfie.com') !== -1){
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-64815100-1', 'auto');
        ga('send', 'pageview');
      }

    }
  }
  render(){
    const encodedShareUrl = encodeURIComponent(this.props.shareUrl);
    const tweetUrl = `https://twitter.com/intent/tweet?url=${encodedShareUrl}&via=bernieselfie&hashtags=BernieSanders%2Cfeelthebern%2Cbernieselfie&related=BernieSanders`;
    const pinUrl = `//www.pinterest.com/pin/create/button/?url=${encodedShareUrl}&description=${encodeURIComponent('Use BernieSelfie.com support Bernie Sanders to your friends and followers')}`;
    return (
      <StyledHeader className="app_header">
        <StyledLeftPillar className="app_header_leftPillar">
          <StyledBranding className="app_header_leftPillar_branding">
            <StyledBrandingTitle className="app_header_leftPillar_branding_title">
              {this.props.constants.appTitle}
            </StyledBrandingTitle>
            <StyledBrandingSubtitle className="app_header_leftPillar_branding_subtitle">
              {this.props.constants.appSubTitle}
            </StyledBrandingSubtitle>
          </StyledBranding>
          <StyledSocialRow className="app_header_leftPillar_socialRow">
            <StyledSocialWidget className="app_header_leftPillar_socialRow_socialWidget">
              <a className="twitter-share-button" href={tweetUrl}>
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
                href={pinUrl}
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
            <div className="app_header_rightPillar_fbLikePageWrap">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/pages/BernieSelfiecom/924351914278246"
                data-width="250"
                data-small-header="true"
                data-adapt-container-width="false"
                data-hide-cover="false"
                data-show-facepile="false"
                data-show-posts="false"
              >
                <div className="fb-xfbml-parse-ignore">
                  <blockquote cite="https://www.facebook.com/pages/BernieSelfiecom/924351914278246">
                    <a href="https://www.facebook.com/pages/BernieSelfiecom/924351914278246">BernieSelfie.com</a>
                  </blockquote>
                </div>
              </div>
 
              {/* <StyledFbLikePageWidget
                className="app_header_rightPillar_fbLikePageWrap_socialWidget"
                src="/images/mock-fb-page.png"
                alt="Facebook Like badge"
              /> */}
            </div>
          </StyledFbLikePageWrap>
          <StyledSocialRowRight className="app_header_rightPillar_socialRow">
            <StyledSocialWidgetRight>
              <a style={{fontSize:'9px'}} className="twitter-follow-button" href="https://twitter.com/bernieselfie">Follow @bernieselfie</a>
            </StyledSocialWidgetRight>
            <StyledSocialWidgetRight>
              <a data-pin-do="buttonFollow" href="https://www.pinterest.com/bernieselfie/">bernieselfie.com</a>
            </StyledSocialWidgetRight>
          </StyledSocialRowRight>
          {/*
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
          */}
        </StyledRightPillar>
      </StyledHeader>
    );
  }
}
AppHeader.propTypes = {
  shareUrl: PropTypes.string.isRequired,
  constants: PropTypes.object.isRequired,
};

export default shareUrlHoc(ancestorConstantsHoc(AppHeader));
