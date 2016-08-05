import expect from 'expect'
import editorReducer, { initialState } from '../reducer'
import * as types from '../constants'
import { Map } from 'immutable'

describe('editorReducer', () => {
  it('returns the initial state', () => {
    expect(editorReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle UPDATE_SCHEMA', () => {
    expect(editorReducer(undefined, {
      type: types.UPDATE_SCHEMA,
      payload: {
        schema: 'hello'
      }
    })).toEqual(Map({
      isFetching: false,
      isSaving: false,
      title: 'My Survey',
      schema: 'hello',
    }))
  })

  it('should handle FETCH_SCHEMA_REQUEST', () => {
    expect(editorReducer(undefined, {
      type: types.FETCH_SCHEMA_REQUEST,
      payload: {
        schema: ''
      }
    })).toEqual(Map({
      isFetching: true,
      isSaving: false,
      title: 'Loading...',
      schema: undefined,
    }))
  })

  it('should handle FETCH_SCHEMA_SUCCESS', () => {
    expect(editorReducer(undefined, {
      type: types.FETCH_SCHEMA_SUCCESS,
      payload: {
        schema: 'hello'
      }
    })).toEqual(Map({
      isFetching: false,
      isSaving: false,
      schema: un
    }))
  })

  it('should handle SAVE_SCHEMA_REQUEST', () => {
    expect(editorReducer(undefined, {
      type: types.SAVE_SCHEMA_REQUEST
    })).toEqual(Map({
      isFetching: false,
      isSaving: true,
      schema: ''
    }))
  })

  it('should handle SAVE_SCHEMA_SUCCESS', () => {
    expect(editorReducer(undefined, {
      type: types.SAVE_SCHEMA_SUCCESS
    })).toEqual(Map({
      isFetching: false,
      isSaving: false,
      schema: ''
    }))
  })

  it('should handle SAVE_SCHEMA_FAILURE', () => {
    expect(editorReducer(undefined, {
      type: types.SAVE_SCHEMA_FAILURE
    })).toEqual(Map({
      isFetching: false,
      isSaving: false,
      schema: ''
    }))
  })
})
