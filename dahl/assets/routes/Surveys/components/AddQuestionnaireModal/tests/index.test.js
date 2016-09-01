import AddQuestionnaireModal from '../index'
import Modal from 'components/Modal'
import SubmitButton from 'components/forms/SubmitButton'

import expect from 'expect'
import { mount, ReactWrapper } from 'enzyme'
import React from 'react'

const setup = () => {
  let props = {
    addQuestionnaire: sinon.spy(),
    addQuestionnaireCancel: sinon.spy(),
    isOpen: false,
    surveyID: '001',
    errors: [],
  }
  const wrapper = mount(<AddQuestionnaireModal {...props} />)
  return { props, wrapper }
}

describe('<AddQuestionnaireModal />', () => {
  it('should render a Modal component', () => {
    const { wrapper } = setup()
    expect(wrapper.find(Modal).length).toBe(1)
    wrapper.unmount()
  })
})
