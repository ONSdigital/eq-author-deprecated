export default function(injectReducer, injectSagas, loadModule, errorLoading) {
  return {
    path: '/surveys/',
    name: 'surveys',
    breadcrumbName: 'Surveys',
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        System.import('./containers/SurveyListContainer/reducer'),
        System.import('./containers/SurveyListContainer/sagas'),
        System.import('./containers/SurveyListContainer'),
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
