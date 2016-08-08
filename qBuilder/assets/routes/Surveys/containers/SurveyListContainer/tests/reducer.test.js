import expect from 'expect'
import reducer, { initialState } from '../reducer'
import * as types from '../constants'
import { fromJS, List, Map } from 'immutable'

describe('schemasReducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(fromJS(initialState))
  })

  it('should handle FETCH_SCHEMAS_REQUEST', () => {
    expect(reducer(undefined, {
      type: types.FETCH_SCHEMAS_REQUEST
    })).toEqual(Map({
      isFetching: true,
      items: List([]),
      error: ''
    }))
  })

  it('should handle FETCH_SCHEMAS_SUCCESS', () => {
    expect(reducer(undefined, {
      type: types.FETCH_SCHEMAS_SUCCESS,
      payload: {
        schemas: [1, 2, 3]
      }
    })).toEqual(Map({
      isFetching: false,
      items: List([1, 2, 3]),
      error: ''
    }))
  })

  it('should handle FETCH_SCHEMAS_FAILURE', () => {
    expect(reducer(undefined, {
      type: types.FETCH_SCHEMAS_FAILURE,
      error: 'omg it all went wrong'
    })).toEqual(Map({
      isFetching: false,
      items: List([]),
      error: 'omg it all went wrong'
    }))
  })

  it('should handle DELETE_SCHEMA_SUCCESS', () => {
    const schemas = [{
      eq_id: 0
    }, {
      eq_id: 1
    }, {
      eq_id: 2
    }]
    expect(reducer(Map({
      isFetching: false,
      items: List(schemas),
      error: ''
    }), {
      type: types.DELETE_SCHEMA_SUCCESS,
      payload: {
        schemaId: 1
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
