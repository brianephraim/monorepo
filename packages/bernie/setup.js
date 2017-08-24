import React from 'react';
import PropTypes from 'prop-types';
import { combineReducers } from 'redux';
import { standardModesRegexArrayString } from './deriveUrlInfo';
import {
  buttonGroupComponentsRegexArrayString,
  buttonGroupComponents
} from './buttonGroups';
import {
  BernieHomeLayoutWithUploadCallback, ImagePickerFacebookWithOnClick,
  ImagePickerTemplateWithOnClick,CropperWithFgBgCompletion,
  UrlImportScreenWithWithUploadCallback,
  TemplateUploadScreenWithUploadCallback
} from './routingComponents';

import { paramsIntoCompositeImage } from './compositeImage';

export function Dynamic(props) {
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


const nameSpace = '/bernie';

const geoPathFrag =
      ':fgX([^/|^_]*)_:fgY([^/|^_]*)_:fgW([^/|^_]*)_:fgH([^/|^_]*)_:bgW([^/|^_]*)_:bgH([^/]*)';

const routeModes = [
  {
    key: 'H3LIKE',
    urlStart: `${nameSpace}/:fgSrcKey(${standardModesRegexArrayString})/:bgSrcKey/${geoPathFrag}`,
    match:(payload) => {
      return payload.fgSrcKey && payload.fgSrcKey.match(new RegExp(`^(${standardModesRegexArrayString})$`));
    },
  },
  {
    key: 'UT',
    urlStart: `${nameSpace}/ut/:bgSrcKey/${geoPathFrag}/:fgSrcKey`,
    match:(payload) => {
      return payload.fgSrcKey;
    },
  },
];
function payloadRefineAction({type, payload}){
  let found = false;
  let i = 0;
  while(!found && i < routeModes.length) {
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
    payload
  };
}

const routes = [
  {
    action: 'BERNIE_HOME',
    urlEnd: '',
    component: BernieHomeLayoutWithUploadCallback,
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
    urlEnd: `:bernieDynamicScreen(${buttonGroupComponentsRegexArrayString})`,
    component: Dynamic,
  },
];

const bernieRoutesMap = {}; 
const bernieScreenNameMap = {}
const bernieScreenComponentMap = {};
routeModes.forEach((homeLayoutPath) => {
  const key = homeLayoutPath.key;
  const urlStart = homeLayoutPath.urlStart;
  // const urlStart = routeModes[key];
  routes.forEach((route) => {
    let urlEnd = route.urlEnd;
    urlEnd = urlEnd ? `/${urlEnd}` : ''
    const path = `${urlStart}${urlEnd}`;
    const routesMapKey = `${route.action}_${key}`
    bernieRoutesMap[routesMapKey] = path;
    bernieScreenNameMap[routesMapKey] = route.action;
    bernieScreenComponentMap[route.action] = route.component;
  });
});
bernieRoutesMap.BERNIE = '/bernie';
bernieScreenNameMap.BERNIE = 'BERNIE_HOME';

const bernieReducers = combineReducers({
  compositeImageData: (state = {}, action) => {
    if(bernieRoutesMap[action.type] || action.type === 'BERNIE') {
      const compositeImageData = paramsIntoCompositeImage(action.payload);
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
  bernieScreen: (state = 'BERNIE_HOME', action) => {
    if(bernieRoutesMap[action.type]) {
      return bernieScreenNameMap[action.type];
    }
    return state;
  },
  responsiveStatuses: (state = [], action) => {
    if (action.type === 'UDATE_RESPONSIVE_STATUSES' && action.name === 'bernie') {
      return [...action.responsiveStatuses]
    }
    return state;
  },
  responsiveStatusesDict: (state = {}, action) => {
    if (action.type === 'UDATE_RESPONSIVE_STATUSES_DICT' && action.name === 'bernie') {
      return {...action.responsiveStatusesDict}
    }
    return state;
  }
});
export {nameSpace,bernieScreenComponentMap,payloadRefineAction,bernieReducers,bernieRoutesMap};
