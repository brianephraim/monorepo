import React from 'react'
import { Provider } from 'react-redux'

import {Helmet} from "react-helmet";
import { connect } from 'react-redux'
import { TransitionGroup, Transition } from 'transition-group'
import universal from 'react-universal-component'
import { addRoutes } from 'redux-first-router'
import { combineReducers } from 'redux'

import DevTools from './DevTools'
import Sidebar from './Sidebar'

import styles from '../css/App'



import Loading from './Loading'
import Err from './Error'
import isLoading from '../selectors/isLoading'
import switcherStyles from '../css/Switcher'

import routeData from 'virtual-module-initial-app';

const UniversalComponent = universal(
  ({ page }) => {
    const imported = import(`./${page}`);
    return imported;
  },
  {
    minDelay: 500,
    loading: Loading,
    error: Err,
    onLoad: (module, info, props, context) => {
      console.log(module);
      if(module){
        if (module.routesMap) {
          const aThunk = addRoutes(module.routesMap) // export new routes from component file
          context.store.dispatch(aThunk)
        }
        if (module.reducers) {
          context.store.replaceReducer(combineReducers(props.addReducers(module.reducers)))
        }
      }

      // // if a route triggered component change, new reducers needs to reflect it
      // context.store.dispatch({ type: 'INIT_ACTION_FOR_ROUTE', payload: { param: props.param } })
       
    }
  }
)


let DemoWrapper = ({ page, direction, location, children }) => {
  if (location.pathname.indexOf('/willard') !== 0) {
    return children;
  }
  return (
    <div className={styles.app}>
      <Sidebar />
      <TransitionGroup
        className={`${switcherStyles.switcher} ${direction}`}
        duration={500}
        prefix='fade'
      >
        <Transition key={page}>
          <div>
            {children}
            <DevTools />
          </div>
        </Transition>
      </TransitionGroup>
    </div>
  );
};

DemoWrapper = connect(({ page, direction,location }) => ({
  page,
  direction,
  location,
}))(DemoWrapper)


let Switcher = ({ page, isLoading, addReducers }) => {
  console.log('page!!',page);
 if (page === 'BATTLESHIP') {
    page = 'Migration';
  }
  const Comp = page === 'Migration' ? routeData.routeRootComponent : UniversalComponent;
  return (
    <DemoWrapper>
      <Comp page={page} isLoading={isLoading} addReducers={addReducers} />
    </DemoWrapper>
  );
};

Switcher = connect(({ page, ...state }) => ({
  page,
  isLoading: isLoading(state)
}))(Switcher)


let HeadStuff = () => {
  return (<Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>
  </Helmet>)
};




export default ({store,addReducers}) => {
  return (
    <Provider store={store} >
      <div>
        <HeadStuff />
        <Switcher addReducers={addReducers} />
      </div>
    </Provider>
  );
};

/*
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
export default function App (props) {
  return (
    <Provider store={props.store}>
      <p>H!</p>
    </Provider>
    
  );
}

*/
