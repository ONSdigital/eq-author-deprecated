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

export function toggleAddQuestionnaireModal(visible) {
  return {
    type: actions.TOGGLE_ADD_QUESTIONNAIRE_MODAL,
    payload: {
      visible: visible
    }
  }
}

export function addQuestionnaire(questionnaireDetails) {
  return {
    type: actions.ADD_QUESTIONNAIRE,
    payload: {
      questionnaireDetails: questionnaireDetails
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

export function addQuestionnaireSuccess(surveyID) {
  return {
    type: actions.ADD_QUESTIONNAIRE_SUCCESS,
    payload: {
      surveyID: surveyID
    }
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

export function deleteQuestionnaire(surveyID) {
  return {
    type: actions.DELETE_QUESTIONNAIRE,
    payload: {
      surveyID: surveyID
    }
  }
}

export function deleteQuestionnaireRequest() {
  return {
    type: actions.DELETE_QUESTIONNAIRE_REQUEST
  }
}

export function deleteQuestionnaireSuccess(surveyID) {
  return {
    type: actions.DELETE_QUESTIONNAIRE_SUCCESS,
    payload: {
      surveyID: surveyID
    }
  }
}

export function deleteQuestionnaireFailure() {
  return {
    type: actions.DELETE_QUESTIONNAIRE_FAILURE
  }
}
