/*
 *
 * Editor reducer
 *
 */

import { Map } from 'immutable'
import {
  CHANGE_VALUE,
  FETCH_SCHEMA_REQUEST,
  FETCH_SCHEMA_SUCCESS,
  SAVE_SCHEMA_REQUEST,
  SAVE_SCHEMA_SUCCESS
} from './constants'

export const initialState = Map({
  isFetching: false,
  isSaving: false,
  value: '',
})

function editorReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE:
      return state
        .set('value', action.value)
    case FETCH_SCHEMA_REQUEST:
      return state
        .set('isFetching', true)
        .set('value', action.value)
    case FETCH_SCHEMA_SUCCESS:
      return state
        .set('isFetching', false)
        .set('value', action.value)
    case SAVE_SCHEMA_REQUEST:
      return state
        .set('isSaving', true)
    case SAVE_SCHEMA_SUCCESS:
      return state
        .set('isSaving', false)
    default:
      return state
  }
}

export default editorReducer
