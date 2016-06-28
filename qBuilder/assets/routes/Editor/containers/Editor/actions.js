/*
 *
 * Editor actions
 *
 */

import {
  CHANGE_VALUE,
  LOAD_SCHEMA,
  SAVE_SCHEMA,
  FETCH_SCHEMA_REQUEST,
  FETCH_SCHEMA_SUCCESS,
  FETCH_SCHEMA_FAILURE,
  SAVE_SCHEMA_REQUEST,
  SAVE_SCHEMA_SUCCESS,
  SAVE_SCHEMA_FAILURE
} from './constants'

export function changeValue(value) {
  return {
    type: CHANGE_VALUE,
    payload: { value }
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

export function fetchSchemaRequest() {
  return {
    type: FETCH_SCHEMA_REQUEST
  }
}

export function fetchSchemaSuccess(value) {
  return {
    type: FETCH_SCHEMA_SUCCESS,
    payload: {
      value: value
    }
  }
}

export function fetchSchemaFailure(err) {
  return {
    type: FETCH_SCHEMA_FAILURE,
    error: err,
    payload: {
      value: 'There was an error loading the schema'
    }
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
