import Routing from './Routing';
import { bernieRoutesMap, bernieReducers } from './setup';
import { addRoutesToApp } from 'redux-routing-app-root-component';

export default function() {
  addRoutesToApp({
    routesMap: bernieRoutesMap,
    routeRootComponent: Routing,
    reducers: { bernie: bernieReducers },
    routeInfo: {
      description: 'Bernie',
      path: '/bernie',
    },
  });
}
