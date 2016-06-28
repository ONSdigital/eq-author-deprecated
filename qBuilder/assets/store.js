/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS } from 'immutable'
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducers'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()
const devtools = window.devToolsExtension || (() => noop => noop)

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    apiMiddleware,
    thunkMiddleware,
    loggerMiddleware,
    sagaMiddleware,
    routerMiddleware(history),
  ]

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools(),
  ]

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  )

  store.runSaga = sagaMiddleware.run
  store.asyncReducers = {}
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      System.import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default
        const nextReducers = createReducers(store.asyncReducers)
        store.replaceReducer(nextReducers)
      })
    })
  }

  return store
}
