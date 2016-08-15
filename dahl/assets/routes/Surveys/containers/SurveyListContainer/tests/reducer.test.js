import expect from 'expect'
import reducer, { initialState } from '../reducer'
import * as types from '../constants'
import { fromJS, List, Map } from 'immutable'

describe('surveysReducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(fromJS(initialState))
  })

  it('should handle FETCH_SURVEYS_REQUEST', () => {
    expect(reducer(undefined, {
      type: types.FETCH_SURVEYS_REQUEST
    })).toEqual(Map({
      isFetching: true,
      items: List([]),
      error: ''
    }))
  })

  it('should handle FETCH_SURVEYS_SUCCESS', () => {
    expect(reducer(undefined, {
      type: types.FETCH_SURVEYS_SUCCESS,
      payload: {
        surveys: [1, 2, 3]
      }
    })).toEqual(Map({
      isFetching: false,
      items: List([1, 2, 3]),
      error: ''
    }))
  })

  it('should handle FETCH_SURVEYS_FAILURE', () => {
    expect(reducer(undefined, {
      type: types.FETCH_SURVEYS_FAILURE,
      error: 'omg it all went wrong'
    })).toEqual(Map({
      isFetching: false,
      items: List([]),
      error: 'omg it all went wrong'
    }))
  })

  it('should handle DELETE_QUESTIONNAIRE_SUCCESS', () => {
    const surveys = [{
      eq_id: 0
    }, {
      eq_id: 1
    }, {
      eq_id: 2
    }]
    expect(reducer(Map({
      isFetching: false,
      items: List(surveys),
      error: ''
    }), {
      type: types.DELETE_QUESTIONNAIRE_SUCCESS,
      payload: {
        surveyId: 1
      }
    })).toEqual(Map({
      isFetching: false,
      items: List([{
        eq_id: 0
      }, {
        eq_id: 2
      }]),
      error: ''
    }))
  })
})
