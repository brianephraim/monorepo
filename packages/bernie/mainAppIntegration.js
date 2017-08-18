import Bernie from './bernie';
import { bernieRoutesMap, bernieReducers } from './setup';
import {addRoutesToApp} from 'redux-routing-app-root-component';


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