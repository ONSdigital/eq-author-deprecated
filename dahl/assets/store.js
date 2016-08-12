/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS } from 'immutable'
import { routerMiddleware } from 'react-router-redux'

import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducers'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()
const devtools = window.devToolsExtension || (() => noop => noop)

export let store

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    loggerMiddleware,
    sagaMiddleware,
    routerMiddleware(history),
  ]

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools(),
  ]

  store = createStore(
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
