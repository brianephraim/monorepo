/*
import integrateToDoApp from 'todo_app/mainAppIntegration';

export default integrateToDoApp;
*/

import integrateToDoApp from 'todo_app/mainAppIntegration';
const reducers = integrateToDoApp.reducers;
const routesMap = integrateToDoApp.routesMap;
export {reducers,routesMap};
console.log('integrateToDoApp.routeRootComponen',integrateToDoApp.routeRootComponent)
export default integrateToDoApp.routeRootComponent;
