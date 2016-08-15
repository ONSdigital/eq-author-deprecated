/*
 *
 * Surveys reducer
 *
 */

import { Map, List } from 'immutable'

import * as actions from './constants'

export const initialState = Map({
  isFetching: false,
  items: List([]),
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
        .set('items', state.get('items').filter(item => action.payload.surveyId !== item.eq_id))
    case actions.CREATE_SURVEY:
      return state
    case actions.CREATE_SURVEY_REQUEST:
      return state.set('isFetching', true)
    case actions.CREATE_SURVEY_SUCCESS:
      return state.set('isFetching', false)
    default:
      return state
  }
}

export default surveysReducer
