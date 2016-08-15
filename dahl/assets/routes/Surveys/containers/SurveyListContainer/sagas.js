import { LOAD_SURVEYS, DELETE_QUESTIONNAIRE, CREATE_SURVEY } from './constants'
import { LOCATION_CHANGE } from 'react-router-redux'

import { take, call, put, race } from 'redux-saga/effects'
import { fetchSurveysRequest, fetchSurveysSuccess, fetchSurveysFailure,
         deleteQuestionnaireRequest, deleteQuestionnaireSuccess, deleteQuestionnaireFailure,
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

export function* deleteQuestionnaire(action) {
  yield put(deleteQuestionnaireRequest())

  const surveys = yield call(request, `/api/v1/schema/${action.payload.surveyId}/`, {
    method: 'DELETE'
  })

  if (!surveys.err) {
    yield put(deleteQuestionnaireSuccess(action.payload.surveyId))
  } else {
    yield put(deleteQuestionnaireFailure())
    window.alert('There was a problem deleting the survey. See the Console for errors.')
    console.error(surveys.err.response) // eslint-disable-line
  }
}

export function* deleteQuestionnairesWatcher() {
  while (true) {
    const action = yield take(DELETE_QUESTIONNAIRE)
    yield call(deleteQuestionnaire, action)
  }
}

export function* surveysData() {
  yield race([
    [
      call(loadSurveysWatcher),
      call(deleteQuestionnairesWatcher),
      call(createSurveyWatcher),
    ],
    take(LOCATION_CHANGE)
  ])
}

export default [
  surveysData,
]
