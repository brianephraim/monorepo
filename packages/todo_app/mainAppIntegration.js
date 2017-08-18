import ToDoUserAssignmentScreen from './todo_app';
import ToDosReducers from './src/toDos/state/reducers';
import { usersReducers } from './src/users';
import { addRoutesToApp } from  'MainApp/Routing';

export default function () {
  addRoutesToApp({
    routesMap:{
      TODOS: '/todos/:filter'
    },
    routeRootComponent: ToDoUserAssignmentScreen,
    reducers: {
      toDos: ToDosReducers,
      users: usersReducers,
    },
    routeInfo: {
      description: 'Todos',
      path: '/todos/:filter',
      demoPath: '/todos/all',
    },
  });
}