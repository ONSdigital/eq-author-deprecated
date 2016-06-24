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
  SAVE_SCHEMA_SUCCESS,
  SAVE_SCHEMA_FAILURE
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
        .set('value', action.payload.value)
    case FETCH_SCHEMA_REQUEST:
      return state
        .set('isFetching', true)
        .set('value', action.payload)
    case FETCH_SCHEMA_SUCCESS:
      return state
        .set('isFetching', false)
        .set('value', action.payload)
    case SAVE_SCHEMA_REQUEST:
      return state
        .set('isSaving', true)
    case SAVE_SCHEMA_SUCCESS:
    case SAVE_SCHEMA_FAILURE:
      return state
        .set('isSaving', false)
    default:
      return state
  }
}

export default editorReducer
