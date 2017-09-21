import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";
import { combineReducers } from 'redux';
import { addRoutesToApp } from '@defualt/redux-routing-app-root-component';
import { makeNameSpacedResponsiveStatusesDictReducer } from '@defualt/responsive/nameSpaceResponsive';

import { generateCompositeImgSrcUrl } from './compositeImage';
import { standardModesRegexArrayString } from './deriveUrlInfo';
import {
  buttonGroupComponentsRegexArrayString,
  ButtonGroupFeaturedRouteScreen,
} from './buttonGroups';
import {
  HomeLayoutWithUploadCallback,
//   ImagePickerFacebookWithOnClick,
  ImagePickerTemplateWithOnClick,
//   CropperWithFgBgCompletion,
//   UrlImportScreenWithWithUploadCallback,
//   // TemplateUploadScreenWithUploadCallback,
} from './routingComponents';

import { paramsIntoCompositeImage } from './compositeImage';

import { setAncestorConstantsHoc } from './ancestorConstantsHoc';

import { appConnect } from './nameSpacedResponsive';

import { formUrl } from './deriveUrlInfo';

console.log('MORE UNCOMMENTING TO DO HERE');
// function ButtonGroupFeaturedRouteScreen(){
//   return <div />;
// }
// function HomeLayoutWithUploadCallback(){
//   return <div>adfasdfa</div>;
// }
function ImagePickerFacebookWithOnClick(){
  return <div />;
}
// function ImagePickerTemplateWithOnClick(){
//   return <div />;
// }
function CropperWithFgBgCompletion(){
  return <div />;
}
function UrlImportScreenWithWithUploadCallback(){
  return <div />;
}


const geoPathFrag =
  ':fgX([^/|^_]*)_:fgY([^/|^_]*)_:fgW([^/|^_]*)_:fgH([^/|^_]*)_:bgW([^/|^_]*)_:bgH([^/]*)';

const routeModes = [
  {
    key: 'H3LIKE',
    getUrlStart: appNameSpace => {
      return `/:appNameSpace(${appNameSpace})/:fgSrcKey(${standardModesRegexArrayString})/:bgSrcKey/${geoPathFrag}`;
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
    getUrlStart: appNameSpace => {
      return `/:appNameSpace(${appNameSpace})/ut/:bgSrcKey/${geoPathFrag}/:fgSrcKey`;
    },
    match: payload => {
      return payload.fgSrcKey;
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

const routes = [
  {
    action: 'HOME_PROFILE_FRAMER',
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
];

export default function(constants) {
  const routesMap = {};
  const screenNameMap = {};
  const screenComponentMap = {};
  routeModes.forEach(homeLayoutPath => {
    const key = homeLayoutPath.key;
    const urlStart = homeLayoutPath.getUrlStart(constants.appNameSpace);
    // const urlStart = routeModes[key];
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
  const appRootActionType = `APP_ROOT_${constants.urlAppNameSpace.toUpperCase()}`;
  routesMap[appRootActionType] = constants.urlAppNameSpace;
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
      if (routesMap[action.type] || action.type === appRootActionType) {
        const compositeImageData = paramsIntoCompositeImage(
          action.payload,
          constants
        );
        compositeImageData.compositeImageUrl = generateCompositeImgSrcUrl(compositeImageData);
        return compositeImageData;
      }
      switch (action.type) {
        case 'SET_COMPOSITE_IMAGE_DATA':
          return {
            ...action.compositeImageData,
            compositeImageUrl: generateCompositeImgSrcUrl(action.compositeImageData)
          };
        default:
          return state;
      }
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
      if (
        (routesMap[action.type] &&
          action.payload.appNameSpace === constants.appNameSpace) ||
        action.type === appRootActionType // in this case, there is no payload... like when the url is just /bernie
      ) {
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

  const nameSpacedResponsiveStatusesDictReducer = makeNameSpacedResponsiveStatusesDictReducer(
    () => {
      return constants.appNameSpace;
    }
  );

  const reducers = combineReducers({
    ...filterReducers(reducersToFocus, (state, action) => {
      return (
        action.appNameSpace === constants.appNameSpace ||
        action.type === appRootActionType
      );
    }),
    responsiveStatusesDict: nameSpacedResponsiveStatusesDictReducer,
    constants: (state = {}, action) => {
      if (action.type === 'SET_CONSTANTS') {
        return { ...action.constants };
      }
      return state;
    },
  });

  
  let HeaderStuff = (props) => {
    const constants = props.constants;
    const compositeImageUrl = props.compositeImageUrl;
    let metaOgUrl = `${props.serverClientOrigin}${props.constants.urlAppNameSpace}/${formUrl(props.compositeImageData)}`;
    if (`${props.serverClientOrigin}${props.constants.urlAppNameSpace}` === `${props.serverClientUrl}`) {
      metaOgUrl = props.serverClientUrl;
    }

    return (
      <Helmet>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        <title>{constants.headTitle}</title>
        <meta name="description" content={constants.headDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link href={`https://fonts.googleapis.com/css?family=${constants.googleFonts}`} rel='stylesheet' type='text/css' />

        <meta property="og:title" content={constants.headMetaOgTitle} />
        <meta property="og:site_name" content={constants.headMetaOgSiteName} />
        <meta property="og:url" content={metaOgUrl} />
        <meta property="og:description" content={constants.headMetaOgDescription} />
        <meta property="fb:app_id" content={constants.headMetaFbAppId} />
        <meta property="og:type" content={constants.headMetaOgType} />
        <meta property="og:locale" content={constants.headMetaOgLocale} />
        <meta property="og:image" content={compositeImageUrl} />
        <meta property="og:image:width" content={constants.headMetaOgImageWidth} />
        <meta property="og:image:height" content={constants.headMetaOgImageHeight} />

        <meta name="twitter:card" content={constants.headMetaTwitterCard} />
        <meta name="twitter:site" content={constants.headMetaTwitterSite} />
        <meta name="twitter:creator" content={constants.headMetaTwitterCreator} />
        <meta name="twitter:title" content={constants.headMetaTwitterTitle} />
        <meta name="twitter:description" content={constants.headMetaTwitterDescription} />
        <meta name="twitter:image" content={props.compositeImageUrl} />
      </Helmet>
    );
  };
  HeaderStuff.propTypes = {
    constants: PropTypes.object.isRequired,
    compositeImageData: PropTypes.object.isRequired,
    compositeImageUrl: PropTypes.string.isRequired,
    serverClientOrigin: PropTypes.string.isRequired,
    serverClientUrl: PropTypes.string.isRequired,
  };
  HeaderStuff.defaultProps = {
    serverClientOrigin: '',
    serverClientUrl: '',
  };
  HeaderStuff = 
  connect(
    (state) => {
      return {
        serverClientUrl: state.serverClientUrl,
        serverClientOrigin: state.serverClientOrigin,
      };
    }
  )(appConnect(
    (appState) => {
      return {
        compositeImageData: appState.compositeImageData,
        compositeImageUrl: appState.compositeImageData.compositeImageUrl,
        constants: appState.constants
      };
    }
  )(HeaderStuff));


  let Routing = class extends Component {
    componentWillMount() {
      this.props.setConstants(constants);
    }
    render() {
      const Comp = screenComponentMap[this.props.activeAppScreen];
      return (
        <div>
          <HeaderStuff />
          <Comp />
        </div>
      );
    }
  };
  Routing.propTypes = {
    activeAppScreen: PropTypes.string.isRequired,
    setConstants: PropTypes.func.isRequired,
  };
  Routing = connect(
    (state /* , { params }*/) => {
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
