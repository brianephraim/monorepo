import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { connectRoutes, addRoutes, redirect, NOT_FOUND } from 'redux-first-router'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import configureStore from 'dev_env/universal/src/configureStore';



let rootEl;
function getRootEl() {
  if (rootEl) {
    return rootEl;
  }
  rootEl = document.getElementById('root');
  if (!rootEl) {
    rootEl = document.createElement('div');
    rootEl.id = 'root';
    document.body.appendChild(rootEl);
  }
  return rootEl;
}


const render = App => {
  const root = getRootEl();

  ReactDOM.render(

    <App />,

    root
  )
}

function renderReactRoot(Comp,routeData,addRoutesToApp) {


  const history = createBrowserHistory();
 
  const { store } = configureStore(history, window.REDUX_STATE)

  function RoutingApp () {
    return (
      <Provider store={store}>
        <Comp />
      </Provider>
      
    );
  }


  

  render(RoutingApp);

}
export default renderReactRoot;






















































