import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { combineReducers } from 'redux';
import { makeNameSpacedResponsiveStatusesDictReducer } from '@defualt/responsive/nameSpaceResponsive';

import { generateCompositeImgSrcUrl,getDefaultCompositeImageData, paramsIntoCompositeImage } from './compositeImage';
import { standardModesRegexArrayString } from './deriveUrlInfo';
import {
  buttonGroupComponentsRegexArrayString,
  ButtonGroupFeaturedRouteScreen,
} from './buttonGroups';
import {
  ImagePickerFacebookWithOnClick,
  ImagePickerTemplateWithOnClick,
  CropperWithFgBgCompletion,
  UrlImportScreenWithWithUploadCallback,
//   // TemplateUploadScreenWithUploadCallback,
} from './routingComponents';


import { setAncestorConstantsHoc } from './ancestorConstantsHoc';

import Privacy from './Privacy';
import Terms from './Terms';
import AppScreens from './AppScreens';


const geoPathFrag =
  ':fgX([^/|^_]*)_:fgY([^/|^_]*)_:fgW([^/|^_]*)_:fgH([^/|^_]*)_:bgW([^/|^_]*)_:bgH([^/]*)';

const routeModes = [
  {
    key: 'H3LIKE',
    getUrlStart: (prepend) => {
      return `${prepend}/:fgSrcKey(${standardModesRegexArrayString})/:bgSrcKey/${geoPathFrag}`;
    },
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
    getUrlStart: (prepend) => {
      return `${prepend}/ut/:bgSrcKey/${geoPathFrag}/:fgSrcKey`;
    },
    match: payload => {
      return payload.fgSrcKey;
    },
  },
  {
    key: 'BLANK',
    getUrlStart: (prepend) => {
      return `${prepend}`;
    },

    match: () => {
      return true;
    },
  },
];

export function payloadRefineAction({ type, payload }, appNameSpace) {
  let found = false;
  let i = 0;
  while (!found && i < routeModes.length) {
    const homeLayoutObject = routeModes[i++];
    if (homeLayoutObject.match(payload)) {
      found = `${type}_${homeLayoutObject.key}_${appNameSpace.toUpperCase()}`;
    }
  }

  if (!found) {
    found = `${type}_${'UT'}`;
  }
  return {
    type: found,
    asdf: 'zxcv',
    payload: {
      ...payload,
      appNameSpace,
    },
  };
}

function Div(){
  return <div />
}

