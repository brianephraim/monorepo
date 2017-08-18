import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Routing from './Routing';
import integrateBernie from 'bernie/mainAppIntegration'
import integrateToDoApp from 'todo_app/mainAppIntegration'
import integrateBattleship from 'battleship/mainAppIntegration'
import './reset.css';

// import '#./asdf';

integrateBernie();
integrateToDoApp();
integrateBattleship();

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

render(
  <Routing />,
  getRootEl()
);
