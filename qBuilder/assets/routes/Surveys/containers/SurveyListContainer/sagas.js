import { LOAD_SCHEMAS, DELETE_SCHEMA } from './constants'
import { LOCATION_CHANGE } from 'react-router-redux'

import { take, call, put, fork, cancel } from 'redux-saga/effects'
import { fetchSchemasRequest, fetchSchemasSuccess, fetchSchemasFailure,
         deleteSchemaRequest, deleteSchemaSuccess, deleteSchemaFailure } from './actions'

import request from 'utils/request'

export function* getSchemas() {
  yield put(fetchSchemasRequest())
  const schemas = yield call(request, '/api/v1/schema/')
  if (!schemas.err) {
    yield put(fetchSchemasSuccess(schemas.data))
  } else {
    yield put(fetchSchemasFailure(schemas.err))
    window.alert('There was a loading the schemas. See the Console for errors.')
    console.error(schemas.err.response) // eslint-disable-line
  }
}

export function* loadSchemasWatcher() {
  yield take(LOAD_SCHEMAS)
  yield call(getSchemas)
}

export function* deleteSchema(action) {
  yield put(deleteSchemaRequest())

  const schemas = yield call(request, `/api/v1/schema/${action.payload.schemaId}/`, {
    method: 'DELETE'
  })

  if (!schemas.err) {
    yield put(deleteSchemaSuccess(action.payload.schemaId))
  } else {
    yield put(deleteSchemaFailure())
    window.alert('There was a problem deleting the schema. See the Console for errors.')
    console.error(schemas.err.response) // eslint-disable-line
  }
}

export function* deleteSchemasWatcher() {
  while (true) {
    const action = yield take(DELETE_SCHEMA)
    yield call(deleteSchema, action)
  }
}

export function* schemasData() {
  const watchers = yield [fork(loadSchemasWatcher), fork(deleteSchemasWatcher)]
  yield take(LOCATION_CHANGE)
  yield cancel(watchers)
}
export default [
  schemasData,
]
