import Comp, {routeData as variousBernieRouteData} from './variousBernieIntegration.js';
/* variousBernieIntegration == {routeRootComponent,routesMap,reducers) */
const routeData = {
  ...variousBernieRouteData,
  routesMap: {
    ...variousBernieRouteData.routesMap,
    TODOS: '/todos/:filter',
    BATTLESHIP: '/battleship',
    APOLLOSTARTER: '/apollostarter',
  },
  pageMap: {
    ...(Object.keys(variousBernieRouteData.routesMap).reduce((accum, key) => {
      accum[key] = 'InitialApp';
      return accum;
    },{})),
    BATTLESHIP: 'Battleship',
    TODOS: 'Todos',
    APOLLOSTARTER: 'Apollostarter',
  },
};

export default Comp;
export {routeData};
