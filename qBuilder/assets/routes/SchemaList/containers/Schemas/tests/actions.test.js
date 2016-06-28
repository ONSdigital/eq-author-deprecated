import expect from 'expect'
import * as actions from '../actions'
import * as types from '../constants'

describe('Schemas sync actions', () => {
  describe('fetchSchemasRequest', () => {
    it('Should return the correct type', () => {
      const expectedResult = {
        type: types.FETCH_SCHEMAS_REQUEST,
      }
      expect(actions.fetchSchemasRequest()).toEqual(expectedResult)
    })
  })

  describe('fetchSchemasSuccess', () => {
    it('Should return the correct type and value', () => {
      const schemas = []
      const expectedResult = {
        type: types.FETCH_SCHEMAS_SUCCESS,
        payload: {
          schemas: schemas
        }
      }
      expect(actions.fetchSchemasSuccess(schemas)).toEqual(expectedResult)
    })
  })
})
