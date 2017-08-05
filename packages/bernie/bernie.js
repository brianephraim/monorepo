/* eslint-disable react/no-multi-comp */
/* eslint-disable class-methods-use-this */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResponsiveHOC, {
  ResponsiveMaster,
  generateGiantSquareDetails,
} from '@defualt/responsive';
import makeBinder from '@defualt/make-binder';
import { Route } from 'react-router-dom';
import {
  buttonGroupComponents,
  buttonGroupComponentsRegexArrayString,
  EditDesignButtonGroup,
  EditSizeButtonGroup,
  EditBrushButtonGroup,
  ShareButtonGroup,
  ImportButtonGroup,
} from './buttonGroups';
import CropperScreen from './CropperScreen';
import ImagePickerFacebook from './ImagePickerFacebook';
import ImagePickerTemplate from './ImagePickerTemplate';
import { standardModesRegexArrayString, formUrl } from './deriveUrlInfo';
import { getNormalizedImageInfo } from './s3';
import './app.scss';

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

class BernieAppHero extends Component {
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
    // http://www.bernieselfie.com/image/h4/dude-with-hat1500922227089_1780_1780_-123_-555.jpg
    // http://www.bernieselfie.com/image/fwilbqgsskzngv0cktwi/dude-with-hat1500922227089_1780_1780_-123_-555.jpg
    // http://localhost:3000      /image/dude-with-hat1500922227089/qsuqge5jdqjfjhvg4r2z_1780_1780_446_-938.jpg
    let imSrc = '/images/mock-selfie.png';
    if (this.props.compositeImageData) {
      const imgData = this.props.compositeImageData;
      imSrc = `/image/${imgData.foreground.srcKey}/${imgData.background
        .srcKey}_${imgData.foreground.width}_${imgData.foreground
        .height}_${imgData.foreground.x}_${imgData.foreground.y}.jpg`;
    }
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
            src={imSrc}
            alt="My BernieSelfie"
          />
        </BernieAppMainSelfieFrameResponsive>
      </div>
    );
  }
}
BernieAppHero.propTypes = {
  compositeImageData: PropTypes.object.isRequired,
};
BernieAppHero.defaultProps = {
  compositeImageData: null,
};

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
    },
  ],
});

class BernieAppPod extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className={`app_body_rightPillar_section ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}
BernieAppPod.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
BernieAppPod.defaultProps = {
  className: '',
};

class CompositeImage {
  constructor({ params, data }) {
    if (params) {
      this.data = this.parseCompositeImageDataFromRouteParams(params);
    } else if (data) {
      this.data = data;
    }
  }
  refresh(pathAssignments) {
    if (!Array.isArray(pathAssignments)) {
      pathAssignments = [pathAssignments];
    }
    const compositeImageData = pathAssignments.reduce((accum, assignment) => {
      const path = assignment.path;
      const pathSplit = path.split('.');
      const val = assignment.val;
      accum.background = accum.background || { ...this.data.background };
      accum.foreground = accum.foreground || { ...this.data.foreground };
      accum[pathSplit[0]][pathSplit[1]] = val;
      return accum;
    }, {});
    return new CompositeImage({ data: compositeImageData });
  }
  generateUrl({ rootPath, urlAppend }) {
    const url = `${rootPath}/${formUrl(this.data)}${urlAppend}`;
    return url;
  }
  parseCompositeImageDataFromRouteParams(params, overrides) {
    const placeholder = {
      fgX: 142,
      fgY: 98,
      fgW: 305,
      fgH: 305,
      bgW: 1200,
      bgH: 1200,
      bgSrcKey: 'zephyr1476401787491',
      fgSrcKey: 'h3',
    };
    const paramsToUse = {
      ...placeholder,
      ...params,
      ...overrides,
    };
    const compositeImageData = {
      foreground: {
        x: +paramsToUse.fgX,
        y: +paramsToUse.fgY,
        width: +paramsToUse.fgW,
        height: +paramsToUse.fgH,
        src: `http://s3-us-west-1.amazonaws.com/bernieapp/decorations/${paramsToUse.fgSrcKey}.png`,
        srcKey: paramsToUse.fgSrcKey,
      },
      background: {
        width: +paramsToUse.bgW,
        height: +paramsToUse.bgH,
        src: `http://s3-us-west-1.amazonaws.com/bernieapp/selfies/${paramsToUse.bgSrcKey}.png`,
        srcKey: paramsToUse.bgSrcKey,
      },
    };
    return compositeImageData;
  }
}

