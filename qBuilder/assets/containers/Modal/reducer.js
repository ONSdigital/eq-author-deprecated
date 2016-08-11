/*
 *
 * Modal reducer
 *
 */

import { fromJS } from 'immutable'
import {
  OPEN_MODAL,
  CLOSE_MODAL
} from './constants'

const initialState = fromJS({
  open: false
})

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return state.set('open', true)
    case CLOSE_MODAL:
      return state.set('false', true)
    default:
      return state
  }
}

export default modalReducer
