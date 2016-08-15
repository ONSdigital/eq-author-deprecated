import { SurveyListContainer } from '../index'
import SurveyList from 'routes/Surveys/components/SurveyList'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

const setup = () => {
  const props = {
    actions: {
      deleteQuestionnaire: expect.createSpy(),
      loadSurveys: expect.createSpy()
    },
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
  it('should render a SurveyList component', () => {
    const { wrapper } = setup()
    expect(wrapper.find(SurveyList).length).toBe(1)
  })
})
