/* eslint-disable react/no-multi-comp */
/* eslint-disable class-methods-use-this */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import makeBinder from '@defualt/make-binder';
import { Route, withRouter } from 'react-router-dom';
import {
  buttonGroupComponents,
  buttonGroupComponentsRegexArrayString,
} from './buttonGroups';
import CropperScreen from './CropperScreen';
import ImagePickerFacebook from './ImagePickerFacebook';
import ImagePickerTemplate from './ImagePickerTemplate';
import { standardModesRegexArrayString, formUrl } from './deriveUrlInfo';
import { getNormalizedImageInfo } from './s3';
import { setterActionCreator as compositeImageSetterActionCreator, paramsIntoCompositeImage } from './compositeImage';
import BernieHomeLayout from './HomeLayout'
import { bernieScreenComponentMap } from './state';
import './app.scss';



let CompositeImageConnectionSetter = class extends Component {
  componentWillMount() {
    
    this.props.setCompositeImageData(this.props.compositeImageData, 'bernie');
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
  const path = `${props.urlStart}${urlEnd}`;

  if (props.bernieRouteScreen === this.props.screen) {

  }
  return (
    <Route
      exact={props.exact}
      path={path}
      render={(routeProps) => {
        const compositeImageData = paramsIntoCompositeImage(routeProps.match.params, routeProps.match.url);
        return (
          <CompositeImageConnectionSetter compositeImageData={compositeImageData}>{props.render(routeProps, compositeImageData)}</CompositeImageConnectionSetter>
        );
      }}
    />
  );
}
BernieRoute.propTypes = {
  urlStart: PropTypes.string,
  urlEnd: PropTypes.string,
  render: PropTypes.func.isRequired,
  exact: PropTypes.bool
};
BernieRoute.defaultProps = {
  urlStart: '',
  urlEnd: '',
  exact: false,
};

BernieRoute = connect(
  (state) => {
    return {
      bernieRouteScreen: state.bernieRoute.screen,
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

const nameSpace = '/bernie';
const Routing = class extends Component {
  constructor() {
    super();
    this.state = {};
    makeBinder(this, 'handleBackroundImageSelection');
    makeBinder(this, 'handleForegroundImageSelection');
    this.generateCompletionUrl = this.generateCompletionUrl.bind(this);
  }
  handleBackroundImageSelection(imgSrcObj) {
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
  handleForegroundImageSelection(imgSrcObj) {
    this.props.setCompositeImageData({
      foreground: {
        srcKey: imgSrcObj.srcKey,
      },
      screen: 'crop'
    });
  }
  generateCompletionUrl(activeCompositeImageData) {
    return `${nameSpace}/${formUrl(activeCompositeImageData)}`;
  }
  render() {
    console.log(this.props.bernieScreen);
    console.log('llll',bernieScreenComponentMap[this.props.bernieScreen])
    const Comp = bernieScreenComponentMap[this.props.bernieScreen];
    return Comp;
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
    
    const homeLayoutPaths = [
      nameSpace,
      `${nameSpace}/ut/:bgSrcKey/${geoRouting}/:fgSrcKey`,
      `${this.props.match
        .url}/:fgSrcKey(${standardModesRegexArrayString})/:bgSrcKey/${geoRouting}`,
    ];
    console.log('bernieScreen',bernieScreen)
    return (
      <statelessWrapper>
        {homeLayoutPaths.map((path, i) => {
          const key = `${i}-statelessWrapper`;
          return (
            <statelessWrapper key={key}>
              <BernieRoute
                screen="home"
                exact
                urlStart={path}
                urlEnd={''}
                render={() => {
                  return (
                    <BernieHomeLayout
                      onUploadSuccess={this.handleBackroundImageSelection()}
                    />
                  );
                }}
              />
              <BernieRoute
                screen="cropper"
                urlStart={path}
                urlEnd={'crop'}
                render={(props, compositeImageData) => {
                  console.log('---',this.props.compositeImageData.background && this.props.compositeImageData.background.src);
                  console.log('+++',compositeImageData.background.src);
                  return (
                    <CropperScreen
                      foreground={compositeImageData.foreground}
                      background={compositeImageData.background}
                      generateCompletionUrl={this.generateCompletionUrl}
                    />
                  );
                }}
              />
              <BernieRoute
                screen="importFacebook"
                urlStart={path}
                urlEnd={'import-photo-from-facebook'}
                render={() => {
                  return (
                    <ImagePickerFacebook
                      onClick={this.handleBackroundImageSelection()}
                    />
                  );
                }}
              />
              <BernieRoute
                screen="selectTemplate"
                urlStart={path}
                urlEnd={'select-template'}
                render={() => {
                  return (
                    <ImagePickerTemplate
                      onClick={this.handleForegroundImageSelection()}
                    />
                  );
                }}
              />
              <BernieRoute
                screen="xxxxx"
                urlStart={path}
                urlEnd={`:screen(${buttonGroupComponentsRegexArrayString})`}
                render={(props) => {
                  const Comp = buttonGroupComponents[props.match.params.screen];
                  return (
                    <Comp
                      isModal
                    />
                  );
                }}
              />
            </statelessWrapper>
          );
        })}
      </statelessWrapper>
    );
  }
}
Routing.propTypes = {
  // match: PropTypes.object.isRequired,
  setCompositeImageData: PropTypes.func.isRequired,
};

export default connect(
  ( state /* , { params }*/) => {
    return {
      compositeImageData: state.bernie.compositeImageData,
      bernieScreen: state.bernie.bernieScreen,
    };
  },
  {
    setCompositeImageData: compositeImageSetterActionCreator,
  }
)(Routing);



