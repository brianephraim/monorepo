import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
/* eslint-disable no-console */
/* eslint-disable prefer-template */
function renderReactRoot(Comp) {
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
    <Comp />,
    getRootEl()
  );

}
export default renderReactRoot;
