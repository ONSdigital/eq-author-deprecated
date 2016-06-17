/*
 *
 * Editor actions
 *
 */

import { CHANGE_VALUE, FETCH_SCHEMA_REQUEST, FETCH_SCHEMA_SUCCESS, SAVE_SCHEMA_REQUEST, SAVE_SCHEMA_SUCCESS } from './constants'
import { DEFAULT_HEADERS } from 'global_constants'

import { js_beautify as beautify } from 'js-beautify' // eslint-disable-line camelcase

export function changeValue(value) {
  return {
    type: CHANGE_VALUE,
    value
  }
}

export function fetchSchemaRequest() {
  return {
    type: FETCH_SCHEMA_REQUEST,
    value: '//fetching schema...'
  }
}

export function fetchSchemaSuccess(value) {
  return {
    type: FETCH_SCHEMA_SUCCESS,
    value
  }
}

export function saveSchemaRequest() {
  return {
    type: SAVE_SCHEMA_REQUEST
  }
}

export function fetchSchema(schemaID) {
  return function(dispatch) {
    dispatch(fetchSchemaRequest())
    return fetch(`/schema/${schemaID}/`, {
      method: 'GET'
    }).then(response => response.text())
      .then(json => beautify(json, { indent_size: 2 }))
      .then(json => dispatch(fetchSchemaSuccess(json)))
  }
}

export function saveSchemaSuccess() {
  return {
    type: SAVE_SCHEMA_SUCCESS
  }
}

export function saveSchema(schemaID) {
  return function(dispatch, getState) {
    dispatch(saveSchemaRequest())
    return fetch(`/schema/${schemaID}/`, {
      method: 'PUT',
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
    .catch(err => {
      /* eslint-disable no-console */
      console.error(err)
    })
  }
}
