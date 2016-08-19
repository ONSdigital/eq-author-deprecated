import { DELETE_QUESTIONNAIRE, ADD_QUESTIONNAIRE } from './../constants'

import { take, call, put } from 'redux-saga/effects'
import * as actions from './../actions'

import request from 'utils/request'

export function* addQuestionnaire(action) {
  yield put(actions.addQuestionnaireRequest())
  const response = yield call(request, `/api/v1/schema/${action.payload.surveyID}/`, {
    body: {}
  })

  if (!response.err) {
    yield put(actions.addQuestionnaireSuccess(action.payload.survey))
  } else {
    yield put(actions.addQuestionnaireFailure(response.err))
    window.alert('There was a problem deleting the survey. See the Console for errors.')
    console.error(response.err.response) // eslint-disable-line
  }
}

export function* deleteQuestionnaire(action) {
  yield put(actions.deleteQuestionnaireRequest())

  const response = yield call(request, `/api/v1/schema/${action.payload.surveyID}/`, {
    method: 'DELETE'
  })

  if (!response.err) {
    yield put(actions.deleteQuestionnaireSuccess(action.payload.surveyID))
  } else {
    yield put(actions.deleteQuestionnaireFailure())
    window.alert('There was a problem deleting the survey. See the Console for errors.')
    console.error(response.err.response) // eslint-disable-line
  }
}

export function* deleteQuestionnairesWatcher() {
  while (true) {
    const action = yield take(DELETE_QUESTIONNAIRE)
    yield call(deleteQuestionnaire, action)
  }
}

export function* addQuestionnaireWatcher(action) {
  while (true) {
    const action = yield take(ADD_QUESTIONNAIRE)
    yield call(addQuestionnaire, action)
  }
}
