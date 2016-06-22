export default function(injectReducer, loadModule, errorLoading) {
  return {
    path: '/editor',
    name: 'new',
    indexRoute: {
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Editor/reducer'),
          System.import('containers/Editor'),
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([reducer, component]) => {
          injectReducer('editor', reducer.default)
          renderRoute(component)
        })

        importModules.catch(errorLoading)
      }
    },
    childRoutes: [{
      path: ':schemaID',
      name: 'edit',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Editor/reducer'),
          System.import('containers/Editor'),
        ])

        const renderRoute = loadModule(cb)

        importModules.then(([reducer, component]) => {
          injectReducer('editor', reducer.default)
          renderRoute(component)
        })

        importModules.catch(errorLoading)
      }
    }]
  }
}
