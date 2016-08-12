import expect from 'expect'

import * as actions from '../actions'
import * as types from '../constants'

describe('Editor sync actions', () => {
  describe('updateSchema', () => {
    it('Should return the correct type and the passed schema', () => {
      const schema = { foo: 'bar' }
      const expectedResult = {
        type: types.UPDATE_SCHEMA,
        payload: {
          schema,
        }
      }
      expect(actions.updateSchema(schema)).toEqual(expectedResult)
    })
  })

  describe('fetchSchemaRequest', () => {
    it('Should return the correct type', () => {
      const expectedResult = {
        type: types.FETCH_SCHEMA_REQUEST
      }
      expect(actions.fetchSchemaRequest()).toEqual(expectedResult)
    })
  })

  describe('fetchSchemaSuccess', () => {
    it('Should return the correct type and the passed schema', () => {
      const payload = {
        title: 'My title',
        schema: { foo: 'bar' }
      }
      const expectedResult = {
        type: types.FETCH_SCHEMA_SUCCESS,
        payload
      }
      expect(actions.fetchSchemaSuccess(payload)).toEqual(expectedResult)
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
