import expect from 'expect'
import editorReducer from '../reducer'
import { fromJS } from 'immutable'

describe('editorReducer', () => {
  it('returns the initial state', () => {
    expect(editorReducer(undefined, {})).toEqual(fromJS({}))
  })
})