const routes = [
  {
    action: 'HOME_PROFILE_FRAMER',
    urlEnd: '',
    component: Div,
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
    component: () => {
      return <CropperWithFgBgCompletion isMakeSquareTemplateMode />
    },
    // component: TemplateUploadScreenWithUploadCallback,
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
    component: ButtonGroupFeaturedRouteScreen,
  },
  {
    action: 'PRIVACY',
    urlEnd: 'privacy',
    component: Privacy,
  },
  {
    action: 'TERMS',
    urlEnd: 'terms',
    component: Terms,
  },
];
export default function(constants) {
  const routesMap = {};
  const screenNameMap = {};
  const screenComponentMap = {};
  routeModes.forEach(routeMode => {
    const key = routeMode.key;
    const urlPrepend = constants.isUrlRoot ? '' : `/:appNameSpace(${constants.appNameSpace})`;
    const urlStart = routeMode.getUrlStart(urlPrepend);
    routes.forEach(route => {
      let urlEnd = route.urlEnd;
      urlEnd = urlEnd ? `/${urlEnd}` : '';
      const path = `${urlStart}${urlEnd}`;
      const routesMapKey = `${route.action}_${key}_${constants.appNameSpace.toUpperCase()}`;
      routesMap[routesMapKey] = path;
      screenNameMap[routesMapKey] = route.action;
      screenComponentMap[route.action] = route.component;
    });
  });
  const appRootActionType = `APP_ROOT_${constants.appNameSpace}`;
  routesMap[appRootActionType] = constants.isUrlRoot ? '/' : constants.urlAppNameSpace;
  screenNameMap[appRootActionType] = 'HOME_PROFILE_FRAMER';

  function filterReducers(reducers, check) {
    // return reducers;
    return Object.keys(reducers).reduce((accum, key) => {
      const reducer = reducers[key];
      accum[key] = (state, action, ...args) => {
        if (check(state, action, ...args)) {
          // nameSpaces match... proceed with reducer.
          return reducer(state, action, ...args);
        }
        // pass in empty object as reducer action
        // this should return the default value of the reducer
        // because reducers parse action looking for data,
        // so empty ebject means no data to be found... ergo default value.s
        return reducer(state, {}, ...args);
      };
      return accum;
    }, {});
  }

  const reducersToFocus = {
    compositeImageData: (state = {}, action) => {
      // if(action.type.indexOf('PRIVACY') !== -1) {
      //   return state;
      // }
      if (routesMap[action.type] || action.type === appRootActionType) {
        const compositeImageData = paramsIntoCompositeImage(
          action.payload,
          constants
        );
        compositeImageData.compositeImageUrl = generateCompositeImgSrcUrl(compositeImageData);
        return compositeImageData;
      }
      if (!state.compositeImageUrl) {
        const compositeImageData = getDefaultCompositeImageData(constants);
        compositeImageData.compositeImageUrl = generateCompositeImgSrcUrl(compositeImageData);
        return compositeImageData;
      }
      return state;
    },
    // generateCompositeImgSrcUrl
    /*
    appState && appState.compositeImageData
          ? generateCompositeImgSrcUrl(appState.compositeImageData)
          : '/images/mock-selfie.png',
    */
    // compositeImageUrl: (state = {}, action) => {
    //   if (routesMap[action.type] || action.type === appRootActionType) {
    //     const compositeImageData = paramsIntoCompositeImage(
    //       action.payload,
    //       constants
    //     );
    //     return compositeImageData;
    //   }
    //   switch (action.type) {
    //     case 'SET_COMPOSITE_IMAGE_DATA':
    //       return {
    //         ...action.compositeImageData,
    //       };
    //     default:
    //       return state;
    //   }
    // },
    activeAppScreen: (state = 'HOME_PROFILE_FRAMER', action) => {
      /* beautify ignore:start */
      if (
        // in case profile-framer is root url
        (
          routesMap[action.type] &&
          !action.payload.appNameSpace && constants.isUrlRoot
        )
        ||
        // normal case
        (
          routesMap[action.type] &&
          action.payload.appNameSpace === constants.appNameSpace
        )
        ||
        // in this case, there is no payload... like when the url is just /bernie
        (
          action.type === appRootActionType
        ) 
      ) {
        return screenNameMap[action.type];
      }
      /* beautify ignore:end */
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
      return state || featured;
    },
    loading: (state = '', action) => {
      if (action.type === 'LOADING') {
        return action.where;
      }
      if (action.type === 'STOP_LOADING') {
        return '';
      }
      return state;
    },
    todrApollos: (state = [], action) => {
      if (action.type === 'FETCH_TODR') {
        console.log('asdfafd');
        return [...action.response.data.toduApollos];
      }
      return state;
    },
    // canceledLoads:
  };

  const nameSpacedResponsiveStatusesDictReducer = makeNameSpacedResponsiveStatusesDictReducer(
    () => {
      return constants.appNameSpace;
    }
  );
  const filteredReducers = filterReducers(reducersToFocus, (state, action) => {
      return (
        action.type.indexOf(`_BLANK_${constants.appNameSpace.toUpperCase()}`) !== -1 ||
        (action.appNameSpace === 'rootProfileFramer' && constants.isUrlRoot) ||
        action.appNameSpace === constants.appNameSpace ||
        action.type === appRootActionType
      );
  })
  const reducers = combineReducers({
    ...filteredReducers,
    responsiveStatusesDict: nameSpacedResponsiveStatusesDictReducer,
    constants: (state = {}, action) => {
      if (action.type === 'SET_CONSTANTS') {
        return { ...action.constants };
      }
      return state;
    },
  });

 


  let Routing = class extends Component {
    componentWillMount() {
      this.props.setConstants(constants);
    }
    render() {
      const Comp = screenComponentMap[this.props.activeAppScreen];
      return (
        <AppScreens>
          <Comp />
        </AppScreens>
      );
    }
  };
  Routing.propTypes = {
    activeAppScreen: PropTypes.string.isRequired,
    setConstants: PropTypes.func.isRequired,
  };
  Routing = connect(
    (state) => {
      return {
        activeAppScreen: state[constants.appNameSpace].activeAppScreen,
      };
    },
    {
      setConstants: constants => {
        return {
          type: 'SET_CONSTANTS',
          constants,
        };
      },
    }
  )(Routing);
  Routing = setAncestorConstantsHoc(Routing, constants);

  return {
    routesMap,
    routeRootComponent: Routing,
    reducers: { [constants.appNameSpace]: reducers },
  };
}
