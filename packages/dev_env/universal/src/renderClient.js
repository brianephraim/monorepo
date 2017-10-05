import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'
import AppContainer from 'react-hot-loader/lib/AppContainer'
import App from './components/App'

export default function renderClient (App) {
  const history = createBrowserHistory();
  console.log('MAYBE I SHOULD DO SOMETHING SIMILR WITH MAINAPP ROUTESMAP AS REDUX_STATE BELOW')
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
  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('./components/App', () => {
      const App = require('./components/App').default
      render(App)
    })
  }
}
renderClient(App)





















































































































