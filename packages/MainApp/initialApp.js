import variousBernieIntegration from './variousBernieIntegration.js';
/* variousBernieIntegration == {routeRootComponent,routesMap,reducers) */
const routeData = {...variousBernieIntegration};
routeData.routesMap = {
  ...variousBernieIntegration.routesMap,
  TODOS: '/todos/:filter',
  BATTLESHIP: '/battleship',
};

routeData.pageMap = {
  ...(Object.keys(variousBernieIntegration.routesMap).reduce((accum, key) => {
    accum[key] = 'InitialApp';
    return accum;
  },{})),
  BATTLESHIP: 'Battleship',
  TODOS: 'Todos',
};

export default routeData;
