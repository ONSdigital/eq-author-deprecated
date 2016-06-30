import { LOAD_SCHEMA, SAVE_SCHEMA, SAVE_SCHEMA_SUCCESS } from './constants'
import { LOCATION_CHANGE } from 'react-router-redux'

import { take, call, put, fork, select } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { saveSchemaRequest, saveSchemaSuccess, saveSchemaFailure,
         fetchSchemaRequest, fetchSchemaSuccess, fetchSchemaFailure } from './actions'

import { selectEditorValue } from './selectors'

import { browserHistory } from 'react-router'

import { js_beautify as beautify } from 'js-beautify' // eslint-disable-line camelcase

import request from 'utils/request'

export function beautifySchema(schema) {
  return beautify(JSON.stringify(schema), { indent_size: 2 })
}

export function* loadSchema(action) {
  // dispatch action
  yield put(fetchSchemaRequest())

  // perform API call
  const schema = yield call(request, `/api/v1/schema/${action.payload.schemaID}/`)

  // handle response/errors
  if (!schema.err) {
    // beautify the resonse if successful and dispatch success action
    yield put(fetchSchemaSuccess(beautifySchema(schema.data)))
  } else {
    yield put(fetchSchemaFailure(schema.err))
  }
}

export function* saveSchema(action) {
  const schemaID = action.payload.schemaID
  let endpoint = '/api/v1/schema/'
  let method = 'POST'

  // if no schemaID exists then it's a new schema
  if (schemaID !== undefined) {
    endpoint = `${endpoint}${schemaID}/`
    method = 'PUT'
  }

  // get the current value of the JSON editor from the state
  const body = yield select(selectEditorValue)
  // dispatch action to update UI
  yield put(saveSchemaRequest())
  // perform API call
  const schema = yield call(request, endpoint, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: body
  })

  if (!schema.err) {
    if (schemaID === undefined) {
      // if new schema forward the browser
      yield call(browserHistory.push, `/editor/${schema.data}`)
    }
    // aribtrary UI delay
    yield delay(500)
    yield put(saveSchemaSuccess())
  } else {
    yield put(saveSchemaFailure(schema.err.response))
  }
}

// watch for loadSchema actions
export function* loadSchemaWatcher() {
  while (true) {
    const action = yield take(LOAD_SCHEMA)
    yield call(loadSchema, action)
  }
}

// watch for saveSchema actions
export function* saveSchemaWatcher() {
  while (true) {
    const action = yield take(SAVE_SCHEMA)
    yield call(saveSchema, action)
  }
}

// sets up watchers as background task and cancels them when route changes
// or schema is saved
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
