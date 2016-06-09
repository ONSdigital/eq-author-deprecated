/*
 *
 * Schemas actions
 *
 */

import { FETCH_SCHEMAS_REQUEST, FETCH_SCHEMAS_SUCCESSS } from './constants'
import { API_URL } from 'global_constants'

export function fetchSchemasRequest() {
  return {
    type: FETCH_SCHEMAS_REQUEST,
  }
}

export function receiveSchemas(schemas) {
  return {
    type: FETCH_SCHEMAS_SUCCESSS,
    schemas
  }
}

export function fetchSchemas() {
  return function(dispatch) {
    dispatch(fetchSchemasRequest())
    return fetch(`${API_URL}/schema`)
      .then(response => response.json())
      .then(json => dispatch(receiveSchemas(json)))
  }
}
