/*
 *
 * Editor reducer
 *
 */

import { Map } from 'immutable'
import {
  CHANGE_VALUE,
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
        .set('value', action.payload.value.schema)
        .set('title', 'Loading...')
    case FETCH_SCHEMA_SUCCESS:
      console.log(action.payload.value)
      return state
        .set('isFetching', false)
        .set('value', action.payload.value.schema)
        .set('title', action.payload.value.title)
    case FETCH_SCHEMA_FAILURE:
      return state
        .set('isFetching', false)
        .set('value', action.payload.value.schema)
        .set('title', action.payload.value.title)
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
        .set('value', '')
        .set('title', 'Questionnaire title')
    default:
      return state
  }
}

export default editorReducer
