import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import blocks from './blocks';

export default combineReducers({
  blocks,
  router: routeReducer
});
