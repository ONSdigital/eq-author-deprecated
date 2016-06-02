/*
 *
 * Editor reducer
 *
 */

import { fromJS } from 'immutable'
import { CHANGE_VALUE, REQUEST_SCHEMA, RECEIVE_SCHEMA } from './constants'

const initialState = fromJS({
  isFetching: false,
  value: ''
})

function editorReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE:
      return state.set(action.value)
    case REQUEST_SCHEMA:
      return state
        .set('isFetching', true)
        .set('value', action.value)
    case RECEIVE_SCHEMA:
      return state
        .set('isFetching', false)
        .set('value', action.value)
    default:
      return state
  }
}

export default editorReducer
