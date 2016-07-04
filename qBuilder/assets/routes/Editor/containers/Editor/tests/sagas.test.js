// DPD: 0051126741
import expect from 'expect'
import { call, put, take, fork, cancel, select } from 'redux-saga/effects'
import { loadSchema, loadSchemaWatcher, saveSchemaWatcher,
         saveSchema, editorData } from '../sagas'
import { fetchSchemaRequest, fetchSchemaSuccess, fetchSchemaFailure,
         saveSchemaRequest, saveSchemaSuccess, saveSchemaFailure } from '../actions'

import { selectEditorValue } from '../selectors'

import { LOCATION_CHANGE } from 'react-router-redux'
import { LOAD_SCHEMA, SAVE_SCHEMA, SAVE_SCHEMA_SUCCESS } from '../constants'

import request from 'utils/request'

describe('editor loadSchema Saga', () => {
  let generator
  beforeEach(() => {
    // mock the action to be dispatched
    const action = {
      payload: {
        schemaID: '1'
      }
    }
    generator = loadSchema(action)
    expect(generator.next().value).toEqual(put(fetchSchemaRequest()))

    // make request
    const requestURL = `/api/v1/schema/${action.payload.schemaID}/`
    expect(generator.next(action).value).toEqual(call(request, requestURL))
  })

  it('should dispatch a FETCH_SCHEMA_SUCCESS action if fetch is successful', () => {
    const response = {
      data: true
    }
    expect(generator.next(response).value).toEqual(put(fetchSchemaSuccess('true')))
  })

  it('should dispatch a FETCH_SCHEMA_FAILURE action if fetch is unsuccessful', () => {
    const response = {
      err: 'Some error',
    }
    expect(generator.next(response).value).toEqual(put(fetchSchemaFailure(response.err)))
  })
})

describe('editor saveSchema Saga', () => {
  let generator
  beforeEach(() => {
    const action = {
      payload: {
        schemaID: '1'
      }
    }
    // set up saga
    generator = saveSchema(action)
    const editorValue = select(selectEditorValue)
    expect(generator.next().value).toEqual(editorValue)
    expect(generator.next().value).toEqual(put(saveSchemaRequest()))

    // make request
    const requestURL = `/api/v1/schema/${action.payload.schemaID}/`
    const requestOpts = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: undefined
    }
    expect(generator.next().value).toEqual(call(request, requestURL, requestOpts))
  })

  it('should dispatch a SAVE_SCHEMA_SUCCESS action if save is successful', () => {
    const response = {
      data: true
    }
    // skip over the delay
    generator.next(response)
    expect(generator.next(response).value).toEqual(put(saveSchemaSuccess()))
  })

  it('should dispatch a SAVE_SCHEMA_FAILURE action if fetch is unsuccessful', () => {
    const response = {
      err: 'Some error',
    }
    expect(generator.next(response).value).toEqual(put(saveSchemaFailure(response.err)))
  })
})

describe('loadSchemaWatcher Saga', () => {
  const generator = loadSchemaWatcher()

  it('should watch for LOAD_SCHEMA action', () => {
    expect(generator.next().value).toEqual(take(LOAD_SCHEMA))
  })

  it('should invoke loadSchema saga on actions', () => {
    const action = put(LOAD_SCHEMA)
    const callDescriptor = generator.next(action).value
    expect(callDescriptor).toEqual(call(loadSchema, action))
  })
})

describe('saveSchemaWatcher Saga', () => {
  const generator = saveSchemaWatcher()

  it('should watch for SAVE_SCHEMA action', () => {
    expect(generator.next().value).toEqual(take(SAVE_SCHEMA))
  })

  it('should invoke saveSchema saga on actions', () => {
    const action = put(SAVE_SCHEMA)
    const callDescriptor = generator.next(action).value
    expect(callDescriptor).toEqual(call(saveSchema, action))
  })
})

describe('editorDataSaga', () => {
  const generator = editorData()
  let forkDescriptor

  it('should asyncronously fork loadSchemaWatcher and saveSchemaWatcher sagas', () => {
    forkDescriptor = generator.next()
    expect(forkDescriptor.value).toEqual([fork(loadSchemaWatcher), fork(saveSchemaWatcher)])
  })

  it('should yield until LOCATION_CHANGE  action', () => {
    expect(generator.next().value).toEqual(take(LOCATION_CHANGE))
  })

  it('should finally cancel() the forked getReposWatcher saga',
    function* editorDataSagaCancellable() {
      // reuse open fork for more integrated approach
      forkDescriptor = generator.next(put(LOCATION_CHANGE))
      expect(forkDescriptor.value).toEqual(cancel(forkDescriptor))
    }
  )
})
