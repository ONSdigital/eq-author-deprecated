import { LOAD_SCHEMA, SAVE_SCHEMA, SAVE_SCHEMA_SUCCESS } from './constants'
import { LOCATION_CHANGE } from 'react-router-redux'

import { take, takeLatest, call, put, fork, cancel, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { saveSchemaRequest, saveSchemaSuccess, saveSchemaFailure,
         fetchSchemaRequest, fetchSchemaSuccess, fetchSchemaFailure } from './actions'

import { browserHistory } from 'react-router'

import { js_beautify as beautify } from 'js-beautify' // eslint-disable-line camelcase

import request from 'utils/request'

export function* loadSchema(action) {
  yield put(fetchSchemaRequest())

  const schema = yield call(request, `/api/v1/schema/${action.payload.schemaID}/`)

  if (!schema.err) {
    const json = beautify(JSON.stringify(schema.data), { indent_size: 2 })
    yield put(fetchSchemaSuccess(json))
  } else {
    yield put(fetchSchemaFailure(schema.err.response))
  }
}

export function* saveSchema(action) {
  const schemaID = action.payload.schemaID
  let endpoint = '/api/v1/schema/'
  let method = 'POST'

  if (schemaID !== undefined) {
    endpoint = `${endpoint}${schemaID}/`
    method = 'PUT'
  }

  const body = yield select(state => state.get('editor').get('value'))
  const schema = yield call(request, endpoint, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: body
  })

  yield put(saveSchemaRequest())

  if (!schema.err) {
    if (schemaID === undefined) {
      browserHistory.push(`/editor/${schema.data}`)
    }
    yield call(delay, 1000)
    yield put(saveSchemaSuccess())
  } else {
    yield put(saveSchemaFailure(schema.err.response))
  }
}

export function* loadSchemaWatcher() {
  while (true) {
    const action = yield take(LOAD_SCHEMA)
    yield call(loadSchema, action)
  }
}

export function* saveSchemaWatcher() {
  while (true) {
    const action = yield take(SAVE_SCHEMA)
    yield call(saveSchema, action)
  }
}

export function* editorData() {
  const watcher = yield [
    fork(loadSchemaWatcher),
    fork(saveSchemaWatcher)
  ]

  yield [
    take(LOCATION_CHANGE),
    take(SAVE_SCHEMA_SUCCESS)
  ]
  yield watcher.forEach(task => task.cancel())
}

export default [
  editorData,
]
