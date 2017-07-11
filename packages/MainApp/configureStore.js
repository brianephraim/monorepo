import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import ToDosReducers from 'todo_app/src/toDos/state/reducers';
import { usersReducers } from 'todo_app/src/users';
import { bernieReducers } from 'bernie/state';
import appRootReducers from './appRootReducers';
console.log('PPPPP');
const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    // middlewares.push(createLogger());
  }

  return createStore(
    combineReducers({
      toDos: ToDosReducers,
      users: usersReducers,
      appRoot: appRootReducers,
      bernie: bernieReducers,
    }),
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
