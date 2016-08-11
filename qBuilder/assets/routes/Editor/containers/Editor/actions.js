/*
 *
 * Editor actions
 *
 */

import {
  UPDATE_SCHEMA,
  LOAD_SCHEMA,
  SAVE_SCHEMA,
  NEW_SCHEMA,
  FETCH_SCHEMA_REQUEST,
  FETCH_SCHEMA_SUCCESS,
  FETCH_SCHEMA_FAILURE,
  SAVE_SCHEMA_REQUEST,
  SAVE_SCHEMA_SUCCESS,
  SAVE_SCHEMA_FAILURE,
} from './constants'

export function updateSchema(schema) {
  return {
    type: UPDATE_SCHEMA,
    payload: {
      schema: schema
    }
  }
}

export function loadSchema(schemaID) {
  return {
    type: LOAD_SCHEMA,
    payload: {
      schemaID: schemaID
    }
  }
}

export function saveSchema(schemaID) {
  return {
    type: SAVE_SCHEMA,
    payload: {
      schemaID: schemaID
    }
  }
}

export function newSchema() {
  return {
    type: NEW_SCHEMA
  }
}

export function fetchSchemaRequest() {
  return {
    type: FETCH_SCHEMA_REQUEST,
  }
}

export function fetchSchemaSuccess(payload) {
  return {
    type: FETCH_SCHEMA_SUCCESS,
    payload: payload
  }
}

export function fetchSchemaFailure(err) {
  return {
    type: FETCH_SCHEMA_FAILURE,
    error: err
  }
}

export function saveSchemaRequest() {
  return {
    type: SAVE_SCHEMA_REQUEST
  }
}

export function saveSchemaSuccess() {
  return {
    type: SAVE_SCHEMA_SUCCESS
  }
}

export function saveSchemaFailure() {
  return {
    type: SAVE_SCHEMA_FAILURE
  }
}
