import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fakePost as post } from 'todo_app/src/api';
import { normalize, Schema, arrayOf } from 'normalizr';
import { combineReducers } from 'redux';
import createCachedSelector from 're-reselect';
import styled from 'styled-components';

// =================

export const bernieReducers = combineReducers({
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
