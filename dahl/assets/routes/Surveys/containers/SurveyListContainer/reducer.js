/*
 *
 * Surveys reducer
 *
 */

import {
  List,
  fromJS
} from 'immutable'

import * as actions from './constants'

export const initialState = fromJS({
  addQuestionnaireModal: {
    visible: false,
  },
  addSurveyModal: {
    visible: false,
  },
  isFetching: false,
  items: [],
  error: ''
})

const surveysReducer = (state = initialState, action) => {
  switch (action.type) {

    case actions.FETCH_SURVEYS_REQUEST:
      return state
        .set('isFetching', true)

    case actions.FETCH_SURVEYS_SUCCESS:
      return state
        .set('isFetching', false)
        .set('items', List(action.payload.surveys))

    case actions.FETCH_SURVEYS_FAILURE:
      return state
        .set('isFetching', false)
        .set('error', action.error)

    case actions.DELETE_QUESTIONNAIRE_SUCCESS:
      return state
        .set('items', state.get('items').filter(item => action.payload.surveyID !== item.eq_id))

    case actions.ADD_QUESTIONNAIRE:
      return state.set('addQuestionnaireModal', {
        visible: false,
        questionnaireDetails: action.payload.questionnaireDetails
      })

    case actions.ADD_QUESTIONNAIRE_CANCEL:
      return state.set('addQuestionnaireModal', {
        visible: false,
      })

    case actions.TOGGLE_ADD_QUESTIONNAIRE_MODAL:
      return state.set('addQuestionnaireModal', {
        visible: action.payload.visible
      })

    case actions.TOGGLE_ADD_SURVEY_MODAL:
      return state.set('addSurveyModal', {
        visible: action.payload.visible
      })

    case actions.ADD_SURVEY:
      return state.set('addSurveyModal', {
        visible: false,
        surveyID: action.payload.surveyID
      })

    case actions.ADD_SURVEY_CANCEL:
      return state.set('addSurveyModal', {
        visible: false
      })

    case actions.ADD_SURVEY_REQUEST:
      return state.set('isFetching', true)

    case actions.ADD_SURVEY_SUCCESS:
      return state.set('isFetching', false)

    default:
      return state
  }
}

export default surveysReducer
