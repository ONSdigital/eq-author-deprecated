import AddSurveyModal from '../index'
import Modal from 'components/Modal'
import SubmitButton from 'components/forms/SubmitButton'

import expect from 'expect'
import { mount, ReactWrapper } from 'enzyme'
import React from 'react'

const setup = () => {
  let props = {
    addSurvey: sinon.spy(),
    addSurveyCancel: sinon.spy(),
    isOpen: false,
    errors: []
  }
  const wrapper = mount(<AddSurveyModal {...props} />)
  return { props, wrapper }
}

describe('<AddSurveyModal />', () => {
  it('should render a Modal component', () => {
    const { wrapper } = setup()
    expect(wrapper.find(Modal).length).toBe(1)
    wrapper.unmount()
  })
})
