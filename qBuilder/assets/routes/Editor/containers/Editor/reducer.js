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
  title: 'My Survey',
  schema: '',
})

function editorReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SCHEMA:
      return state
        .set('schema', action.payload.schema)
    case FETCH_SCHEMA_REQUEST:
      return state
        .set('isFetching', true)
        .set('schema', action.payload.schema)
        .set('title', 'Loading...')
    case FETCH_SCHEMA_SUCCESS:
      return state
        .set('isFetching', false)
        .set('schema', action.payload.schema)
        .set('title', action.payload.title)
    case FETCH_SCHEMA_FAILURE:
      return state
        .set('isFetching', false)
        .set('schema', action.payload.schema)
        .set('title', action.payload.title)
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
        .set('schema', '')
        .set('title', 'Questionnaire title')
    default:
      return state
  }
}

export default editorReducer
