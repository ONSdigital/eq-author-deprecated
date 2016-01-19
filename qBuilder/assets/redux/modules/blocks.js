// #TODO: use flux standard action style

import update from 'react/lib/update';
import shortid from 'shortid';

export const getID = () => {
  return shortid.generate();
};

export const initialState = () => {
  return [];
};

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const URL = 'http://localhost:3003/data/';

/*
 * action types
 */

export const ADD_BLOCK = 'ADD_BLOCK';
export const SET_BLOCKS = 'SET_BLOCKS';
export const SWAP_BLOCKS = 'SWAP_BLOCKS';

export const SAVE_DATA = 'SAVE_DATA';
export const FETCH_DATA = 'FETCH_DATA';
export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

/*
 * action creators
 */

export function addBlock(block) {
  return {
    type: ADD_BLOCK,
    block: Object.assign({}, block, {
      id: getID()
    })
  };
}

export function setBlocks(blocks) {
  return {
    type: SET_BLOCKS,
    blocks: blocks
  };
}

export function swapBlocks(swapSourceIndex, swapTargetIndex) {
  return {
    type: SWAP_BLOCKS,
    swapSourceIndex,
    swapTargetIndex
  };
}

function save(dispatch, getState) {
  const { blocks } = getState();
  return fetch(URL, {
    method: 'put',
    headers: headers,
    body: JSON.stringify({'blocks': blocks})
  });
}

export function saveData() {
  return (dispatch, getState) => {
    return save(dispatch, getState).then(response => {
      return response.json();
    }).then(data => {
      console.log('parsed data: ', data);
    }).catch(ex => {
      console.log('parsing failed: ', ex);
    });
  };
}

export function requestData() {
  return {
    type: REQUEST_DATA
  };
}

export function fetchData() {
  return dispatch => {
    dispatch(requestData());
    return fetch(URL, {
      method: 'get',
      headers: headers
    }).then(response => response.json())
      .then(data => {
        return dispatch(receiveData(data.blocks));
      }
    );
  };
}

export function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    blocks: data
  };
}

/*
 * reducers
 */

function blocks(state = initialState(), action) {
  switch (action.type) {
    case ADD_BLOCK:
      return [...state, action.block];
    case SET_BLOCKS:
      return Object.assign({}, state, action.blocks);
    case SWAP_BLOCKS:
      const { swapSourceIndex, swapTargetIndex } = action;
      const dragCard = state[swapSourceIndex];
      const newState = update(state, {
        $splice: [
          [swapSourceIndex, 1],
          [swapTargetIndex, 0, dragCard]
        ]
      });
      return newState;
    case SAVE_DATA:
      console.log('save data');
      return state;
    case REQUEST_DATA:
      console.log('request data');
      return state;
    case FETCH_DATA:
      console.log('fetch data');
      return state;
    case RECEIVE_DATA:
      console.log('receive_data');
      return action.blocks;
    default:
      return state;
  }
}

export default blocks;
