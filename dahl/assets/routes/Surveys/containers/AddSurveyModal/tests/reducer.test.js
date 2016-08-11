import expect from 'expect'
import addSurveyModalReducer from '../reducer'
import { fromJS } from 'immutable'

describe('addSurveyModalReducer', () => {
  it('returns the initial state', () => {
    expect(addSurveyModalReducer(undefined, {})).toEqual(fromJS({}))
  })
})
