/*
 *
 * Schemas actions
 *
 */

import { LOAD_SCHEMAS, FETCH_SCHEMAS_REQUEST, FETCH_SCHEMAS_SUCCESS, FETCH_SCHEMAS_FAILURE } from './constants'

export function loadSchemas() {
  return {
    type: LOAD_SCHEMAS,
  }
}

export function fetchSchemasRequest() {
  return {
    type: FETCH_SCHEMAS_REQUEST,
  }
}

export function fetchSchemasSuccess(schemas) {
  return {
    type: FETCH_SCHEMAS_SUCCESS,
    payload: {
      schemas: schemas
    }
  }
}

export function fetchSchemasFailure(error) {
  return {
    type: FETCH_SCHEMAS_FAILURE,
    error
  }
}
