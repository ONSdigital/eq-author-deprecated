import expect from 'expect'
import { call, put, take, race } from 'redux-saga/effects'
import { fetchSurveysRequest, fetchSurveysSuccess, fetchSurveysFailure } from '../actions'
import { getSurveys, deleteSurvey, loadSurveysWatcher, deleteSurveysWatcher, surveysData } from '../sagas'
import { LOCATION_CHANGE } from 'react-router-redux'
import { LOAD_SURVEYS, DELETE_SURVEY } from '../constants'

import request from 'utils/request'

describe('SurveyListContainer sagas', () => {
  let generator, next

  beforeEach(() => {
    generator = getSurveys()
    next = generator.next()
    expect(next.value).toEqual(put(fetchSurveysRequest()))

    const requestURL = '/api/v1/survey/'
    next = generator.next()
    expect(next.value).toEqual(call(request, requestURL))
  })

  it('should dispatch a fetchSurveysSuccess action', () => {
    const response = {
      data: 'some data'
    }
    next = generator.next(response)
    expect(next.value).toEqual(put(fetchSurveysSuccess('some data')))
  })

  it('should dispatch a fetchSurveysFailure action', () => {
    const response = {
      err: 'some error'
    }
    next = generator.next(response)
    expect(next.value).toEqual(put(fetchSurveysFailure('some error')))
  })

  // it('should dispatch a deleteSurveySuccess action', () => {
  //   const response = {
  //     data: 'some data'
  //   }
  //   next = generator.next(response)
  //   expect(next.value).toEqual(put(deleteSurveySuccess('some data')))
  // })
})

describe('loadSurveysWatcher Saga', () => {
  const generator = loadSurveysWatcher()

  it('should watch for LOAD_SURVEYS action', () => {
    expect(generator.next().value).toEqual(take(LOAD_SURVEYS))
  })

  it('should invoke getSurveys saga on actions', () => {
    expect(generator.next(put(LOAD_SURVEYS)).value).toEqual(call(getSurveys))
  })
})

describe('deleteSurveysWatcher Saga', () => {
  const generator = deleteSurveysWatcher()

  it('should watch for DELETE_SURVEY action', () => {
    expect(generator.next().value).toEqual(take(DELETE_SURVEY))
  })

  it('should invoke deleteSurvey saga on actions', () => {
    const action = put(DELETE_SURVEY)
    const callDescriptor = generator.next(action).value
    expect(callDescriptor).toEqual(call(deleteSurvey, action))
  })
})

describe('surveysData', () => {
  const generator = surveysData()
  let raceDescriptor

  it('should run a race between loadSurveysWatcher/deleteSurveysWatcher watchers and LOCATION_CHANGE', () => {
    raceDescriptor = generator.next().value
    expect(raceDescriptor).toEqual(race([
      [call(loadSurveysWatcher), call(deleteSurveysWatcher)],
      take(LOCATION_CHANGE)
    ]))
  })
})
