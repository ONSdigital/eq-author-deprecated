/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import 'babel-polyfill'
// Import all the third party stuff
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import 'sanitize.css/sanitize.css'

import App from 'containers/App'
import Login from 'containers/Login'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)

if (process.env.NODE_ENV === 'development') {
  if (window.devToolsExtension) {
    window.devToolsExtension.updateStore(store)
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Login />
    </App>
  </Provider>,
  document.getElementById('app')
)
