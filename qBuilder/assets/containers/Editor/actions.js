/*
 *
 * Editor actions
 *
 */

import { CHANGE_VALUE, REQUEST_SCHEMA, RECEIVE_SCHEMA, SAVE_SCHEMA } from './constants'
import { API_URL } from '../../constants'

export function changeValue(value) {
  return {
    type: CHANGE_VALUE,
    value
  }
}

export function requestSchema() {
  return {
    type: REQUEST_SCHEMA,
    value: '//fetching schema...'
  }
}

export function receiveSchema(value) {
  return {
    type: RECEIVE_SCHEMA,
    value
  }
}

export function fetchSchema(schemaID) {
  return function(dispatch) {
    dispatch(requestSchema())
    return fetch(`${API_URL}/schema/${schemaID}`)
      .then(response => response.text())
      .then(json => dispatch(receiveSchema(json)))
  }
}

export function saveSchema(schemaID) {

  console.log('save schema');

  return function(dispatch) {
    dispatch(requestSchema())
    return fetch(`${API_URL}/schema/${schemaID}`, {
      method: 'POST'
    }).then(response => {
      console.log(response)
    })
  }
}
