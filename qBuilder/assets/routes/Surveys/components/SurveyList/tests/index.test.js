import SurveyList from '../index'
import QuestionnaireList from 'routes/Surveys/components/QuestionnaireList'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<SurveyList />', () => {
  it('render a QuestionnaireList', () => {
    const surveyList = shallow(<SurveyList schemas={[]} deleteSchema={() => {}} />)
    expect(surveyList.find(QuestionnaireList).length).toEqual(1)
  })
})
