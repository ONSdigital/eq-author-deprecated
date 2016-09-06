import SubmitButton from '../index'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<SubmitButton />', () => {
  it('should render its children', () => {
    const children = 'I am a button label'
    const renderedButton = shallow(<SubmitButton>{children}</SubmitButton>)
    expect(renderedButton.contains(children)).toEqual(true)
  })
})
