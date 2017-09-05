import Routing from './Routing';
import { routesMap, reducers } from './setup';
import { addRoutesToApp } from 'redux-routing-app-root-component';
import {appNameSpace} from './constants';

export default function() {
  addRoutesToApp({
    routesMap,
    routeRootComponent: Routing,
    reducers: { [appNameSpace]: reducers },
    routeInfo: {
      description: appNameSpace,
      path: `/${appNameSpace}`,
    },
  });
}
