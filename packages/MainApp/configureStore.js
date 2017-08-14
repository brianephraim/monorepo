import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import {routingReducers, routingMiddleware, routingEnhancer} from './Routing';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import ToDosReducers from 'todo_app/src/toDos/state/reducers';
import { usersReducers } from 'todo_app/src/users';
import { bernieReducers } from 'bernie/state';
import appRootReducers from './appRootReducers';
import history from '@defualt/shared-history';

const routerMiddlewareWithHistory = routerMiddleware(history);

const configureStore = () => {
  const middlewares = [thunk, routerMiddlewareWithHistory, routingMiddleware];
  if (process.env.NODE_ENV !== 'production') {
    // middlewares.push(createLogger());
  }

  return createStore(
    combineReducers({
      ...routingReducers,
      toDos: ToDosReducers,
      users: usersReducers,
      appRoot: appRootReducers,
      bernie: bernieReducers,
      router: routerReducer,
    }),
    // middleware/* applyMiddleware(middleware)
    // /* createStore(rootReducer, compose(routingEnhancer, middlewares))
    compose(routingEnhancer, applyMiddleware(...middlewares))
  );
};

export default configureStore;
