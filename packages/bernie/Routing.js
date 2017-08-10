/* eslint-disable react/no-multi-comp */
/* eslint-disable class-methods-use-this */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBinder from '@defualt/make-binder';
import { Route } from 'react-router-dom';
import {
  buttonGroupComponents,
  buttonGroupComponentsRegexArrayString,
} from './buttonGroups';
import CropperScreen from './CropperScreen';
import ImagePickerFacebook from './ImagePickerFacebook';
import ImagePickerTemplate from './ImagePickerTemplate';
import { standardModesRegexArrayString } from './deriveUrlInfo';
import { getNormalizedImageInfo } from './s3';
import { setterActionCreator as compositeImageSetterActionCreator, paramsIntoCompositeImage } from './compositeImage';
import BernieHomeLayout from './HomeLayout'
import './app.scss';



let CompositeImageConnectionSetter = class extends Component {
  componentWillMount() {
    this.props.setCompositeImageData(this.props.compositeImageData);
  }
  render(){
    return this.props.children;
  }
}
CompositeImageConnectionSetter.propTypes = {
  setCompositeImageData: PropTypes.func.isRequired,
  compositeImageData: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
CompositeImageConnectionSetter = connect(
  (/* state*//* , { params }*/) => {
    return {};
  },
  {
    setCompositeImageData: compositeImageSetterActionCreator,
  }
)(CompositeImageConnectionSetter);

let BernieRoute = (props) => {

  let urlEnd = props.urlEnd && props.urlEnd.indexOf(':') === -1 ? `:screen(${props.urlEnd})` : props.urlEnd;
  urlEnd = urlEnd ? `/${urlEnd}` : ''
  const path = `${props.urlStart}${urlEnd}`
  return (
    <Route
      {...props}
      path={path}
      render={(routeProps) => {
        const compositeImage = paramsIntoCompositeImage(routeProps.match.params);
        return (
          <CompositeImageConnectionSetter compositeImageData={compositeImage.data}>{props.render(routeProps, compositeImage)}</CompositeImageConnectionSetter>
        );
      }}
    />
  );
}
BernieRoute.propTypes = {
  urlStart: PropTypes.string,
  urlEnd: PropTypes.string,
  render: PropTypes.func.isRequired
};
BernieRoute.defaultProps = {
  urlStart: '',
  urlEnd: ''
};

BernieRoute = connect(
  (/* state*//* , { params }*/) => {
    return {
      // users: state.users.list.map((id) => {
      //   return state.users.idDict[id];
      // }),
      // toBeAssigned: getDetailsOfToBeAssigned(state),
    };
  },
  {
    // fetchUsers: actions1.fetchUsers,
    // fetchUsers: actions1.fetchUsers,
    setCompositeImageData: compositeImageSetterActionCreator,
    // compositeImageUpdateActionCreator,
  }
)(BernieRoute);

function statelessWrapper(props) {
  return props.children;
}


const Routing = class extends Component {
  constructor() {
    super();
    this.state = {};
    makeBinder(this, 'handleBackroundImageSelection');
    makeBinder(this, 'handleForegroundImageSelection');
  }
  handleBackroundImageSelection(rootPath, imgSrcObj) {
    // bs.loader.load
    const imgSrc = imgSrcObj.src;
    getNormalizedImageInfo(imgSrc).then(response => {
      this.props.setCompositeImageData({
        background: {
          srcKey: response.srcKey,
        },
        screen: 'crop'
      });
    });
  }
  handleForegroundImageSelection(rootPath, imgSrcObj) {
    this.props.setCompositeImageData({
      foreground: {
        srcKey: imgSrcObj.srcKey,
      },
      screen: 'crop'
    });
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

    return (
      <statelessWrapper>
        {homeLayoutPaths.map((path, i) => {
          const key = `${i}-statelessWrapper`;
          return (
            <statelessWrapper key={key}>
              <BernieRoute
                exact
                urlStart={path}
                urlEnd={''}
                render={(props, compositeImage) => {
                  return (
                    <BernieHomeLayout
                      {...this.props}
                      compositeImageData={compositeImage.data}
                      onUploadSuccess={this.handleBackroundImageSelection(
                        this.props.match.url
                      )}
                    />
                  );
                }}
                {...this.props}
              />
              <BernieRoute
                urlStart={path}
                urlEnd={'crop'}
                render={(props, compositeImage) => {
                  return (
                    <CropperScreen
                      foreground={compositeImage.data.foreground}
                      background={compositeImage.data.background}
                      rootUrl={rootUrl}
                    />
                  );
                }}
                {...this.props}
              />
              <BernieRoute
                urlStart={path}
                urlEnd={'import-photo-from-facebook'}
                render={() => {
                  return (
                    <ImagePickerFacebook
                      onClick={this.handleBackroundImageSelection(
                        this.props.match.url
                      )}
                    />
                  );
                }}
                {...this.props}
              />
              <BernieRoute
                urlStart={path}
                urlEnd={'select-template'}
                render={(props, compositeImage) => {
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
                {...this.props}
              />
              <BernieRoute
                urlStart={path}
                urlEnd={`:foo(${buttonGroupComponentsRegexArrayString})`}
                render={(props, compositeImage) => {
                  const Comp = buttonGroupComponents[props.match.params.foo];
                  return (
                    <Comp
                      {...this.props}
                      isModal
                      compositeImageData={compositeImage.data}
                    />
                  );
                }}
                {...this.props}
              />
            </statelessWrapper>
          );
        })}
      </statelessWrapper>
    );
  }
}
Routing.propTypes = {
  match: PropTypes.object.isRequired,
  setCompositeImageData: PropTypes.func.isRequired,
};

export default connect(
  ( /* state*//* , { params }*/) => {
    return {
    };
  },
  {
    setCompositeImageData: compositeImageSetterActionCreator,
  }
)(Routing);

