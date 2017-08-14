import { connectRoutes,NOT_FOUND } from 'redux-first-router';
import history from '@defualt/shared-history';

export const userIdReducer = (state = null, action = {}) => {
  switch(action.type) {
    case 'HOME':
    case NOT_FOUND:
      return null
    case 'USER':
      return action.payload.id
    default: 
      return state
  }
}
// THE WORK:
const routesMap = { 
  HOME: '/home',      // action <-> url path
  USER: '/user/:id',  // :id is a dynamic segment
}

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap) // yes, 3 redux aspects
export { reducer, middleware, enhancer };