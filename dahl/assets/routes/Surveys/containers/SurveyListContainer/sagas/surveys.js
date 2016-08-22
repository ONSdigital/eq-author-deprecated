import { LOAD_SURVEYS, ADD_SURVEY } from './../constants'

import { take, call, put } from 'redux-saga/effects'
import * as actions from './../actions'

import request from 'utils/request'

export function* addSurvey(action) {
  yield put(actions.addSurveyRequest())

  const response = yield call(request, '/api/v1/surveys/', {
    method: 'POST',
    body: action.payload.survey
  })

  if (!response.err) {
    yield put(actions.addSurveySuccess(response.data))
  } else {
    const errors = yield response.err.response.json()
    yield put(actions.addSurveyFailure(errors))
  }
}

export function* addSurveyWatcher() {
  while (true) {
    const action = yield take(ADD_SURVEY)
    yield call(addSurvey, action)
  }
}

export function* getSurveys() {
  yield put(actions.fetchSurveysRequest())
  const response = yield call(request, '/api/v1/surveys/')

  if (!response.err) {
    const surveys = response.data
    yield put(actions.fetchSurveysSuccess(surveys))
  } else {
    yield put(actions.fetchSurveysFailure(response.err))
    console.error(response.err.response) // eslint-disable-line
  }
}

export function* loadSurveysWatcher() {
  while (true) {
    yield take(LOAD_SURVEYS)
    yield call(getSurveys)
  }
}
