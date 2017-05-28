import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import ToDosReducers from 'toDos/state/reducers';
import { usersReducers } from 'users';
import appRootReducers from './appRootReducers';

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
    }),
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
