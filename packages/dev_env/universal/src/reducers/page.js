import { NOT_FOUND } from 'redux-first-router'
import routeData from 'virtual-module-initial-app';

export default (state = 'HOME_UNIVERSAL_DEMO', action = {}) => { 
  return components[action.type] || state;
}


const components = {
  HOME_UNIVERSAL_DEMO: 'Home',
  LIST: 'List',
  VIDEO: 'Video',
  ADMIN: 'Admin',
  LOGIN: 'Login',
  [NOT_FOUND]: 'NotFound',
  ...routeData.pageMap,
}

// NOTES: this is the primary reducer demonstrating how RFR replaces the need
// for React Router's <Route /> component.
//
// ALSO:  Forget a switch, use a hash table for perf.
