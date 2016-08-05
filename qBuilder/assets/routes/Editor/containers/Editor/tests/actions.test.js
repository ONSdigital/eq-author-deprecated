import expect from 'expect'

import * as actions from '../actions'
import * as types from '../constants'

describe('Editor sync actions', () => {
  describe('changeSchema', () => {
    it('Should return the correct type and the passed schema', () => {
      const schema = { foo: 'bar' }
      const expectedResult = {
        type: types.UPDATE_SCHEMA,
        payload: {
          schema: schema,
        }
      }
      expect(actions.changeSchema(schema)).toEqual(expectedResult)
    })
  })

  describe('fetchSchemaRequest', () => {
    it('Should return the correct type and the passed schema', () => {
      const schema = '//Loading schema'
      const expectedResult = {
        type: types.FETCH_SCHEMA_REQUEST,
        payload: {
          schema
        },
      }
      expect(actions.fetchSchemaRequest(schema)).toEqual(expectedResult)
    })
  })

  describe('fetchSchemaSuccess', () => {
    it('Should return the correct type and the passed schema', () => {
      const schema = { foo: 'bar' }
      const expectedResult = {
        type: types.FETCH_SCHEMA_SUCCESS,
        payload: {
          schema
        }
      }
      expect(actions.fetchSchemaSuccess(schema)).toEqual(expectedResult)
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
