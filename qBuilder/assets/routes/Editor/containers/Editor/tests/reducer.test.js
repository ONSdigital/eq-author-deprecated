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
      schema: 'hello',
    }))
  })

  it('should handle FETCH_SCHEMA_REQUEST', () => {
    expect(editorReducer(undefined, {
      type: types.FETCH_SCHEMA_REQUEST
    })).toEqual(Map({
      isFetching: true,
      isSaving: false,
      title: 'Loading...',
    }))
  })

  it('should handle FETCH_SCHEMA_SUCCESS', () => {
    expect(editorReducer(undefined, {
      type: types.FETCH_SCHEMA_SUCCESS,
      payload: {
        title: 'title',
        schema: 'hello',
      }
    })).toEqual(Map({
      isFetching: false,
      isSaving: false,
      title: 'title',
      schema: 'hello',
    }))
  })

  it('should handle SAVE_SCHEMA_REQUEST', () => {
    expect(editorReducer(undefined, {
      type: types.SAVE_SCHEMA_REQUEST
    })).toEqual(Map({
      isFetching: false,
      isSaving: true,
    }))
  })

  it('should handle SAVE_SCHEMA_SUCCESS', () => {
    expect(editorReducer(undefined, {
      type: types.SAVE_SCHEMA_SUCCESS
    })).toEqual(Map({
      isFetching: false,
      isSaving: false
    }))
  })

  it('should handle SAVE_SCHEMA_FAILURE', () => {
    expect(editorReducer(undefined, {
      type: types.SAVE_SCHEMA_FAILURE
    })).toEqual(Map({
      isFetching: false,
      isSaving: false,
    }))
  })
})
