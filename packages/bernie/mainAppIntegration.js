import Bernie from './bernie';
import { bernieRoutesMap, bernieReducers } from './setup';
import { addRoutesToApp } from  'MainApp/Routing';

export default function () {
  addRoutesToApp({
    routesMap:bernieRoutesMap,
    routeRootComponent: Bernie,
    reducers: {bernie:bernieReducers},
    routeInfo: {
      description: 'Bernie',
      path: '/bernie',
    },
  });
}