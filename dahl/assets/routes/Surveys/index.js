import { getAsyncComponent } from 'utils/asyncInjectors'

export default function(store) {
  return {
    path: '/surveys/',
    name: 'surveys',
    breadcrumbName: 'Surveys',
    getComponent: getAsyncComponent(store, {
      surveys: [
        System.import('./containers/SurveyListContainer/reducer'),
        System.import('./containers/SurveyListContainer/sagas'),
        System.import('./containers/SurveyListContainer'),
      ]
    }),
  }
}
