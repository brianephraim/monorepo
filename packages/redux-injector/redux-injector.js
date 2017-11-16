import { createStore, combineReducers } from 'redux';
import { set, has } from 'lodash';

console.log(combineReducers.toString());
let combine = (...args) => {
  try{
    return combineReducers(...args);
  } catch(e) {
    // console.log  (e);
  }
};

function combineReducersRecurse(reducers) {
  // If this is a leaf or already combined.
  if (typeof reducers === 'function') {
    return reducers;
  }

  // If this is an object of functions, combine reducers.
  if (typeof reducers === 'object') {
    let combinedReducers = {};
    for (let key of Object.keys(reducers)) {
      combinedReducers[key] = combineReducersRecurse(reducers[key]);
    }
    return combine(combinedReducers);
  }

  // If we get here we have an invalid item in the reducer path.
  throw new Error({
    message: 'Invalid item in reducer tree',
    item: reducers
  });
}


export default function createStoreAndInjector(initialReducers, ...args) {
  let store = {};
  // If last item is an object, it is overrides.
  if (typeof args[args.length - 1] === 'object') {
    const overrides = args.pop();
    // Allow overriding the combineReducers function such as with redux-immutable.
    if (overrides.hasOwnProperty('combineReducers') && typeof overrides.combineReducers === 'function') {
      combine = overrides.combineReducers;
    }
  }

  store = createStore(
    combineReducersRecurse(initialReducers),
    ...args
  );

  store.injectedReducers = initialReducers;

  // singular
  function injectReducer (key, reducer, force = false) {
    if (typeof key === 'object') {
      
    }
    // If already set, do nothing.
    if (has(store.injectedReducers, key) || force) return;

    set(store.injectedReducers, key, reducer);
    store.replaceReducer(combineReducersRecurse(store.injectedReducers));
  }

  // multiple
  function injectReducers(key, reducerOrDict, force = false) {
    if (typeof reducerOrDict === 'object') {
      const dict = reducerOrDict;
      Object.keys(dict).forEach((reducerKey) => {
        const reducer = dict[reducerKey];
        const prefix = key ? `${key}.` : '';
        injectReducer(`${prefix}${reducerKey}`, reducer, force);
      });
    } else {
      injectReducer(key, reducerOrDict, force);
    }
  }

  return {
    store,
    injectReducers,
  };
}

