import expect from 'expect'
import editorReducer, { initialState } from '../reducer'
import * as types from '../constants'
import { Map } from 'immutable'

describe('editorReducer', () => {
  it('returns the initial state', () => {
    expect(editorReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle CHANGE_VALUE', () => {
    expect(editorReducer(undefined, {
      type: types.CHANGE_VALUE,
      value: 'hello'
    })).toEqual(Map({
      isFetching: false,
      isSaving: false,
      value: 'hello',
    }))
  })

  it('should handle FETCH_SCHEMA_REQUEST', () => {
    expect(editorReducer(undefined, {
      type: types.FETCH_SCHEMA_REQUEST
    })).toEqual(Map({
      isFetching: true,
      isSaving: false,
      value: ''
    }))
  })

  it('should handle FETCH_SCHEMA_SUCCESS', () => {
    expect(editorReducer(undefined, {
      type: types.FETCH_SCHEMA_SUCCESS,
      value: 'hello'
    })).toEqual(Map({
      isFetching: false,
      isSaving: false,
      value: 'hello'
    }))
  })

  it('should handle SAVE_SCHEMA_REQUEST', () => {
    expect(editorReducer(undefined, {
      type: types.SAVE_SCHEMA_REQUEST
    })).toEqual(Map({
      isFetching: false,
      isSaving: true,
      value: ''
    }))
  })

  it('should handle SAVE_SCHEMA_SUCCESS', () => {
    expect(editorReducer(undefined, {
      type: types.SAVE_SCHEMA_SUCCESS
    })).toEqual(Map({
      isFetching: false,
      isSaving: false,
      value: ''
    }))
  })


})
