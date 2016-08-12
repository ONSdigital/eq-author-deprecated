/*
 *
 * Schemas reducer
 *
 */

import { Map, List } from 'immutable'

import {
  FETCH_SCHEMAS_REQUEST,
  FETCH_SCHEMAS_SUCCESS,
  FETCH_SCHEMAS_FAILURE,
  DELETE_SCHEMA_SUCCESS } from './constants'

export const initialState = Map({
  isFetching: false,
  items: List([]),
  error: ''
})

const schemasReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCHEMAS_REQUEST:
      return state
        .set('isFetching', true)
    case FETCH_SCHEMAS_SUCCESS:
      return state
        .set('isFetching', false)
        .set('items', List(action.payload.schemas))
    case FETCH_SCHEMAS_FAILURE:
      return state
        .set('isFetching', false)
        .set('error', action.error)
    case DELETE_SCHEMA_SUCCESS:
      return state
        .set('items', state.get('items').filter(item => action.payload.schemaId !== item.eq_id))
    default:
      return state
  }
}

export default schemasReducer
