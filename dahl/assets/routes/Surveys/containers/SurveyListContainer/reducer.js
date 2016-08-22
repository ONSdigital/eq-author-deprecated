/*
 *
 * Surveys reducer
 *
 */

import { fromJS, Map, List } from 'immutable'
import * as actions from './constants'

export const initialState = fromJS({
  addQuestionnaireModal: {
    visible: false,
    errors: [],
    surveyId: undefined,
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
        .set('items', fromJS(action.payload.surveys))

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
      const mergedList = state.get('items').concat(action.payload.survey)
      return state
        .set('isFetching', false)
        .set('items', fromJS(mergedList))
        .setIn(['addSurveyModal', 'errors'], fromJS({}))
        .setIn(['addSurveyModal', 'visible'], false)

    case actions.ADD_SURVEY_FAILURE:
      return state
        .set('isFetching', false)
        .setIn(['addSurveyModal', 'visible'], true)
        .setIn(['addSurveyModal', 'errors'], fromJS(action.errors))

    case actions.TOGGLE_ADD_QUESTIONNAIRE_MODAL:
      return state
        .setIn(['addQuestionnaireModal', 'visible'], action.payload.visible)
        .setIn(['addQuestionnaireModal', 'surveyID'], action.payload.surveyID)

    case actions.ADD_QUESTIONNAIRE:
      return state
        .setIn(['addQuestionnaireModal', 'visible'], false)
        .setIn(['addQuestionnaireModal', 'questionnaireDetails'], fromJS(action.payload.questionnaireDetails))

    case actions.ADD_QUESTIONNAIRE_CANCEL:
      return state
        .setIn(['addQuestionnaireModal', 'visible'], false)

    case actions.ADD_QUESTIONNAIRE_SUCCESS:
      // const items = state.get('items').map((item, index) => {
      //   if (item.get('survey_id') === action.payload.questionnaire.survey_id) {
      //     return item.set('questionnaires', item.get('questionnaires').push(action.payload.questionnaire))
      //   }
      //   return item
      // })

      return state
        .setIn(['addQuestionnaireModal', 'visible'], false)

    default:
      return state
  }
}

export default surveysReducer
