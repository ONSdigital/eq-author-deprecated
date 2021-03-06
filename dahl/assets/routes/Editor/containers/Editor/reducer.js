/*
 *
 * Editor reducer
 *
 */

import { Map } from 'immutable'
import {
  UPDATE_SCHEMA,
  NEW_SCHEMA,
  FETCH_SCHEMA_REQUEST,
  FETCH_SCHEMA_SUCCESS,
  FETCH_SCHEMA_FAILURE,
  SAVE_SCHEMA_REQUEST,
  SAVE_SCHEMA_SUCCESS,
  SAVE_SCHEMA_FAILURE
} from './constants'

export const initialState = Map({
  isFetching: false,
  isSaving: false,
})

function editorReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SCHEMA:
      return state
        .set('schema', action.payload.schema)
    case FETCH_SCHEMA_REQUEST:
      return state
        .set('isFetching', true)
        .set('title', 'Loading...')
        .set('schema', '')
    case FETCH_SCHEMA_SUCCESS:
      return state
        .set('isFetching', false)
        .set('title', action.payload.title)
        .set('schema', action.payload.schema)
    case FETCH_SCHEMA_FAILURE:
      return state
        .set('isFetching', false)
        .set('schema', action.payload.schema)
    case SAVE_SCHEMA_REQUEST:
      return state
        .set('isSaving', true)
    case SAVE_SCHEMA_SUCCESS:
    case SAVE_SCHEMA_FAILURE:
      return state
        .set('isSaving', false)
    case NEW_SCHEMA:
      return state
        .set('isSaving', false)
        .set('title', 'Questionnaire title')
        .set('schema', '')
    default:
      return state
  }
}

export default editorReducer
