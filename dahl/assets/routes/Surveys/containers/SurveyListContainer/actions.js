/*
 *
 * Surveys actions
 *
 */

import * as actions from './constants'

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Load surveys
 * * * * * * * * * * * * * * * * * * * * * * * * */

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

export function fetchSurveysFailure(errors) {
  return {
    type: actions.FETCH_SURVEYS_FAILURE,
    errors: errors
  }
}

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Create survey
 * * * * * * * * * * * * * * * * * * * * * * * * */

export function toggleAddSurveyModal(visible) {
  return {
    type: actions.TOGGLE_ADD_SURVEY_MODAL,
    payload: {
      visible: visible
    }
  }
}

export function addSurvey(surveyDetails) {
  return {
    type: actions.ADD_SURVEY,
    payload: {
      survey: surveyDetails
    }
  }
}

export function addSurveyRequest() {
  return {
    type: actions.ADD_SURVEY_REQUEST
  }
}

export function addSurveyCancel() {
  return {
    type: actions.ADD_SURVEY_CANCEL
  }
}

export function addSurveySuccess(survey) {
  return {
    type: actions.ADD_SURVEY_SUCCESS,
    payload: {
      survey: survey
    }
  }
}

export function addSurveyFailure(errors) {
  return {
    type: actions.ADD_SURVEY_FAILURE,
    errors: errors
  }
}

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Add questionnaire
 * * * * * * * * * * * * * * * * * * * * * * * * */

export function toggleAddQuestionnaireModal(visible, surveyID) {
  return {
    type: actions.TOGGLE_ADD_QUESTIONNAIRE_MODAL,
    payload: {
      visible: visible,
      surveyID: surveyID
    }
  }
}

export function addQuestionnaire(questionniareDetails) {
  return {
    type: actions.ADD_QUESTIONNAIRE,
    payload: {
      questionniareDetails: questionniareDetails
    }
  }
}

export function addQuestionnaireCancel() {
  return {
    type: actions.ADD_QUESTIONNAIRE_CANCEL,
  }
}

export function addQuestionnaireRequest() {
  return {
    type: actions.ADD_QUESTIONNAIRE_REQUEST
  }
}

export function addQuestionnaireSuccess() {
  return {
    type: actions.ADD_QUESTIONNAIRE_SUCCESS,
  }
}

export function addQuestionnaireFailure() {
  return {
    type: actions.ADD_QUESTIONNAIRE_FAILURE
  }
}

/* * * * * * * * * * * * * * * * * * * * * * * * *
 * Delete questionnaire
 * * * * * * * * * * * * * * * * * * * * * * * * */

export function deleteQuestionnaire(questionnaireID) {
  return {
    type: actions.DELETE_QUESTIONNAIRE,
    payload: {
      questionnaireID: questionnaireID
    }
  }
}

export function deleteQuestionnaireRequest() {
  return {
    type: actions.DELETE_QUESTIONNAIRE_REQUEST
  }
}

export function deleteQuestionnaireSuccess(questionnaireID) {
  return {
    type: actions.DELETE_QUESTIONNAIRE_SUCCESS,
    payload: {
      questionnaireID: questionnaireID
    }
  }
}

export function deleteQuestionnaireFailure() {
  return {
    type: actions.DELETE_QUESTIONNAIRE_FAILURE
  }
}
