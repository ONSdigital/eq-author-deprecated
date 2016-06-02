/*
 *
 * Editor actions
 *
 */

import { CHANGE_VALUE, REQUEST_SCHEMA, RECEIVE_SCHEMA } from './constants'

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
    return fetch(`http://localhost:5000/schemas/${schemaID}`)
      .then(response => response.text())
      .then(json => dispatch(receiveSchema(json)))
  }
}
