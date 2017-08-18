import Battleship from './battleship';
import { addRoutesToApp } from  'MainApp/Routing';

export default function () {
  addRoutesToApp({
    routesMap:{
      BATTLESHIP: '/battleship'
    },
    routeRootComponent: Battleship,
    // reducers: {
    //   toDos: ToDosReducers,
    //   users: usersReducers,
    // },
    routeInfo: {
      description: 'Battleship',
      path: '/battleship',
    },
  });
}
