/*
 *
 * Schemas reducer
 *
 */

import { Map } from 'immutable'

import { FETCH_SCHEMAS_REQUEST, FETCH_SCHEMAS_SUCCESSS } from './constants'

const initialState = Map({
  isFetching: false,
  items: []
})

function schemasReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SCHEMAS_REQUEST:
      return state
        .set('isFetching', true)
    case FETCH_SCHEMAS_SUCCESSS:
      return state
        .set('isFetching', false)
        .set('items', action.schemas)
    default:
      return state
  }
}

export default schemasReducer
