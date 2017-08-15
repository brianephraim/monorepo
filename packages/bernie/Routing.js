/* eslint-disable react/no-multi-comp */
/* eslint-disable class-methods-use-this */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { combineReducers } from 'redux';
import PropTypes from 'prop-types';
import makeBinder from '@defualt/make-binder';
import {
  buttonGroupComponents,
  buttonGroupComponentsRegexArrayString,
} from './buttonGroups';
import CropperScreen from './CropperScreen';
import ImagePickerFacebook from './ImagePickerFacebook';
import ImagePickerTemplate from './ImagePickerTemplate';
import { standardModesRegexArrayString, formUrl } from './deriveUrlInfo';
import { getNormalizedImageInfo } from './s3';
import { setterActionCreator as compositeImageSetterActionCreator, paramsIntoCompositeImage, furtherRefineCompositeImageData } from './compositeImage';
import BernieHomeLayout from './HomeLayout'
import './app.scss';

// =================


const nameSpace = '/bernie';
const geoRouting =
      ':fgX([^/|^_]*)_:fgY([^/|^_]*)_:fgW([^/|^_]*)_:fgH([^/|^_]*)_:bgW([^/|^_]*)_:bgH([^/]*)';
const homeLayoutPaths = [
      nameSpace,
      `${nameSpace}/ut/:bgSrcKey/${geoRouting}/:fgSrcKey`,
      `${nameSpace}/:fgSrcKey(${standardModesRegexArrayString})/:bgSrcKey/${geoRouting}`,
    ];

function BernieHomeLayoutWithUploadCallback(props){
  return (
    <BernieHomeLayout
      onUploadSuccess={props.handleBackroundImageSelection()}
    />
  );
};
BernieHomeLayoutWithUploadCallback.propTypes = {
  handleBackroundImageSelection: PropTypes.func.isRequired,
};

function ImagePickerFacebookWithOnClick(props){
  return (
    <ImagePickerFacebook
      onClick={props.handleBackroundImageSelection()}
    />
  );
};
ImagePickerFacebookWithOnClick.propTypes = {
  handleBackroundImageSelection: PropTypes.func.isRequired,
};

function ImagePickerTemplateWithOnClick(props){
  return (
    <ImagePickerTemplate
      onClick={props.handleForegroundImageSelection()}
    />
  );
};
ImagePickerTemplateWithOnClick.propTypes = {
  handleForegroundImageSelection: PropTypes.func.isRequired,
};

function CropperWithFgBgCompletion(props) {
  return (
    <CropperScreen
      foreground={props.compositeImageData.foreground}
      background={props.compositeImageData.background}
      generateCompletionUrl={props.generateCompletionUrl}
    />
  );
}
CropperWithFgBgCompletion.propTypes = {
  compositeImageData: PropTypes.object.isRequired,
  generateCompletionUrl: PropTypes.func.isRequired,
};

function Dynamic(props) {
  const Comp = buttonGroupComponents[props.dynamicScreen];
  return (
    <Comp
      isModal
    />
  );
}
Dynamic.propTypes = {
  dynamicScreen: PropTypes.string.isRequired,
};

const routes = [
  {
    action: 'BERNIE_HOME',
    // urlStart: path,
    urlEnd: '',
    // path: '/bernie/:filter',
    component: BernieHomeLayoutWithUploadCallback,
  },
  {
    action: 'BERNIE_IMPORT_FACEBOOK',
    // urlStart: path,
    urlEnd: 'import-photo-from-facebook',
    // path: '/bernie/:filter',
    component: ImagePickerFacebookWithOnClick,
  },
  {
    action: 'BERNIE_SELECT_TEMPLATE',
    // urlStart: path,
    urlEnd: 'select-template',
    // path: '/bernie/:filter',
    component: ImagePickerTemplateWithOnClick,
  },
  {
    action: 'BERNIE_CROP',
    // urlStart: path,
    urlEnd: 'crop',
    // path: '/bernie/:filter',
    component: CropperWithFgBgCompletion,
  },
  {
    action: 'BERNIE_DYNAMIC',
    // urlStart: path,
    urlEnd: `:bernieDynamicScreen(${buttonGroupComponentsRegexArrayString})`,
    // path: '/bernie/:filter',
    component: Dynamic,
  },
];
  

const bernieRoutesMap = {}; 
const bernieScreenNameMap = {}
const bernieScreenComponentMap = {};
homeLayoutPaths.forEach((urlStart, i) => {
  routes.forEach((route) => {
    let urlEnd = route.urlEnd;
    urlEnd = urlEnd && urlEnd.indexOf(':') === -1 ? `:screen(${urlEnd})` : urlEnd;
    urlEnd = urlEnd ? `/${urlEnd}` : ''
    const path = `${urlStart}${urlEnd}`;
    const routesMapKey = `${route.action}${i > 0 ? i : ''}`

    if (!bernieRoutesMap[route.action]) {
      bernieRoutesMap[route.action] = [];
    }
    bernieRoutesMap[route.action].push(path);
    // bernieRoutesMap[routesMapKey] = path;

    // bernieScreenNameMap[routesMapKey] = route.action;
    bernieScreenNameMap[route.action] = route.action;

    bernieScreenComponentMap[route.action] = route.component;
  });
});


export {bernieRoutesMap, bernieScreenComponentMap};



export const bernieReducers = combineReducers({
  compositeImageData: (state = {}, action) => {
    if(bernieRoutesMap[action.type]) {
      const newCompositeImageData = paramsIntoCompositeImage(action.payload);
      const compositeImageData = furtherRefineCompositeImageData(state, newCompositeImageData, '/bernie');
      return compositeImageData;
    }
    switch (action.type) {
      case 'SET_COMPOSITE_IMAGE_DATA':
        return {
          ...action.compositeImageData      
        };
      default:
        return state;
    }
  },
  idDict: (state = {}, action) => {
    switch (action.type) {
      case 'FETCH_BERNIE_SUCCESS':
        return {
          ...state,
          ...action.response.entities.bernie,
        };
      default:
        return state;
    }
  },
  list: (state = [], action) => {
    switch (action.type) {
      case 'FETCH_BERNIE_SUCCESS':
        return action.response.result;
      default:
        return state;
    }
  },
  bernieScreen: (state = 'BERNIE_HOME', action) => {
    if(bernieRoutesMap[action.type]) {
      return bernieScreenNameMap[action.type];
    }
    return state;
  },
});



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
    const Comp = bernieScreenComponentMap[this.props.bernieScreen];

    return (
      <Comp
        handleBackroundImageSelection={this.handleBackroundImageSelection}
        handleForegroundImageSelection={this.handleForegroundImageSelection}
        generateCompletionUrl={this.generateCompletionUrl}
        compositeImageData={this.props.compositeImageData}
        dynamicScreen={this.props.dynamicScreen}
      />
    );
  }
}
Routing.propTypes = {
  bernieScreen: PropTypes.string.isRequired,
  dynamicScreen: PropTypes.string,
  compositeImageData: PropTypes.object.isRequired,
  setCompositeImageData: PropTypes.func.isRequired,
};
Routing.defaultProps = {
  dynamicScreen: ''
};

export default connect(
  ( state /* , { params }*/) => {
    return {
      compositeImageData: state.bernie.compositeImageData,
      bernieScreen: state.bernie.bernieScreen,
      dynamicScreen: state.location.payload.bernieDynamicScreen,
    };
  },
  {
    setCompositeImageData: compositeImageSetterActionCreator,
  }
)(Routing);



