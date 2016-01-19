import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/blocks'

export default combineReducers({
  blocks,
  router
})
