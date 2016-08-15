import { LOAD_SURVEYS, ADD_SURVEY } from './../constants'

import { take, call, put } from 'redux-saga/effects'
import * as actions from './../actions'

import request from 'utils/request'

export function* addSurvey(action) {
  yield put(actions.addSurveyRequest())
  // const response = yield call(request, `/api/v1/schema/${action.payload.surveyID}/`, {
  //   method: 'DELETE'
  // })

  const response = {

  }

  if (!response.err) {
    yield put(actions.addSurveySuccess(action.payload.survey))
  } else {
    yield put(actions.addSurveyFailure(response.err))
    window.alert('There was a problem deleting the survey. See the Console for errors.')
    console.error(response.err.response) // eslint-disable-line
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
  // const surveys = yield call(request, '/api/v1/schema/')
  const surveys = {
    data: [{
      'survey_id': '1',
      'title': 'My cool survey',
      'questionnaires': [{
        'eq_id': 20,
        'file_name': '20.json',
        'created': '2016-08-12T14:55:02.568881Z',
        'modified': '2016-08-12T14:55:03.257441Z',
        'title': 'Star Wars',
        'description': 'Kitchen sink test for the Star Wars questionnaire'
      }]
    }, {
      'survey_id': '2',
      'title': 'My cool survey II',
      'questionnaires': [{
        'eq_id': 21,
        'file_name': '21.json',
        'created': '2016-08-12T14:55:02.568881Z',
        'modified': '2016-08-12T14:55:03.257441Z',
        'title': 'Star Wars II',
        'description': 'Kitchen sink test for the Star Wars questionnaire'
      }, {
        'eq_id': 22,
        'file_name': '22.json',
        'created': '2016-08-12T14:55:02.568881Z',
        'modified': '2016-08-12T14:55:03.257441Z',
        'title': 'Star Wars III',
        'description': 'Kitchen sink test for the Star Wars questionnaire'
      }]
    }]
  }
  if (!surveys.err) {
    yield put(actions.fetchSurveysSuccess(surveys.data))
  } else {
    yield put(actions.fetchSurveysFailure(surveys.err))
    window.alert('There was a loading the surveys. See the Console for errors.')
    console.error(surveys.err.response) // eslint-disable-line
  }
}

export function* loadSurveysWatcher() {
  yield take(LOAD_SURVEYS)
  yield call(getSurveys)
}