class Bernie extends Component {
  constructor() {
    super();
    this.state = {};
    makeBinder(this, 'handleBackroundImageSelection');
    makeBinder(this, 'handleForegroundImageSelection');
  }
  handleBackroundImageSelection(compositeImage, rootPath, imgSrcObj) {
    // bs.loader.load
    const imgSrc = imgSrcObj.url || imgSrcObj.src;
    getNormalizedImageInfo(imgSrc).then(response => {
      const url = compositeImage
      .refresh({
        path: 'background.srcKey',
        val: response.srcKey,
      })
      .generateUrl({
        rootPath,
        urlAppend: '/crop',
      });
      this.props.history.push(url);
    });
  }
  handleForegroundImageSelection(compositeImage, rootPath, imgSrcObj) {
    this.props.history.push(
      compositeImage
        .refresh({
          path: 'foreground.srcKey',
          val: imgSrcObj.srcKey,
        })
        .generateUrl({
          rootPath,
          urlAppend: '/crop',
        })
    );
  }
  render() {
    const geoRouting =
      ':fgX([^/|^_]*)_:fgY([^/|^_]*)_:fgW([^/|^_]*)_:fgH([^/|^_]*)_:bgW([^/|^_]*)_:bgH([^/]*)';
    // let compositeImageData = {
    //   foreground: {
    //     x:0,
    //     y:0,
    //     width:400,
    //     height:400,
    //     src: 'http://s3-us-west-1.amazonaws.com/bernieapp/decorations/h3.png'
    //   },
    //   background: {
    //     src: `http://s3-us-west-1.amazonaws.com/bernieapp/selfies/zephyr1476401787491.png`
    //   }
    // };

    const rootUrl = this.props.match.url;
    const homeLayoutPaths = [
      this.props.match.url,
      `${this.props.match.url}/ut/:bgSrcKey/${geoRouting}/:fgSrcKey`,
      `${this.props.match
        .url}/:fgSrcKey(${standardModesRegexArrayString})/:bgSrcKey/${geoRouting}`,
    ];

    function statelessWrapper(props) {
      return props.children;
    }

    return (
      <ResponsiveMaster name="bernie">
        {/*
          The wrapping element below exists because its el had a class of 'bodyInner'
          and this was affected by:
          `var modalManager = bs.setupNewModalManager($('.bodyInner'));``
          This is a refactor remnant and we should consider removing.
        */}
        <div className="homeScreen">
          {homeLayoutPaths.map((path, i) => {
            const key = `${i}-statelessWrapper`;
            return (
              <statelessWrapper key={key}>
                <Route
                  path={path}
                  exact
                  render={props => {
                    const compositeImage = new CompositeImage({
                      params: props.match.params,
                    });
                    const compositeImageData = compositeImage.data;
                    return (
                      <BernieHomeLayout
                        {...this.props}
                        compositeImageData={compositeImageData}
                        onUploadSuccess={this.handleBackroundImageSelection(
                          compositeImage,
                          this.props.match.url
                        )}
                      />
                    );
                  }}
                />
                <Route
                  path={`${path}/crop`}
                  render={props => {
                    const compositeImage = new CompositeImage({
                      params: props.match.params,
                    });
                    const compositeImageData = compositeImage.data;
                    return (
                      <CropperScreen
                        foreground={compositeImageData.foreground}
                        background={compositeImageData.background}
                        rootUrl={rootUrl}
                      />
                    );
                  }}
                />
                <Route
                  path={`${path}/import-photo-from-facebook`}
                  render={props => {
                    const compositeImage = new CompositeImage({
                      params: props.match.params,
                    });
                    return (
                      <ImagePickerFacebook
                        onClick={this.handleBackroundImageSelection(
                          compositeImage,
                          this.props.match.url
                        )}
                      />
                    );
                  }}
                />
                <Route
                  path={`${path}/select-template`}
                  render={props => {
                    const compositeImage = new CompositeImage({
                      params: props.match.params,
                    });
                    return (
                      <ImagePickerTemplate
                        onClick={this.handleForegroundImageSelection(
                          compositeImage,
                          this.props.match.url
                        )}
                        {...this.props}
                      />
                    );
                  }}
                />
                <Route
                  path={`${path}/:foo(${buttonGroupComponentsRegexArrayString})`}
                  render={props => {
                    const Comp = buttonGroupComponents[props.match.params.foo];
                    const compositeImage = new CompositeImage({
                      params: props.match.params,
                    });
                    const compositeImageData = compositeImage.data;
                    return (
                      <Comp
                        isModal
                        {...props}
                        compositeImageData={compositeImageData}
                      />
                    );
                  }}
                />
              </statelessWrapper>
            );
          })}
        </div>
      </ResponsiveMaster>
    );
  }
}

Bernie.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

// const mapStateToProps = (state, props) => {
//   return {
//     assignedUser: state.users.idDict[props.assignedUserId],
//   };
// };

// ToDoItem = withRouter(connect(mapStateToProps)(ToDoItem));

export default Bernie;
