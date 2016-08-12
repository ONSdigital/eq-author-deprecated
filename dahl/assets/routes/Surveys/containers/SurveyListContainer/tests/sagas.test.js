import expect from 'expect'
import { call, put, take, race } from 'redux-saga/effects'
import { fetchSchemasRequest, fetchSchemasSuccess, fetchSchemasFailure } from '../actions'
import { getSchemas, deleteSchema, loadSchemasWatcher, deleteSchemasWatcher, schemasData } from '../sagas'
import { LOCATION_CHANGE } from 'react-router-redux'
import { LOAD_SCHEMAS, DELETE_SCHEMA } from '../constants'

import request from 'utils/request'

describe('SurveyListContainer sagas', () => {
  let generator, next

  beforeEach(() => {
    generator = getSchemas()
    next = generator.next()
    expect(next.value).toEqual(put(fetchSchemasRequest()))

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

  // it('should dispatch a deleteSchemaSuccess action', () => {
  //   const response = {
  //     data: 'some data'
  //   }
  //   next = generator.next(response)
  //   expect(next.value).toEqual(put(deleteSchemaSuccess('some data')))
  // })
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

describe('deleteSchemasWatcher Saga', () => {
  const generator = deleteSchemasWatcher()

  it('should watch for DELETE_SCHEMA action', () => {
    expect(generator.next().value).toEqual(take(DELETE_SCHEMA))
  })

  it('should invoke deleteSchema saga on actions', () => {
    const action = put(DELETE_SCHEMA)
    const callDescriptor = generator.next(action).value
    expect(callDescriptor).toEqual(call(deleteSchema, action))
  })
})

describe('schemasData', () => {
  const generator = schemasData()
  let raceDescriptor

  it('should run a race between loadSchemasWatcher/deleteSchemasWatcher watchers and LOCATION_CHANGE', () => {
    raceDescriptor = generator.next().value
    expect(raceDescriptor).toEqual(race([
      [call(loadSchemasWatcher), call(deleteSchemasWatcher)],
      take(LOCATION_CHANGE)
    ]))
  })
})
