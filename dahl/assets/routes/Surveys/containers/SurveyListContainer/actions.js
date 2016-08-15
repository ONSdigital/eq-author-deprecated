/*
 *
 * Surveys actions
 *
 */

import * as actions from './constants'

export function loadSurveys() {
  return {
    type: actions.LOAD_SURVEYS,
  }
}

export function fetchSurveysRequest() {
  return {
    type: actions.FETCH_SURVEYS_REQUEST,
  }
}

export function fetchSurveysSuccess(surveys) {
  return {
    type: actions.FETCH_SURVEYS_SUCCESS,
    payload: {
      surveys: surveys
    }
  }
}

export function fetchSurveysFailure(error) {
  return {
    type: actions.FETCH_SURVEYS_FAILURE,
    error
  }
}

export function deleteSurvey(surveyId) {
  return {
    type: actions.DELETE_SURVEY,
    payload: {
      surveyId: surveyId
    }
  }
}

export function deleteSurveyRequest() {
  return {
    type: actions.DELETE_SURVEY_REQUEST
  }
}

export function deleteSurveySuccess(surveyId) {
  return {
    type: actions.DELETE_SURVEY_SUCCESS,
    payload: {
      surveyId: surveyId
    }
  }
}

export function deleteSurveyFailure() {
  return {
    type: actions.DELETE_SURVEY_FAILURE
  }
}

export function createSurvey(surveyDetails) {
  return {
    type: actions.CREATE_SURVEY,
    payload: {
      survey: surveyDetails
    }
  }
}

export function createSurveyRequest() {
  return {
    type: actions.CREATE_SURVEY_REQUEST
  }
}

export function createSurveyCancel() {
  return {
    type: actions.CREATE_SURVEY_CANCEL
  }
}

export function createSurveySuccess() {
  return {
    type: actions.CREATE_SURVEY_SUCCESS
  }
}

export function createSurveyFailure(error) {
  return {
    type: actions.CREATE_SURVEY_FAILURE,
    error
  }
}
