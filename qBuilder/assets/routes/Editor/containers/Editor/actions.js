/*
 *
 * Editor actions
 *
 */

import { CHANGE_VALUE,
  FETCH_SCHEMA_REQUEST,
  FETCH_SCHEMA_SUCCESS,
  SAVE_SCHEMA_REQUEST,
  SAVE_SCHEMA_SUCCESS,
  SAVE_SCHEMA_FAILURE
} from './constants'

import { DEFAULT_HEADERS } from 'global_constants'

import { browserHistory } from 'react-router'

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

export function saveSchemaFailure() {
  return {
    type: SAVE_SCHEMA_FAILURE
  }
}

export function fetchSchema(schemaID) {
  return function(dispatch) {
    dispatch(fetchSchemaRequest())
    return fetch(`/api/v1/schema/${schemaID}/`, {
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

    const isNewSchema = (schemaID === undefined)

    let url = `/api/v1/schema/${schemaID}/`
    let method = 'PUT'

    if (isNewSchema) {
      url = '/api/v1/schema/'
      method = 'POST'
    }

    return fetch(url, {
      method: method,
      headers: DEFAULT_HEADERS,
      body: getState().get('editor').get('value')
    }).then(response => {
      if (response.ok) {
        if (isNewSchema) {
          response.text().then(schemaID => browserHistory.push(`/editor/${schemaID}`))
        }

        let tID = window.setTimeout(() => {
          dispatch(saveSchemaSuccess())
          window.clearTimeout(tID)
        }, 1000)
      } else {
        dispatch(saveSchemaFailure())
        response.text().then(error => window.alert(`Error: ${error}`))
      }
    })
    .catch(err => {
      console.error(err) // eslint-disable-line no-console
    })
  }
}
