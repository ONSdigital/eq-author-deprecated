export default function(injectReducer, loadModule, errorLoading) {
  return {
    path: '/',
    name: 'home',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('./containers/Schemas/reducer'),
        System.import('./containers/Schemas'),
      ])

      const renderRoute = loadModule(cb)

      importModules.then(([reducer, component]) => {
        injectReducer('schemas', reducer.default)
        renderRoute(component)
      })

      importModules.catch(errorLoading)
    }
  }
}
