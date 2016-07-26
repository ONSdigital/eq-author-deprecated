import Field from '../index'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<Field />', () => {
  it('should render its children', () => {
    const children = 'I am a field'
    const renderedField = shallow(<Field>{children}</Field>)
    expect(renderedField.contains(children)).toEqual(true)
  })
})
