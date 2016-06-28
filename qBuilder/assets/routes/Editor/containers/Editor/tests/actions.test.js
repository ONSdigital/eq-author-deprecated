import expect from 'expect'

import * as actions from '../actions'
import * as types from '../constants'

describe('Editor sync actions', () => {
  describe('changeValue', () => {
    it('Should return the correct type and the passed value', () => {
      const value = { foo: 'bar' }
      const expectedResult = {
        type: types.CHANGE_VALUE,
        payload: {
          value: value,
        }
      }
      expect(actions.changeValue(value)).toEqual(expectedResult)
    })
  })

  describe('fetchSchemaRequest', () => {
    it('Should return the correct type and the passed value', () => {
      const value = '//Loading schema'
      const expectedResult = {
        type: types.FETCH_SCHEMA_REQUEST,
        payload: {
          value
        },
      }
      expect(actions.fetchSchemaRequest(value)).toEqual(expectedResult)
    })
  })

  describe('fetchSchemaSuccess', () => {
    it('Should return the correct type and the passed value', () => {
      const value = { foo: 'bar' }
      const expectedResult = {
        type: types.FETCH_SCHEMA_SUCCESS,
        payload: {
          value,
        }
      }
      expect(actions.fetchSchemaSuccess(value)).toEqual(expectedResult)
    })
  })

  describe('saveSchemaRequest', () => {
    it('Should return the correct type', () => {
      const expectedResult = {
        type: types.SAVE_SCHEMA_REQUEST,
      }
      expect(actions.saveSchemaRequest()).toEqual(expectedResult)
    })
  })

  describe('saveSchemaSuccess', () => {
    it('Should return the correct type', () => {
      const expectedResult = {
        type: types.SAVE_SCHEMA_SUCCESS,
      }
      expect(actions.saveSchemaSuccess()).toEqual(expectedResult)
    })
  })
})
