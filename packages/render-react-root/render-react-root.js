import React from 'react';
import ReactDOM from 'react-dom';

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

export default render;






















































