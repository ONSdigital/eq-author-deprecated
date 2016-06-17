import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as actions from '../actions'
import * as types from '../constants'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Schemas sync actions', () => {
  describe('fetchSchemasRequest', () => {
    it('Should return the correct type', () => {
      const expectedResult = {
        type: types.FETCH_SCHEMAS_REQUEST,
      }
      expect(actions.fetchSchemasRequest()).toEqual(expectedResult)
    })
  })

  describe('receiveSchemas', () => {
    it('Should return the correct type and value', () => {
      const schemas = []
      const expectedResult = {
        type: types.FETCH_SCHEMAS_SUCCESS,
        schemas: schemas
      }
      expect(actions.fetchSchemasSuccess(schemas)).toEqual(expectedResult)
    })
  })
})

describe('Schemas async actions', () => {
  afterEach(() => {
    fetchMock.reset()
  })

  it('creates FETCH_SCHEMAS_SUCCESS when fetching schemas', () => {
    fetchMock.mock('/schema/', { body: { foo: 'bar' } })

    const expectedActions = [
      { type: types.FETCH_SCHEMAS_REQUEST },
      { type: types.FETCH_SCHEMAS_SUCCESS, schemas: { foo: 'bar' } }
    ]

    const store = mockStore()

    return store.dispatch(actions.fetchSchemas())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
