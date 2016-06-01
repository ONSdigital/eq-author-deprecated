/*
 *
 * Schemas reducer
 *
 */

import { REQUEST_SCHEMAS, RECEIVE_SCHEMAS } from './constants'

function schemasReducer(state = {
  isFetching: false,
  didInvalidate: false,
  items: [{
    path: 'schema/0_star_wars.json',
    name: '0_star_wars.json'
  }]
}, action) {
  switch (action.type) {
    case REQUEST_SCHEMAS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_SCHEMAS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.schemas
      })
    default:
      return state
  }
}

export default schemasReducer
