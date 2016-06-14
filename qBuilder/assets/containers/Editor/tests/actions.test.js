import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as actions from '../actions'
import * as types from '../constants'

import {API_URL} from 'global_constants'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Editor sync actions', () => {
  describe('changeValue', () => {
    it('Should return the correct type and the passed value', () => {
      const value = { foo: 'bar' }
      const expectedResult = {
        type: types.CHANGE_VALUE,
        value: value,
      }
      expect(actions.changeValue(value)).toEqual(expectedResult)
    })
  })

  describe('fetchSchemaRequest', () => {
    it('Should return the correct type and the passed value', () => {
      const value = '//fetching schema...'
      const expectedResult = {
        type: types.FETCH_SCHEMA_REQUEST,
        value,
      }
      expect(actions.fetchSchemaRequest(value)).toEqual(expectedResult)
    })
  })

  describe('fetchSchemaSuccess', () => {
    it('Should return the correct type and the passed value', () => {
      const value = { foo: 'bar' }
      const expectedResult = {
        type: types.FETCH_SCHEMA_SUCCESS,
        value,
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

describe('Editor async actions', () => {
  afterEach(() => {
    fetchMock.reset()
  })

  it('creates FETCH_SCHEMA_SUCCESS when fetching schema', () => {
    const value = '{ success: true }'
    const schemaID = 'blah'

    fetchMock.mock(`${API_URL}/schema/${schemaID}/`, { body: value })

    const expectedActions = [
      { type: types.FETCH_SCHEMA_REQUEST, value: '//fetching schema...' },
      { type: types.FETCH_SCHEMA_SUCCESS, value }
    ]

    const store = mockStore({ value: {} })

    return store.dispatch(actions.fetchSchema(schemaID))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
