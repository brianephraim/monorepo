import { NOT_FOUND } from 'redux-first-router'
import {routeData} from 'virtual-module-initial-app';

let windowPageMap = {};
if(typeof window !== 'undefined' && window.pageMapFromInitialApp) {
  windowPageMap = window.pageMapFromInitialApp;
}

// On the client, routeData.pageMap is empty and windowPageMap is full.
// On server, the opposite.
const dynamicPageMap = {...routeData.pageMap,...windowPageMap};

const components = {
  HOME_UNIVERSAL_DEMO: {
    importAvenue: 'demo',
    fileKey: 'Home',
  },
  LIST: {
    importAvenue: 'demo',
    fileKey: 'List',
  },
  VIDEO: {
    importAvenue: 'demo',
    fileKey: 'Video',
  },
  ADMIN: {
    importAvenue: 'demo',
    fileKey: 'Admin',
  },
  LOGIN: {
    importAvenue: 'demo',
    fileKey: 'Login',
  },
  [NOT_FOUND]: {
    importAvenue: 'demo',
    fileKey: 'NotFound',
  },
  ...Object.keys(dynamicPageMap).reduce((accum,fileKey) => {
    accum[fileKey] = {
      importAvenue: 'temp',
      fileKey:dynamicPageMap[fileKey],
    }
    return accum;
  },{}),
}

export default (state = {importAvenue: 'demo',fileKey:'HOME_UNIVERSAL_DEMO'}, action = {}) => { 
  return components[action.type] || state;
}




// NOTES: this is the primary reducer demonstrating how RFR replaces the need
// for React Router's <Route /> component.
//
// ALSO:  Forget a switch, use a hash table for perf.
