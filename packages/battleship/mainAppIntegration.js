import Battleship from './battleship';

export default Battleship;

const routeData = {
  routesMap:{
    BATTLESHIP: '/battleship'
  },
  routeRootComponent: Battleship,
  reducers: {}
};
export {routeData};
