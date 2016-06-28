import expect from 'expect'
import { call, put, take, fork, cancel } from 'redux-saga/effects'
import { fetchSchemasRequest, fetchSchemasSuccess, fetchSchemasFailure } from '../actions'
import { getSchemas, loadSchemasWatcher, schemasData } from '../sagas'
import { LOCATION_CHANGE } from 'react-router-redux'
import { LOAD_SCHEMAS } from '../constants'

import request from 'utils/request'

describe('SchemaList sagas', () => {
  let generator, next

  beforeEach(() => {
    generator = getSchemas()
    next = generator.next()
    expect(next.value).toEqual(put(fetchSchemasRequest()))

    // make request
    const requestURL = '/api/v1/schema/'
    next = generator.next()
    expect(next.value).toEqual(call(request, requestURL))
  })

  it('should dispatch a fetchSchemasSuccess action', () => {
    const response = {
      data: 'some data'
    }
    next = generator.next(response)
    expect(next.value).toEqual(put(fetchSchemasSuccess('some data')))
  })

  it('should dispatch a fetchSchemasFailure action', () => {
    const response = {
      err: 'some error'
    }
    next = generator.next(response)
    expect(next.value).toEqual(put(fetchSchemasFailure('some error')))
  })
})

describe('loadSchemasWatcher Saga', () => {
  const generator = loadSchemasWatcher()

  it('should watch for LOAD_SCHEMAS action', () => {
    expect(generator.next().value).toEqual(take(LOAD_SCHEMAS))
  })

  it('should invoke getSchemas saga on actions', () => {
    expect(generator.next(put(LOAD_SCHEMAS)).value).toEqual(call(getSchemas))
  })
})

describe('schemasData', () => {
  const generator = schemasData()
  let forkDescriptor

  it('should asyncronously fork loadSchemasWatcher saga', () => {
    forkDescriptor = generator.next()
    expect(forkDescriptor.value).toEqual(fork(loadSchemasWatcher))
  })

  it('should yield until LOCATION_CHANGE action', () => {
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
