import expect from 'expect'
import * as actions from '../actions'
import * as types from '../constants'

describe('Surveys sync actions', () => {
  describe('fetchSurveysRequest', () => {
    it('Should return the correct type', () => {
      const expectedResult = {
        type: types.FETCH_SURVEYS_REQUEST,
      }
      expect(actions.fetchSurveysRequest()).toEqual(expectedResult)
    })
  })

  describe('fetchSurveysSuccess', () => {
    it('Should return the correct type and payload', () => {
      const surveys = [1, 2, 3]
      const expectedResult = {
        type: types.FETCH_SURVEYS_SUCCESS,
        payload: {
          surveys: surveys
        }
      }
      expect(actions.fetchSurveysSuccess(surveys)).toEqual(expectedResult)
    })
  })
})
