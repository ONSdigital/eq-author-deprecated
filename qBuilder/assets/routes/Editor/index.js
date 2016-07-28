export default function(injectReducer, injectSagas, loadModule, errorLoading) {
  const getComponent = (nextState, cb) => {
    const importModules = Promise.all([
      System.import('./containers/Editor/reducer'),
      System.import('./containers/Editor/sagas'),
      System.import('./containers/Editor'),
    ])

    const renderRoute = loadModule(cb)

    importModules.then(([reducer, sagas, component]) => {
      injectReducer('editor', reducer.default)
      injectSagas(sagas.default)
      renderRoute(component)
    })

    importModules.catch(errorLoading)
  }

  return {
    path: '/editor/',
    name: 'new',
    breadcrumbName: 'Editor',
    indexRoute: {
      getComponent: getComponent
    },
    childRoutes: [{
      path: ':schemaID',
      name: 'edit',
      breadcrumbName: 'Edit',
      getComponent: getComponent
    }]
  }
}
