import Button from '../index'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<Button />', () => {
  it('should render its children', () => {
    const children = 'I am a button label'
    const renderedButton = shallow(<Button>{children}</Button>)
    expect(renderedButton.contains(children)).toEqual(true)
  })

  it('should render an icon if specified in props', () => {
    const renderedButton = shallow(<Button icon='menu'></Button>)
    console.log(renderedButton)
  })

  it('should display the correct "type" as per props', () => {

  })
})
