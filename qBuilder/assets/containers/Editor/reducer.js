/*
 *
 * Editor reducer
 *
 */

import { fromJS } from 'immutable'
import { CHANGE_VALUE } from './constants'

const initialState = fromJS({
  value: '// code here'
})

function editorReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE:
      return state.set(action.value)
    default:
      return state
  }
}

export default editorReducer
