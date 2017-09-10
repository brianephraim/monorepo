import { connect } from 'react-redux';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { combineReducers } from 'redux';
import { addRoutesToApp } from '@defualt/redux-routing-app-root-component';
import {makeNameSpacedResponsiveStatusesDictReducer} from '@defualt/responsive/nameSpaceResponsive';

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


import { paramsIntoCompositeImage } from './compositeImage';

import {setAncestorConstantsHoc} from './ancestorConstantsHoc'; 


let Dynamic = (props) => {
  if(props.dynamicScreen){
    const Comp = buttonGroupComponents[props.dynamicScreen];
    return <Comp isModal />;
  }
  return null;
}
Dynamic.propTypes = {
  dynamicScreen: PropTypes.string.isRequired,
};
Dynamic.defaultProps = {
  dynamicScreen: '',
};
Dynamic = connect(
  (state /* , { params }*/) => {
    return {
      dynamicScreen: state.location.payload.dynamicScreen,
    };
  },
  {}
)(Dynamic);

const geoPathFrag =
  ':fgX([^/|^_]*)_:fgY([^/|^_]*)_:fgW([^/|^_]*)_:fgH([^/|^_]*)_:bgW([^/|^_]*)_:bgH([^/]*)';

const routeModes = [
  {
    key: 'H3LIKE',
    getUrlStart: (appNameSpace) => {return `/:appNameSpace(${appNameSpace})/:fgSrcKey(${standardModesRegexArrayString})/:bgSrcKey/${geoPathFrag}`;},
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
    getUrlStart: (appNameSpace) => {return `/:appNameSpace(${appNameSpace})/ut/:bgSrcKey/${geoPathFrag}/:fgSrcKey`;},
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
    asdf:'zxcv',
    payload:{
      ...payload,
      appNameSpace,
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
  const appRootActionType = `APP_ROOT_${constants.urlAppNameSpace.toUpperCase()}`
  routesMap[appRootActionType] = constants.urlAppNameSpace;
  screenNameMap[appRootActionType] = 'HOME';

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
      if (routesMap[action.type] || action.type === appRootActionType) {
        const compositeImageData = paramsIntoCompositeImage(action.payload, constants);
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
      if (
        (routesMap[action.type] && action.payload.appNameSpace === constants.appNameSpace)
        ||
        (action.type === appRootActionType) // in this case, there is no payload... like when the url is just /bernie
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

  const nameSpacedResponsiveStatusesDictReducer = makeNameSpacedResponsiveStatusesDictReducer(() => { return constants.appNameSpace; },'homeResponsive');


  const reducers = combineReducers({
    ...filterReducers(reducersToFocus, (state,action) => {
      return action.appNameSpace === constants.appNameSpace || action.type === appRootActionType;
    }),    
    responsiveStatusesDict: nameSpacedResponsiveStatusesDictReducer,
    constants: (state = {}, action) => {
      if (action.type === 'SET_CONSTANTS') {
        return {...action.constants};
      }
      return state;
    },
  });





  let Routing = class extends Component {
    componentWillMount() {
      this.props.setConstants(constants);
    }
    render(){
      const Comp = screenComponentMap[this.props.activeAppScreen];
      return (
        <Comp />
      );
    }
  };
  Routing.propTypes = {
    activeAppScreen: PropTypes.string.isRequired,
    setConstants: PropTypes.func.isRequired
  };
  Routing = connect(
    (state /* , { params }*/) => {
      return {
        activeAppScreen: state[constants.appNameSpace].activeAppScreen,
      };
    }, {
      setConstants: (constants) => {
        return {
          type: 'SET_CONSTANTS',
          constants,
        };
      }
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
