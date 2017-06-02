import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Routing from './Routing';
import configureStore from './configureStore';

import 'sum/sum.mod';

import 'aaa1';
import aaa2 from 'aaa2';
console.log('aaa2',aaa2);

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
