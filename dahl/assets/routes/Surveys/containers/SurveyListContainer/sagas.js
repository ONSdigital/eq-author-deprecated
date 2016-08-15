import { LOAD_SURVEYS, DELETE_SURVEY, CREATE_SURVEY } from './constants'
import { LOCATION_CHANGE } from 'react-router-redux'

import { take, call, put, race } from 'redux-saga/effects'
import { fetchSurveysRequest, fetchSurveysSuccess, fetchSurveysFailure,
         deleteSurveyRequest, deleteSurveySuccess, deleteSurveyFailure,
         createSurveyRequest, createSurveySuccess, createSurveyFailure } from './actions'

import request from 'utils/request'

export function* createSurvey(action) {
  yield put(createSurveyRequest())
  // const response = yield call(request, `/api/v1/schema/${action.payload.surveyId}/`, {
  //   method: 'DELETE'
  // })

  const response = {

  }

  if (!response.err) {
    yield put(createSurveySuccess(action.payload.survey))
  } else {
    yield put(createSurveyFailure(response.err))
    window.alert('There was a problem deleting the survey. See the Console for errors.')
    console.error(response.err.response) // eslint-disable-line
  }
}

export function* createSurveyWatcher() {
  while (true) {
    const action = yield take(CREATE_SURVEY)
    yield call(createSurvey, action)
  }
}

export function* getSurveys() {
  yield put(fetchSurveysRequest())
  const surveys = yield call(request, '/api/v1/schema/')
  if (!surveys.err) {
    yield put(fetchSurveysSuccess(surveys.data))
  } else {
    yield put(fetchSurveysFailure(surveys.err))
    window.alert('There was a loading the surveys. See the Console for errors.')
    console.error(surveys.err.response) // eslint-disable-line
  }
}

export function* loadSurveysWatcher() {
  yield take(LOAD_SURVEYS)
  yield call(getSurveys)
}

export function* deleteSurvey(action) {
  yield put(deleteSurveyRequest())

  const surveys = yield call(request, `/api/v1/schema/${action.payload.surveyId}/`, {
    method: 'DELETE'
  })

  if (!surveys.err) {
    yield put(deleteSurveySuccess(action.payload.surveyId))
  } else {
    yield put(deleteSurveyFailure())
    window.alert('There was a problem deleting the survey. See the Console for errors.')
    console.error(surveys.err.response) // eslint-disable-line
  }
}

export function* deleteSurveysWatcher() {
  while (true) {
    const action = yield take(DELETE_SURVEY)
    yield call(deleteSurvey, action)
  }
}

export function* surveysData() {
  yield race([
    [
      call(loadSurveysWatcher),
      call(deleteSurveysWatcher),
      call(createSurveyWatcher),
    ],
    take(LOCATION_CHANGE)
  ])
}

export default [
  surveysData,
]
