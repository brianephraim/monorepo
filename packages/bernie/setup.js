import { connect, createConnect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { combineReducers } from 'redux';
import { standardModesRegexArrayString } from './deriveUrlInfo';
import {
  buttonGroupComponentsRegexArrayString,
  buttonGroupComponents,
} from './buttonGroups';
import {
  HomeLayoutWithUploadCallback,
  ImagePickerFacebookWithOnClick,
  ImagePickerTemplateWithOnClick,
  CropperWithFgBgCompletion,
  UrlImportScreenWithWithUploadCallback,
  TemplateUploadScreenWithUploadCallback,
} from './routingComponents';
import {appNameSpace} from './constants';

import { paramsIntoCompositeImage } from './compositeImage';

console.log('createConnect',createConnect);

let Dynamic = (props) => {
  const Comp = buttonGroupComponents[props.dynamicScreen];
  return <Comp isModal />;
}
Dynamic.propTypes = {
  dynamicScreen: PropTypes.string.isRequired,
};
Dynamic = connect(
  (state /* , { params }*/) => {
    return {
      dynamicScreen: state.location.payload.dynamicScreen,
    };
  },
  {}
)(Dynamic);
export {Dynamic};

const nameSpace = '/bernie';

const geoPathFrag =
  ':fgX([^/|^_]*)_:fgY([^/|^_]*)_:fgW([^/|^_]*)_:fgH([^/|^_]*)_:bgW([^/|^_]*)_:bgH([^/]*)';

const routeModes = [
  {
    key: 'H3LIKE',
    urlStart: `/:appNameSpace(${appNameSpace})/:fgSrcKey(${standardModesRegexArrayString})/:bgSrcKey/${geoPathFrag}`,
    match: payload => {
      return (
        payload.fgSrcKey &&
        payload.fgSrcKey.match(
          new RegExp(`^(${standardModesRegexArrayString})$`)
        )
      );
    },
  },
  {
    key: 'UT',
    urlStart: `/:appNameSpace(${appNameSpace})/ut/:bgSrcKey/${geoPathFrag}/:fgSrcKey`,
    match: payload => {
      return payload.fgSrcKey;
    },
  },
];
function payloadRefineAction({ type, payload }) {
  let found = false;
  let i = 0;
  while (!found && i < routeModes.length) {
    const homeLayoutObject = routeModes[i++];
    if (homeLayoutObject.match(payload)) {
      found = `${type}_${homeLayoutObject.key}`;
    }
  }

  if (!found) {
    found = `${type}_${'UT'}`;
  }
  return {
    type: found,
    payload:{
      ...payload,
      appNameSpace,
    },
  };
}

const routes = [
  {
    action: 'BERNIE_HOME',
    urlEnd: '',
    component: HomeLayoutWithUploadCallback,
  },
  {
    action: 'BERNIE_IMPORT_FACEBOOK',
    urlEnd: 'import-photo-from-facebook',
    component: ImagePickerFacebookWithOnClick,
  },
  {
    action: 'BERNIE_IMPORT_URL',
    urlEnd: 'import-url',
    component: UrlImportScreenWithWithUploadCallback,
  },
  {
    action: 'BERNIE_UPLOAD_TEMPLATE',
    urlEnd: 'upload-template',
    component: TemplateUploadScreenWithUploadCallback,
  },

  {
    action: 'BERNIE_SELECT_TEMPLATE',
    urlEnd: 'select-template',
    component: ImagePickerTemplateWithOnClick,
  },
  {
    action: 'BERNIE_CROP',
    urlEnd: 'crop',
    component: CropperWithFgBgCompletion,
  },
  {
    action: 'BERNIE_DYNAMIC',
    urlEnd: `:dynamicScreen(${buttonGroupComponentsRegexArrayString})`,
    component: Dynamic,
  },
];

const routesMap = {};
const screenNameMap = {};
const screenComponentMap = {};
routeModes.forEach(homeLayoutPath => {
  const key = homeLayoutPath.key;
  const urlStart = homeLayoutPath.urlStart;
  // const urlStart = routeModes[key];
  routes.forEach(route => {
    let urlEnd = route.urlEnd;
    urlEnd = urlEnd ? `/${urlEnd}` : '';
    const path = `${urlStart}${urlEnd}`;
    const routesMapKey = `${route.action}_${key}`;
    routesMap[routesMapKey] = path;
    screenNameMap[routesMapKey] = route.action;
    screenComponentMap[route.action] = route.component;
  });
});
routesMap.BERNIE = '/bernie';
screenNameMap.BERNIE = 'BERNIE_HOME';

const reducers = combineReducers({
  compositeImageData: (state = {}, action) => {
    if (routesMap[action.type] || action.type === 'BERNIE') {
      const compositeImageData = paramsIntoCompositeImage(action.payload);
      return compositeImageData;
    }
    switch (action.type) {
      case 'SET_COMPOSITE_IMAGE_DATA':
        return {
          ...action.compositeImageData,
        };
      default:
        return state;
    }
  },
  activeAppScreen: (state = 'BERNIE_HOME', action) => {

    if (routesMap[action.type] && action.payload.appNameSpace === appNameSpace) {
      console.log(action)
      return screenNameMap[action.type];
    }
    return state;
  },
  responsiveStatusesDict: (state = {}, action) => {
    if (
      action.type === 'UDATE_RESPONSIVE_STATUSES_DICT' &&
      action.name === 'bernie'
    ) {
      return { ...action.responsiveStatusesDict };
    }
    return state;
  },
  facebookPhotos: (state = [], action) => {
    if (action.type === 'BERNIE_FETCH_FACEBOOK_PHOTOS') {
      console.log(action);
      return [...action.images];
    }
    return state;
  },
  templates: (state = [], action) => {
    const featured = ['h3', 'h4', 'wg'].map(srcKey => {
      return {
        src: `http://s3-us-west-1.amazonaws.com/bernieapp/decorations/${srcKey}.png`,
        srcKey,
      };
    });
    if (action.type === 'BERNIE_FETCH_TEMPLATES') {
      return [...featured, ...action.images];
    }
    return featured;
  },
});
export {
  nameSpace,
  screenComponentMap,
  payloadRefineAction,
  reducers,
  routesMap,
};
