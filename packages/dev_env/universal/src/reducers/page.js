import { NOT_FOUND } from 'redux-first-router'
import {routeData} from 'MainApp';

export default (state = 'HOME_UNIVERSAL_DEMO', action = {}) => { 
  console.log(state,action);
  return components[action.type] || state;
}

const MainAppShim = Object.keys(routeData.routesMap).reduce((accum, key) => {
  accum[key] = 'Migration'; return accum;
},{});
const components = {
  HOME_UNIVERSAL_DEMO: 'Home',
  LIST: 'List',
  VIDEO: 'Video',
  ROOT: 'Migration',
  MIGRATION: 'Migration',
  BATTLESHIP: 'Migration',
  ADMIN: 'Admin',
  LOGIN: 'Login',
  [NOT_FOUND]: 'NotFound',
  ...MainAppShim
}

// NOTES: this is the primary reducer demonstrating how RFR replaces the need
// for React Router's <Route /> component.
//
// ALSO:  Forget a switch, use a hash table for perf.
