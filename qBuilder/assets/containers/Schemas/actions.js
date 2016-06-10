/*
 *
 * Schemas actions
 *
 */

import { FETCH_SCHEMAS_REQUEST, FETCH_SCHEMAS_SUCCESS } from './constants'
import { API_URL } from 'global_constants'

export function fetchSchemasRequest() {
  return {
    type: FETCH_SCHEMAS_REQUEST,
  }
}

export function fetchSchemasSuccess(schemas) {
  return {
    type: FETCH_SCHEMAS_SUCCESS,
    schemas
  }
}

export function fetchSchemas() {
  return function(dispatch) {
    dispatch(fetchSchemasRequest())
    return fetch(`${API_URL}/schema`)
      .then(response => response.json())
      .then(json => dispatch(fetchSchemasSuccess(json)))
  }
}
