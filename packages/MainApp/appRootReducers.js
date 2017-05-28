import { combineReducers } from 'redux';

export default combineReducers({
  toBeAssigned: (state = null, action) => {
    switch (action.type) {
      case 'PREPARE_EXTERNAL_ASSIGNMENT':
        return action.userId;
      default:
        return state;
    }
  },
});
