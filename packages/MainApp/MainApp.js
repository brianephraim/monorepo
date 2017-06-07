import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Routing from './Routing';
import configureStore from './configureStore';

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

const store = configureStore();
render(
  <Routing store={store} />,
  getRootEl()
);
