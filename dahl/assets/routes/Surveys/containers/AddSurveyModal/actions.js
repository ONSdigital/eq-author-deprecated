/*
 *
 * AddSurveyModal actions
 *
 */

import {
  CREATE_SURVEY,
  CREATE_SURVEY_CANCEL,
  CREATE_SURVEY_REQUEST,
  CREATE_SURVEY_SUCCESS,
  CREATE_SURVEY_FAILURE
} from './constants'

export function createSurvey(surveyDetails) {
  return {
    type: CREATE_SURVEY,
    payload: {
      survey: surveyDetails
    }
  }
}

export function createSurveyRequest() {
  return {
    type: CREATE_SURVEY_REQUEST
  }
}

export function createSurveyCancel() {
  return {
    type: CREATE_SURVEY_CANCEL
  }
}

export function createSurveySuccess() {
  return {
    type: CREATE_SURVEY_SUCCESS
  }
}

export function createSurveyFailure(error) {
  return {
    type: CREATE_SURVEY_FAILURE,
    error
  }
}
