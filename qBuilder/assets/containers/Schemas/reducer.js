/*
 *
 * Schemas reducer
 *
 */

import { Map, List } from 'immutable'

import { FETCH_SCHEMAS_REQUEST, FETCH_SCHEMAS_SUCCESS } from './constants'

export const initialState = Map({
  isFetching: false,
  items: List([])
})

function schemasReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SCHEMAS_REQUEST:
      return state
        .set('isFetching', true)
    case FETCH_SCHEMAS_SUCCESS:
      return state
        .set('isFetching', false)
        .set('items', action.schemas)
    default:
      return state
  }
}

export default schemasReducer
