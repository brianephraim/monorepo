import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import AppContainer from 'react-hot-loader/lib/AppContainer'
import App from './components/App'
import configureStore from './configureStore'

const history = createHistory()
const { store } = configureStore(history, window.REDUX_STATE)

const render = App => {
  const root = document.getElementById('root')

  ReactDOM.render(
    <AppContainer>
      <App store={store} />
    </AppContainer>,
    root
  )
}

render(App)
console.log('process.env.NODE_ENV2',process.env.NODE_ENV);
if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./components/App', () => {
    const App = require('./components/App').default
    render(App)
  })
}
