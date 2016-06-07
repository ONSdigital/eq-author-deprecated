/*
 *
 * Editor actions
 *
 */

import { CHANGE_VALUE, REQUEST_SCHEMA, RECEIVE_SCHEMA, REQUEST_SAVE_SCHEMA, SAVE_SCHEMA_SUCCESS } from './constants'
import { API_URL, DEFAULT_HEADERS } from '../../constants'

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

export function requestSaveSchema(schemaID) {
  return {
    type: REQUEST_SAVE_SCHEMA
  }
}

export function fetchSchema(schemaID) {
  return function(dispatch) {
    dispatch(requestSchema())
    return fetch(`${API_URL}/schema/${schemaID}`, {
      method: 'GET'
    }).then(response => response.text())
      .then(json => dispatch(receiveSchema(json)))
  }
}

export function saveSchema(schemaID) {
  return function(dispatch, getState) {
    dispatch(requestSaveSchema())
    return fetch(`${API_URL}/schema/${schemaID}`, {
      method: 'POST',
      headers: DEFAULT_HEADERS,
      body: getState().get('editor').get('value')
    }).then(response => {
      if (response.ok) {
        let tID = window.setTimeout(() => {
          dispatch(saveSchemaSuccess())
          window.clearTimeout(tID)
        }, 1000)
      } else {
        window.alert('Something went wrong!')
      }
    })
    .catch(err => console.error)
  }
}

export function saveSchemaSuccess() {
  return {
    type: SAVE_SCHEMA_SUCCESS
  }
}
