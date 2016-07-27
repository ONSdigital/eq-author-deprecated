export default function(injectReducer, injectSagas, loadModule, errorLoading) {
  return {
    path: '/surveys/',
    name: 'surveys',
    breadcrumbName: 'Surveys',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('./containers/Surveys/reducer'),
        System.import('./containers/Surveys/sagas'),
        System.import('./containers/Surveys'),
      ])

      const renderRoute = loadModule(cb)

      importModules.then(([reducer, sagas, component]) => {
        injectReducer('surveys', reducer.default)
        injectSagas(sagas.default)
        renderRoute(component)
      })

      importModules.catch(errorLoading)
    }
  }
}
