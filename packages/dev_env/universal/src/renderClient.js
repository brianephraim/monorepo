import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'
import AppContainer from 'react-hot-loader/lib/AppContainer'

export default function (App) {
  const history = createBrowserHistory();

  const { store } = configureStore(history, window.REDUX_STATE);

  function getRootEl() {
    let rootEl = document.getElementById('root');
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
      <AppContainer>
        <App store={store} />
      </AppContainer>,
      root
    )
  }

  render(App);

  if (module.hot && process && process.env && process.env.NODE_ENV === 'development') {
    module.hot.accept('./components/App', () => {
      const App = require('./components/App').default
      render(App)
    })
  }
}






















































































































