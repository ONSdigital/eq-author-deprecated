import { getAsyncComponent } from 'utils/asyncInjectors'

export default function(store) {
  return {
    path: '/surveys/questionnaire/new/',
    name: 'new',
    breadcrumbName: 'Questionnaire',
    indexRoute: {
      getComponent: getAsyncComponent(store, {
        editor: [
          System.import('./containers/Editor/reducer'),
          System.import('./containers/Editor/sagas'),
          System.import('./containers/Editor'),
        ]
      })
    },
    childRoutes: [{
      path: '/surveys/questionnaire/:schemaID',
      name: 'edit',
      breadcrumbName: 'Edit',
      getComponent: getAsyncComponent(store, {
        editor: [
          System.import('./containers/Editor/reducer'),
          System.import('./containers/Editor/sagas'),
          System.import('./containers/Editor'),
        ]
      })
    }]
  }
}
