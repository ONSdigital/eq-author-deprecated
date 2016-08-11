import createReducer from '../reducers'
/**
 * Inject an asynchronously loaded reducer
 */
export function injectAsyncReducer(store) {
  return (name, asyncReducer) => {
    store.asyncReducers[name] = asyncReducer // eslint-disable-line no-param-reassign
    store.replaceReducer(createReducer(store.asyncReducers))
  }
}

/**
 * Inject an asynchronously loaded saga
 */
export function injectAsyncSagas(store) {
  return (sagas) => sagas.map(store.runSaga)
}

/**
 * Helper for creating injectors
 */
export function getAsyncInjectors(store) {
  return {
    injectReducer: injectAsyncReducer(store),
    injectSagas: injectAsyncSagas(store),
  }
}

export const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err) // eslint-disable-line no-console
}

export const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default)
}

export const getAsyncComponent = (store, name, imports) => (nextState, cb) => {
  const importModules = Promise.all(imports)
  const renderRoute = loadModule(cb)
  const { injectReducer, injectSagas } = getAsyncInjectors(store)

  importModules.then(([reducer, sagas, component]) => {
    injectReducer(name, reducer.default)
    injectSagas(sagas.default)
    renderRoute(component)
  })

  importModules.catch(errorLoading)
}
