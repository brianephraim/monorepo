import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fakePost as post } from 'todo_app/src/api';
import { normalize, Schema, arrayOf } from 'normalizr';
import { combineReducers } from 'redux';
import createCachedSelector from 're-reselect';
import styled from 'styled-components';
import { standardModesRegexArrayString, formUrl } from './deriveUrlInfo';
import {furtherRefineCompositeImageData, paramsIntoCompositeImage} from './compositeImage';

// =================

import BernieHomeLayout from './HomeLayout';
import ImagePickerFacebook from './ImagePickerFacebook';

const nameSpace = '/bernie';
const geoRouting =
      ':fgX([^/|^_]*)_:fgY([^/|^_]*)_:fgW([^/|^_]*)_:fgH([^/|^_]*)_:bgW([^/|^_]*)_:bgH([^/]*)';
const homeLayoutPaths = [
      nameSpace,
      `${nameSpace}/ut/:bgSrcKey/${geoRouting}/:fgSrcKey`,
      `${nameSpace}/:fgSrcKey(${standardModesRegexArrayString})/:bgSrcKey/${geoRouting}`,
    ];

var routes = [
  {
    action: 'BERNIE_HOME',
    // urlStart: path,
    urlEnd: '',
    // path: '/bernie/:filter',
    component: (
      <BernieHomeLayout
        onUploadSuccess={/*this.handleBackroundImageSelection()*/() => {}}
      />
    ),
  },
  {
    action: 'BERNIE_IMPORT_FACEBOOK',
    // urlStart: path,
    urlEnd: 'import-photo-from-facebook',
    // path: '/bernie/:filter',
    component: (
      <ImagePickerFacebook
        onClick={/*this.handleBackroundImageSelection()*/() => {}}
      />
    ),
  }
];

/*
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
*/
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
    // bernieRoutesMap[routesMapKey] = [path];
    bernieScreenNameMap[routesMapKey] = route.action;
    bernieScreenComponentMap[route.action] = route.component;
  });
});
console.log('bernieRoutesMap',bernieRoutesMap);


export {bernieRoutesMap, bernieScreenComponentMap};



export const bernieReducers = combineReducers({
  compositeImageData: (state = {}, action, a,b) => {
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

// =================

const bernieSchema = new Schema('bernie');
const arrayOfBernieSchema = arrayOf(bernieSchema);
const schema = {
  bernie: bernieSchema,
  arrayOfBernie: arrayOfBernieSchema,
};

const actions = {
  fetchBernie: () => {
    return (dispatch /* , getState*/) => {
      return post('fetchBernie').then(response => {
        dispatch({
          type: 'FETCH_BERNIE_SUCCESS',
          response: normalize(response, schema.arrayOfBernie),
        });
      });
    };
  },
};
export { actions };

// =================

const getBernieId = (state, props) => {
  return props.bernie.id;
};

const getTodosIdDict = (state, props) => {
  return state.toDos.toDosIdDict;
};

const getToDoAssignments = createCachedSelector(
  [getBernieId, getTodosIdDict],
  (bernieId, toDosIdDict) => {
    console.log('selector processing', bernieId);
    return Object.keys(toDosIdDict).reduce((accum, toDoId) => {
      if (toDosIdDict[toDoId].assignedBernieId === bernieId) {
        accum.push(toDosIdDict[toDoId].text);
      }
      return accum;
    }, []);
  }
)(
  /*
   * Re-reselect resolver function.
   * Cache/call a new selector for each different "props.bernie.id"
   */
  (state, props) => {
    return props.bernie.id;
  }
);
