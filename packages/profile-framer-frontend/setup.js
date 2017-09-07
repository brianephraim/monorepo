import { connect, createConnect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { combineReducers } from 'redux';
import {makeNameSpacedResponsiveStatusesDictReducer} from '@defualt/responsive/nameSpaceResponsive';
import { addRoutesToApp } from 'redux-routing-app-root-component';
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

import constants, {registerConstants} from './constants';

import { paramsIntoCompositeImage } from './compositeImage';

import {appConnect} from './nameSpacedResponsive';

let payloadRefineActionGetsRedefined = () => {};
function payloadRefineAction(...args) {
  return payloadRefineActionGetsRedefined(...args);
}
export {
  payloadRefineAction,
};

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


export default function(constantsInjection) {
  
  registerConstants(constantsInjection);


  const geoPathFrag =
    ':fgX([^/|^_]*)_:fgY([^/|^_]*)_:fgW([^/|^_]*)_:fgH([^/|^_]*)_:bgW([^/|^_]*)_:bgH([^/]*)';

  const routeModes = [
    {
      key: 'H3LIKE',
      urlStart: `/:appNameSpace(${constants.appNameSpace})/:fgSrcKey(${standardModesRegexArrayString})/:bgSrcKey/${geoPathFrag}`,
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
      urlStart: `/:appNameSpace(${constants.appNameSpace})/ut/:bgSrcKey/${geoPathFrag}/:fgSrcKey`,
      match: payload => {
        return payload.fgSrcKey;
      },
    },
  ];

  payloadRefineActionGetsRedefined = ({ type, payload }) => {
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
      asdf:'zxcv',
      payload:{
        ...payload,
        appNameSpace: constants.appNameSpace,
      },
    };
  }


  const routes = [
    {
      action: 'HOME',
      urlEnd: '',
      component: HomeLayoutWithUploadCallback,
    },
    {
      action: 'IMPORT_FACEBOOK',
      urlEnd: 'import-photo-from-facebook',
      component: ImagePickerFacebookWithOnClick,
    },
    {
      action: 'IMPORT_URL',
      urlEnd: 'import-url',
      component: UrlImportScreenWithWithUploadCallback,
    },
    {
      action: 'UPLOAD_TEMPLATE',
      urlEnd: 'upload-template',
      component: TemplateUploadScreenWithUploadCallback,
    },

    {
      action: 'SELECT_TEMPLATE',
      urlEnd: 'select-template',
      component: ImagePickerTemplateWithOnClick,
    },
    {
      action: 'CROP',
      urlEnd: 'crop',
      component: CropperWithFgBgCompletion,
    },
    {
      action: 'DYNAMIC',
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
  routesMap.APP_ROOT = constants.urlAppNameSpace;
  screenNameMap.APP_ROOT = 'HOME';

  function filterReducers(reducers,check) {
    // return reducers;
    return Object.keys(reducers).reduce((accum,key) => {
      const reducer = reducers[key];
      accum[key] = (state,action,...args) => {
        if (check(state,action,...args)) {
          // nameSpaces match... proceed with reducer.
          return reducer(state,action,...args);
        }
        // pass in empty object as reducer action
        // this should return the default value of the reducer
        // because reducers parse action looking for data,
        // so empty ebject means no data to be found... ergo default value.s
        return reducer(state,{},...args);
      };
      return accum;
    }, {});
  }



  const reducersToFocus = {
    compositeImageData: (state = {}, action) => {
      if (routesMap[action.type] || action.type === 'APP_ROOT') {
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
    activeAppScreen: (state = 'HOME', action) => {
      if (routesMap[action.type] && action.payload.appNameSpace === constants.appNameSpace) {
        return screenNameMap[action.type];
      }
      return state;
    },
    facebookPhotos: (state = [], action) => {
      if (action.type === 'FETCH_FACEBOOK_PHOTOS') {
        return [...action.images];
      }
      return state;
    },
    templates: (state, action) => {
      const featured = ['h3', 'h4', 'wg'].map(srcKey => {
        return {
          src: `${constants.fgImagePrefix}${srcKey}${constants.imageSuffix}`,
          srcKey,
        };
      });
      if (action.type === 'FETCH_TEMPLATES') {

        return [...featured, ...action.images];
      }
      return featured;
    },
  };

  const reducers = combineReducers({
    ...filterReducers(reducersToFocus, (state,action) => {
      return action.appNameSpace === constants.appNameSpace || action.type === 'APP_ROOT';
    }),
    
    
    responsiveStatusesDict: makeNameSpacedResponsiveStatusesDictReducer(() => { return constants.appNameSpace; },'homeResponsive'),
    
    
  });





  let Routing = (props) => {
    const Comp = screenComponentMap[props.activeAppScreen];
    return (
      <Comp />
    );
  };
  Routing.propTypes = {
    activeAppScreen: PropTypes.string.isRequired,
  };

  Routing = appConnect(
    (appState /* , { params }*/) => {
      return {
        activeAppScreen: appState.activeAppScreen,
      };
    }
  )(Routing);





  // import { routesMap, reducers, Routing } from './setup';



  addRoutesToApp({
    routesMap,
    routeRootComponent: Routing,
    reducers: { [constants.appNameSpace]: reducers },
    routeInfo: {
      description: constants.appNameSpace,
      path: `/${constants.appNameSpace}`,
    },
  });
}
