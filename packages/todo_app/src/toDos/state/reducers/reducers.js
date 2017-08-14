import { combineReducers } from 'redux';
import toDosIdDictReducer from './toDosIdDictReducer';
import createToDoListReducers from './createToDoListReducers';

export const filterReducer = (state = 'all', action = {}) => {
  if(action.type === 'TODOS') {
    return action.payload.filter;
  }
  return state;
}

const listByFilter = combineReducers({
  all: createToDoListReducers('all'),
  active: createToDoListReducers('active'),
  completed: createToDoListReducers('completed'),
});

export default combineReducers({
  toDosIdDict: toDosIdDictReducer,
  listByFilter,
  filter: filterReducer,
});
