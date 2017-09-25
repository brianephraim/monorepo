import React from 'react'
import { Provider } from 'react-redux'

import {Helmet} from "react-helmet";
import { connect } from 'react-redux'
import { TransitionGroup, Transition } from 'transition-group'
import universal from 'react-universal-component'
import { addRoutes } from 'redux-first-router'

import DevTools from './DevTools'
import Sidebar from './Sidebar'

import styles from '../css/App'



import Loading from './Loading'
import Err from './Error'
import isLoading from '../selectors/isLoading'
import switcherStyles from '../css/Switcher'


const UniversalComponent = universal(
  ({ page }) => {
    if (page === 'BATTLESHIP') {
      page = 'Migration';
    }
    const imported = import(`./${page}`)
    // imported.then((...args) => {console.log('!!!',args)})
    return imported
  },
  {
    minDelay: 500,
    loading: Loading,
    error: Err,
    onLoad: (module, info, props, context) => {
      // console.log('module',module)
      // console.log('info',info)
      // console.log('props',props)
      // console.log('context',context)
  /*
       const aThunk = addRoutes(module.newRoutes) // export new routes from component file
       context.store.dispatch(aThunk)

       context.store.replaceReducer({ ...otherReducers, foo: module.fooReducer })

       // if a route triggered component change, new reducers needs to reflect it
       context.store.dispatch({ type: 'INIT_ACTION_FOR_ROUTE', payload: { param: props.param } })
       */
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


let Switcher = ({ page, isLoading }) =>
  <DemoWrapper>
    <UniversalComponent page={page} isLoading={isLoading} />
  </DemoWrapper>

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




export default (props) =>
  <Provider store={props.store}>
    <div>
      <HeadStuff />
      <Switcher />
    </div>
  </Provider>

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
