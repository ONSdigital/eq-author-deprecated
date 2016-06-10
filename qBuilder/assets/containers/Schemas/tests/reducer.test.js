import expect from 'expect'
import schemasReducer, { initialState } from '../reducer'
import { fromJS } from 'immutable'

describe('schemasReducer', () => {
  it('returns the initial state', () => {
    expect(schemasReducer(undefined, {})).toEqual(fromJS(initialState))
  })
})
