import Battleship from './battleship';

export default function () {
  return {
    routesMap:{
      BATTLESHIP: '/battleship'
    },
    routeRootComponent: Battleship,
  };
}
