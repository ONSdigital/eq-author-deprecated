import { getAsyncComponent } from 'utils/asyncInjectors'

export default function(store) {
  return {
    path: '/surveys/',
    name: 'surveys',
    breadcrumbName: 'Surveys',
    getComponent: getAsyncComponent(store, {
      schemas: [
        System.import('./containers/SurveyListContainer/reducer'),
        System.import('./containers/SurveyListContainer/sagas'),
        System.import('./containers/SurveyListContainer'),
      ], addSurvey: [
        System.import('./containers/AddSurveyModal/reducer'),
        System.import('./containers/AddSurveyModal/sagas'),
      ]
    }),
  }
}
