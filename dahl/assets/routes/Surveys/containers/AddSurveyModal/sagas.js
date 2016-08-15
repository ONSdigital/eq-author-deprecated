import { take, call, put, select, race } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'

import { CREATE_SURVEY, CREATE_SURVEY_CANCEL } from './constants'
import { createSurvey, createSurveyRequest, createSurveySuccess, createSurveyFailure } from './actions'

export function* doCreateSurvey(action) {
  yield put(createSurveyRequest())

  console.log('doCreateSurvey')
  console.log(action)

  // const response = yield call(request, `/api/v1/schema/${action.payload.schemaId}/`, {
  //   method: 'DELETE'
  // })

  const response = {

  }

  if (!response.err) {
    yield put(createSurveySuccess(action.payload.survey))
  } else {
    yield put(createSurveyFailure(response.err))
    window.alert('There was a problem deleting the schema. See the Console for errors.')
    console.error(response.err.response) // eslint-disable-line
  }
}

export function* createSurveyWatcher() {
  console.log('createSurveyWatcher')
  while (true) {
    const action = yield take(CREATE_SURVEY)
    yield call(doCreateSurvey, action)
  }
}

export function* createSurveySaga() {
  console.log('createSurveySaga');
  yield race([
    [
      call(createSurveyWatcher),
    ],
    take([LOCATION_CHANGE, CREATE_SURVEY_CANCEL])
  ])
}

export default [
  createSurveySaga,
]
