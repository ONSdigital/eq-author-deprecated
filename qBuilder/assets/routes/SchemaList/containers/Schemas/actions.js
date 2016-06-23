/*
 *
 * Schemas actions
 *
 */

import { FETCH_SCHEMAS_REQUEST, FETCH_SCHEMAS_SUCCESS, FETCH_SCHEMAS_FAILURE } from './constants'
import { DEFAULT_HEADERS } from 'global_constants'

export function fetchSchemasRequest() {
  return {
    type: FETCH_SCHEMAS_REQUEST,
  }
}

export function fetchSchemasSuccess(schemas) {
  return {
    type: FETCH_SCHEMAS_SUCCESS,
    payload: {
      schemas
    }
  }
}

export function fetchSchemasFailure(error) {
  return {
    type: FETCH_SCHEMAS_FAILURE,
    error
  }
}

export function fetchSchemas() {
  return function(dispatch) {
    function handleErrors(response) {
      if (!response.ok) {
        dispatch(fetchSchemasFailure(response.statusText))
      }
      return response
    }

    dispatch(fetchSchemasRequest())
    return fetch('/api/v1/schema/', {
      mode: 'cors',
      method: 'GET',
      headers: DEFAULT_HEADERS
    }).then(handleErrors)
      .then(response => response.json())
      .then(json => dispatch(fetchSchemasSuccess(json)))
  }
}
