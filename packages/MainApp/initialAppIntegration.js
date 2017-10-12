import Comp, {routeData as variousBernieRouteData} from './variousBernieIntegration.js';
/* variousBernieIntegration == {routeRootComponent,routesMap,reducers) */
const routeData = {
  ...variousBernieRouteData,
  routesMap: {
    ...variousBernieRouteData.routesMap,
    TODOS: '/todos/:filter',
    BATTLESHIP: '/battleship',
  },
  pageMap: {
    ...(Object.keys(variousBernieRouteData.routesMap).reduce((accum, key) => {
      accum[key] = 'InitialApp';
      return accum;
    },{})),
    BATTLESHIP: 'Battleship',
    TODOS: 'Todos',
  },
};

export default Comp;
export {routeData};
