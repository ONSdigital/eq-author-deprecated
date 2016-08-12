import Form from '../index'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<Form />', () => {
  it('should render its children', () => {
    const children = 'I am a form'
    const renderedForm = shallow(<Form action="/go">{children}</Form>)
    expect(renderedForm.contains(children)).toEqual(true)
  })
})
