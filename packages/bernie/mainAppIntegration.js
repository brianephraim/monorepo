import Routing from './Routing';
import { routesMap, reducers } from './setup';
import { addRoutesToApp } from 'redux-routing-app-root-component';

export default function() {
  addRoutesToApp({
    routesMap,
    routeRootComponent: Routing,
    reducers: { bernie: reducers },
    routeInfo: {
      description: 'Bernie',
      path: '/bernie',
    },
  });
}
