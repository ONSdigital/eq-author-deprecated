import { LOAD_SCHEMA, SAVE_SCHEMA } from './constants'
import { LOCATION_CHANGE } from 'react-router-redux'

import { take, call, put, select, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { saveSchemaRequest, saveSchemaSuccess, saveSchemaFailure,
         fetchSchemaRequest, fetchSchemaSuccess, fetchSchemaFailure } from './actions'

import { selectEditorValue } from './selectors'

import { browserHistory } from 'react-router'

import request from 'utils/request'

export function* loadSchema(action) {
  // dispatch action
  yield put(fetchSchemaRequest())

  // perform API call
  const schema = yield call(request, `/api/v1/schema/${action.payload.schemaID}/`)

  // handle response/errors
  if (!schema.err) {
    yield put(fetchSchemaSuccess(schema.data))
  } else {
    yield put(fetchSchemaFailure(schema.err))
    console.error(schema.err.response) // eslint-disable-line
    // if API returns a response
    if (schema.err.response !== undefined) {
      if (schema.err.response.body !== undefined) {
        schema.err.response.text().then(body => alert('Error: \n' + body)) //eslint-disable-line
      } else {
        window.alert('There was a problem loading this schema. See the Console for errors.')
        console.error(schema.err.response) // eslint-disable-line
      }
    } else {
      window.alert('Error: Server didn\'t return a response')
    }
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
    // aribtrary UI delay
    yield delay(500)
    yield put(saveSchemaSuccess())
    if (schemaID === undefined) {
      // if new schema forward the browser
      yield call(browserHistory.replace, `/questionnaire/${schema.data}`)
    }
  } else {
    yield put(saveSchemaFailure(schema.err.response))
    // if API returns a response
    if (schema.err.response !== undefined) {
      if (schema.err.response.body !== undefined) {
        schema.err.response.text().then(body => alert('Error: \n' + body)) //eslint-disable-line
      } else {
        window.alert('There was a problem saving this schema. See the Console for errors.')
        console.error(schema.err.response) // eslint-disable-line
      }
    } else {
      window.alert('Error: Server didn\'t return a response')
    }
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
  yield race([
    [
      call(loadSchemaWatcher),
      call(saveSchemaWatcher)
    ],
    take(LOCATION_CHANGE)
  ])
}

export default [
  editorData,
]
