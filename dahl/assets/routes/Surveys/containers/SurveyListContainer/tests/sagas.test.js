import expect from 'expect'
import { call, put, take, race } from 'redux-saga/effects'
import * as actions from '../actions'
import { getSurveys, loadSurveysWatcher, addSurveyWatcher, addSurvey } from '../sagas/surveys'
import { deleteQuestionnaire, deleteQuestionnairesWatcher, addQuestionnaireWatcher,
          addQuestionnaire, questionnaireData } from '../sagas/questionnaires'
import { sagas as surveysSaga } from '../sagas'
import { LOCATION_CHANGE } from 'react-router-redux'
import { LOAD_SURVEYS, DELETE_QUESTIONNAIRE } from '../constants'

import request from 'utils/request'

describe('fetchSurveys saga', () => {
  let generator, next

  beforeEach(() => {
    generator = getSurveys()
    next = generator.next()
    expect(next.value).toEqual(put(actions.fetchSurveysRequest()))

    const requestURL = 'surveys/'
    next = generator.next()
    expect(next.value).toEqual(call(request, requestURL))
  })

  it('should dispatch a fetchSurveysSuccess action', () => {
    const response = {
      data: 'some data'
    }
    next = generator.next(response)
    expect(next.value).toEqual(put(actions.fetchSurveysSuccess(response.data)))
  })

  it('should dispatch a fetchSurveysFailure action', () => {
    const response = {
      err: 'some error'
    }
    next = generator.next(response)
    expect(next.value).toEqual(put(actions.fetchSurveysFailure('some error')))
  })
})

describe('loadSurveysWatcher Saga', () => {
  const generator = loadSurveysWatcher()

  it('should watch for LOAD_SURVEYS action', () => {
    expect(generator.next().value).toEqual(take(LOAD_SURVEYS))
  })

  it('should invoke getSurveys saga on actions', () => {
    expect(generator.next(put(LOAD_SURVEYS)).value).toEqual(call(getSurveys))
  })
})

describe('addSurvey Saga', () => {
  let generator, next
  const surveyAction = {
    payload: {
      survey: {
        title: 'My Survey',
        survey_id: '001'
      }
    }
  }

  beforeEach(() => {
    generator = addSurvey(surveyAction)
    next = generator.next()
    expect(next.value).toEqual(put(actions.addSurveyRequest()))

    const requestURL = 'surveys/'

    next = generator.next()
    expect(next.value).toEqual(call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(surveyAction.payload.survey)
    }))
  })

  it('should dispatch a addSurveySuccess action', () => {
    const response = {
      data: 'some data'
    }
    expect(generator.next(response).value).toEqual(put(actions.addSurveySuccess('some data')))
  })

  it('should dispatch a addSurveyFailure action', () => {
    const errList = ['you', 'did', 'it', 'wrong']
    const response = {
      err: {
        response: {
          json: () => {
            return errList
          }
        }
      }
    }
    expect(generator.next(response).value).toEqual(response.err.response.json())
    expect(generator.next(errList).value).toEqual(put(actions.addSurveyFailure(errList)))
  })
});

describe('addQuestionnaire Saga', () => {
  let generator, next
  const questionnaireAction = {
    payload: {
      questionniareDetails: {
        surveyID: '1',
        title: 'My Survey',
      }
    }
  }
  beforeEach(() => {
    generator = addQuestionnaire(questionnaireAction)
    next = generator.next()
    expect(next.value).toEqual(put(actions.addQuestionnaireRequest()))

    const requestURL = 'schema/'
    next = generator.next()
    expect(next.value).toEqual(call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({
        ...questionnaireData,
        'survey_id': questionnaireAction.payload.questionniareDetails.surveyID,
        'title': questionnaireAction.payload.questionniareDetails.title,
      }, null, ' ')
    }))
  })

  it('should dispatch a addQuestionnaireSuccess action', () => {
    const response = {
      survey: 'some data'
    }
    expect(generator.next(response).value).toEqual(put(actions.addQuestionnaireSuccess()))
  })

  it('should dispatch a addQuestionnaireFailure action', () => {
    const response = {
      err: 'some error'
    }
    expect(generator.next(response).value).toEqual(put(actions.addQuestionnaireFailure('some error')))
  })
});

describe('deleteQuestionnairesWatcher Saga', () => {
  const generator = deleteQuestionnairesWatcher()

  it('should watch for DELETE_QUESTIONNAIRE action', () => {
    expect(generator.next().value).toEqual(take(DELETE_QUESTIONNAIRE))
  })

  it('should invoke deleteQuestionnaire saga on actions', () => {
    const action = put(DELETE_QUESTIONNAIRE)
    const callDescriptor = generator.next(action).value
    expect(callDescriptor).toEqual(call(deleteQuestionnaire, action))
  })
})

describe('surveysData', () => {
  const generator = surveysSaga()
  let raceDescriptor

  it('should run a race between the watchers and LOCATION_CHANGE', () => {
    raceDescriptor = generator.next().value
    expect(raceDescriptor).toEqual(race([
      [
        call(loadSurveysWatcher),
        call(addSurveyWatcher),
        call(addQuestionnaireWatcher),
        call(deleteQuestionnairesWatcher),
      ],
      take(LOCATION_CHANGE)
    ]))
  })
})
