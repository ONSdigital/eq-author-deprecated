/*
 *
 * Editor reducer
 *
 */

import { Map } from 'immutable'
import { CHANGE_VALUE, REQUEST_SCHEMA, RECEIVE_SCHEMA, REQUEST_SAVE_SCHEMA } from './constants'

const initialState = Map({
  isFetching: false,
  isSaving: false,
  value: '',
})

function editorReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE:
      return state
        .set('value', action.value)
    case REQUEST_SCHEMA:
      return state
        .set('isFetching', true)
        .set('value', action.value)
    case RECEIVE_SCHEMA:
      return state
        .set('isFetching', false)
        .set('value', action.value)
    case REQUEST_SAVE_SCHEMA:
      return state
        .set('isSaving', true)
    default:
      return state
  }
}

export default editorReducer
