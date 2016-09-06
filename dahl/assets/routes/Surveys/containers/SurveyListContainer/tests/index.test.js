import { SurveyListContainer } from '../index'
import SurveyTable from 'routes/Surveys/components/SurveyTable'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

const setup = () => {
  const props = {
    actions: {
      deleteQuestionnaire: expect.createSpy(),
      loadSurveys: expect.createSpy()
    },
    addQuestionnaireModal: {},
    addSurveyModal: {},
    surveys: [{
      id: 0,
      title: 'Hello I am a survey',
      path: 'path/to/survey'
    }]
  }

  const wrapper = shallow(<SurveyListContainer {...props} />)

  return {
    props,
    wrapper
  }
}

describe('<SurveyListContainer />', () => {
  it('should render a SurveyTable component', () => {
    const { wrapper } = setup()
    expect(wrapper.find(SurveyTable).length).toBe(1)
  })
})
