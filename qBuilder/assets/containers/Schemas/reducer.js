/*
 *
 * Schemas reducer
 *
 */

import { Map } from 'immutable'

import { REQUEST_SCHEMAS, RECEIVE_SCHEMAS } from './constants'

const initialState = Map({
  isFetching: false,
  items: []
})

function schemasReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SCHEMAS:
      return state
        .set('isFetching', true)
    case RECEIVE_SCHEMAS:
      return state
        .set('isFetching', false)
        .set('items', action.schemas)
    default:
      return state
  }
}

export default schemasReducer
