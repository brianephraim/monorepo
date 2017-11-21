import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'
import AppContainer from 'react-hot-loader/lib/AppContainer'
import App from './components/App'


export default function renderClient (App1) {
  const history = createBrowserHistory();
  const { store, injectReducers, client } = configureStore(history, window.REDUX_STATE);

  function getRootEl() {
    let rootEl = document.getElementById('root');
    if (!rootEl) {
      rootEl = document.createElement('div');
      rootEl.id = 'root';
      document.body.appendChild(rootEl);
    }
    return rootEl;
  }

  const render = App3 => {
    const root = getRootEl();

    ReactDOM.render(
      <AppContainer>
        <App3 store={store} injectReducers={injectReducers} client={client} />
      </AppContainer>,
      root
    )
  }

  render(App1);
  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('./components/App', () => {
      const App2 = require('./components/App').default
      render(App2)
    })
  }
}
renderClient(App)





















































































































