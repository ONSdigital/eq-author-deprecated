import { DELETE_QUESTIONNAIRE, ADD_QUESTIONNAIRE } from './../constants'

import { take, call, put } from 'redux-saga/effects'
import * as actions from './../actions'

import request from 'utils/request'

export function* addQuestionnaire(action) {
  yield put(actions.addQuestionnaireRequest())
  const response = yield call(request, 'schema/', {
    method: 'POST',
    body: {
      'mime_type': 'application/json/ons/eq',
      'questionnaire_id': '0',
      'schema_version': '0.0.1',
      'survey_id': action.payload.questionniareDetails.surveyID,
      'title': action.payload.questionniareDetails.title,
      'description': '',
      'introduction': {},
      'groups': [],
      'theme': 'default'
    }
  })

  if (!response.err) {
    yield put(actions.addQuestionnaireSuccess())
    yield put(actions.loadSurveys())
  } else {
    yield put(actions.addQuestionnaireFailure(response.err))
    // window.alert('There was a problem adding this questionnaire. See the Console for errors.')
    console.error(response.err) // eslint-disable-line
  }
}

export function* deleteQuestionnaire(action) {
  yield put(actions.deleteQuestionnaireRequest())

  const response = yield call(request, `schema/${action.payload.questionnaireID}/`, {
    method: 'DELETE'
  })

  if (!response.err) {
    yield put(actions.deleteQuestionnaireSuccess(action.payload.questionnaireID))
    yield put(actions.loadSurveys())
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
