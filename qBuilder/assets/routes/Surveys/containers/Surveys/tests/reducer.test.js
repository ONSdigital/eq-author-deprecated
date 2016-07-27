import expect from 'expect'
import SurveysReducer from '../reducer'
import { fromJS } from 'immutable'

describe('SurveysReducer', () => {
  it('returns the initial state', () => {
    expect(SurveysReducer(undefined, {})).toEqual(fromJS({}))
  })
})
