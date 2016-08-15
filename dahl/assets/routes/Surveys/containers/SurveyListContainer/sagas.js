import { LOCATION_CHANGE } from 'react-router-redux'

import { take, call, race } from 'redux-saga/effects'

import { loadSurveysWatcher, addSurveyWatcher } from './sagas/surveys'
import { addQuestionnaireWatcher, deleteQuestionnairesWatcher } from './sagas/questionnaires'

export function* sagas() {
  yield race([
    [
      call(loadSurveysWatcher),
      call(addSurveyWatcher),
      call(addQuestionnaireWatcher),
      call(deleteQuestionnairesWatcher),
    ],
    take(LOCATION_CHANGE)
  ])
}

export default [ sagas ]
