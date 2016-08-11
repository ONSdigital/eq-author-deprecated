/*
 *
 * AddSurveyModal reducer
 *
 */

import { fromJS } from 'immutable'
import * as actions from './constants'

const initialState = fromJS({
  isSaving: false
})

function addSurveyModalReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATE_SURVEY:
      return state
    case actions.CREATE_SURVEY_REQUEST:
      return state.set('isSaving', true)
    case actions.CREATE_SURVEY_SUCCESS:
      return state.set('isSaving', false)
    default:
      return state
  }
}

export default addSurveyModalReducer
