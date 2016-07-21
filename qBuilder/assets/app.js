/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import 'babel-polyfill'
import 'file?name=[name].[ext]!./.htaccess'      // eslint-disable-line import/no-unresolved

// Import all the third party stuff
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyRouterMiddleware, Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import useScroll from 'react-router-scroll'
import configureStore from './store'
import { getHooks } from 'utils/hooks'

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/lib/sanitize.css'

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)()`
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, browserHistory)

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
import { selectLocationState } from 'containers/App/selectors'
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState(),
})

// Set up the router, wrapping all Routes in the App component
import Auth from 'containers/Auth'
import routes from './routes'

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err) // eslint-disable-line no-console
}

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default)
}

const { injectReducer, injectSagas } = getHooks(store)

const rootRoute = {
  component: Auth,
  childRoutes: routes.map(route => route(injectReducer, injectSagas, loadModule, errorLoading)),
}

if (process.env.NODE_ENV === 'development') {
  if (window.devToolsExtension) {
    window.devToolsExtension.updateStore(store)
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      routes={rootRoute}
      render={applyRouterMiddleware(useScroll())}
    />
  </Provider>,
  document.getElementById('app')
)
