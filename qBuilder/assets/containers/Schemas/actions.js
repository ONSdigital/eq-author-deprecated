/*
 *
 * Schemas actions
 *
 */

import { REQUEST_SCHEMAS, RECEIVE_SCHEMAS } from './constants'
import { API_URL } from '../../constants'

export function requestSchemas() {
  return {
    type: REQUEST_SCHEMAS,
  }
}

export function receiveSchemas(schemas) {
  return {
    type: RECEIVE_SCHEMAS,
    schemas
  }
}

export function fetchSchemas() {
  return function(dispatch) {
    dispatch(requestSchemas())
    return fetch(`${API_URL}/schema`)
      .then(response => response.json())
      .then(json => dispatch(receiveSchemas(json)))
  }
}
