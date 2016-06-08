import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'

import * as actions from '../actions'
import * as types from '../constants'

import API_URL from '../../../constants'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Editor sync actions', () => {

  describe('Action: changeValue', () => {
    it('Should return the correct type and the passed value', () => {
      const value = { foo: 'bar' }
      const expectedResult = {
        type: types.CHANGE_USERNAME,
        value: value,
      }
      expect(actions.changeValue(value)).toEqual(expectedResult)
    })
  })

  describe('Action: fetchSchema', () => {
    it('Should return the correct type and the passed value', () => {
      const value = '//fetching schema...'
      const fetchSchema = {
        type: types.FETCH_SCHEMA,
        value: value,
      }
      expect(actions.fetchSchema(value)).toEqual(expectedResult)
    })
  })

  describe('Action: receiveSchema', () => {
    it('Should return the correct type and the passed value', () => {
      const value = { foo: 'bar' }
      const expectedResult = {
        type: types.FETCH_SCHEMAS_SUCCESS,
        value: value,
      }
      expect(actions.receiveSchema(value)).toEqual(expectedResult)
    })
  })

  describe('Action: saveSchemaRequest', () => {
    it('Should return the correct type', () => {
      const expectedResult = {
        type: types.SAVE_SCHEMA_REQUEST,
      }
      expect(actions.saveSchemaRequest(value)).toEqual(expectedResult)
    })
  })

  describe('Action: saveSchemaSuccess', () => {
    it('Should return the correct type', () => {
      const expectedResult = {
        type: types.SAVE_SCHEMA_SUCCESS,
      }
      expect(actions.saveSchemaSuccess(value)).toEqual(expectedResult)
    })
  })

  describe('Action: fetchSchema', () => {
    it('Should return the correct type', () => {
      const expectedResult = {
        type: types.SAVE_SCHEMA_SUCCESS,
      }
      expect(actions.fetchSchema()).toEqual(expectedResult)
    })
  })

})

describe('Editor async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
    const successMsg = {success: true}
    const schemaID = 'blah'

    nock(API_URL)
      .get(`/schema/${schemaID}`)
      .reply(200, { body: successMsg })

    const expectedActions = [
      { type: types.SAVE_SCHEMA_REQUEST },
      { type: types.SAVE_SCHEMA_SUCCESS body: successMsg }
    ]

    const store = mockStore({  })

    return store.dispatch(actions.fetchTodos())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
