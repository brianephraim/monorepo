import Battleship from './battleship';
import {addRoutesToApp} from 'redux-routing-app-root-component';

export default function () {
  addRoutesToApp({
    routesMap:{
      BATTLESHIP: '/battleship'
    },
    routeRootComponent: Battleship,
  });
}
