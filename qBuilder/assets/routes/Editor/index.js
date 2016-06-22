export default function(injectReducer, loadModule, errorLoading) {
  const getComponent = (nextState, cb) => {
    const importModules = Promise.all([
      System.import('./containers/Editor/reducer'),
      System.import('./containers/Editor'),
    ])

    const renderRoute = loadModule(cb)

    importModules.then(([reducer, component]) => {
      injectReducer('editor', reducer.default)
      renderRoute(component)
    })

    importModules.catch(errorLoading)
  }

  return {
    path: '/editor',
    name: 'new',
    indexRoute: {
      getComponent: getComponent
    },
    childRoutes: [{
      path: ':schemaID',
      name: 'edit',
      getComponent: getComponent
    }]
  }
}
