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
  isOpen: false
})

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return state.set('isOpen', true)
    case CLOSE_MODAL:
      return state.set('isOpen', false)
    default:
      return state
  }
}

export default modalReducer
