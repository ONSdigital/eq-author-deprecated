/*
 *
 * Schemas actions
 *
 */

import { LOAD_SCHEMAS,
         DELETE_SCHEMA,
         FETCH_SCHEMAS_REQUEST,
         FETCH_SCHEMAS_SUCCESS,
         FETCH_SCHEMAS_FAILURE,
         DELETE_SCHEMA_REQUEST,
         DELETE_SCHEMA_SUCCESS,
         DELETE_SCHEMA_FAILURE } from './constants'

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

export function deleteSchema(schemaId) {
  return {
    type: DELETE_SCHEMA,
    payload: {
      schemaId: schemaId
    }
  }
}

export function deleteSchemaRequest() {
  return {
    type: DELETE_SCHEMA_REQUEST
  }
}

export function deleteSchemaSuccess(schemaId) {
  return {
    type: DELETE_SCHEMA_SUCCESS,
    payload: {
      schemaId: schemaId
    }
  }
}

export function deleteSchemaFailure() {
  return {
    type: DELETE_SCHEMA_FAILURE
  }
}
