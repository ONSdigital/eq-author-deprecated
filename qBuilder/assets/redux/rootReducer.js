import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';
import blocks from './modules/blocks';

export default combineReducers({
  blocks,
  router
});
