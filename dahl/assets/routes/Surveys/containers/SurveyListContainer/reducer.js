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
    errors: []
  },
  addSurveyModal: {
    visible: false,
    errors: []
  },
  isFetching: false,
  items: [],
  errors: []
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
        .set('errors', action.errors)

    case actions.TOGGLE_ADD_SURVEY_MODAL:
      return state
        .setIn(['addSurveyModal', 'visible'], action.payload.visible)

    case actions.ADD_SURVEY:
      return state

    case actions.ADD_SURVEY_CANCEL:
      return state
        .setIn(['addSurveyModal', 'visible'], false)

    case actions.ADD_SURVEY_REQUEST:
      return state
        .set('isFetching', true)

    case actions.ADD_SURVEY_SUCCESS:
      const mergedList = state.get('items').concat(List(action.payload.survey))
      return state
        .set('isFetching', false)
        .set('items', mergedList)

    case actions.ADD_SURVEY_FAILURE:
      return state
        .set('isFetching', false)
        .setIn(['addSurveyModal', 'visible'], true)
        .setIn(['addSurveyModal', 'error'], List(action.error))

    case actions.DELETE_QUESTIONNAIRE_SUCCESS:
      const newList = state.get('items').filter(item => action.payload.surveyID !== item.eq_id)
      return state
        .set('items', newList)

    case actions.ADD_QUESTIONNAIRE:
      return state
        .setIn(['addQuestionnaireModal', 'visible'], false)
        .setIn(['addQuestionnaireModal', 'questionnaireDetails'], List(action.payload.questionnaireDetails))

    case actions.ADD_QUESTIONNAIRE_CANCEL:
      return state
        .setIn(['addQuestionnaireModal', 'visible'], false)

    case actions.TOGGLE_ADD_QUESTIONNAIRE_MODAL:
      return state
        .setIn(['addQuestionnaireModal', 'visible'], action.payload.visible)

    default:
      return state
  }
}

export default surveysReducer
