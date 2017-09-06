// import Routing from './Routing';
import { routesMap, reducers, Routing } from './setup';
import { addRoutesToApp } from 'redux-routing-app-root-component';
import constants from './constants';

export default function() {
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
