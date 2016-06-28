/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, fork, cancel } from 'redux-saga/effects'
import { LOAD_SCHEMAS } from './constants'
import { LOCATION_CHANGE } from 'react-router-redux'
import { fetchSchemasRequest, fetchSchemasSuccess, fetchSchemasFailure } from './actions'

import request from 'utils/request'

export function* getSchemas() {
  yield put(fetchSchemasRequest())
  const schemas = yield call(request, '/api/v1/schema/')
  if (!schemas.err) {
    yield put(fetchSchemasSuccess(schemas.data))
  } else {
    yield put(fetchSchemasFailure(schemas.err))
  }
}

export function* loadSchemasWatcher() {
  yield take(LOAD_SCHEMAS)
  yield call(getSchemas)
}

export function* schemasData() {
  const watcher = yield fork(loadSchemasWatcher)
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export default [
  schemasData,
]
