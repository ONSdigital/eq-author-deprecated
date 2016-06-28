export default function(injectReducer, injectSagas, loadModule, errorLoading) {
  return {
    path: '/',
    name: 'home',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('./containers/Schemas/reducer'),
        System.import('./containers/Schemas/sagas'),
        System.import('./containers/Schemas'),
      ])

      const renderRoute = loadModule(cb)

      importModules.then(([reducer, sagas, component]) => {
        injectReducer('schemas', reducer.default)
        injectSagas(sagas.default)
        renderRoute(component)
      })

      importModules.catch(errorLoading)
    }
  }
}
