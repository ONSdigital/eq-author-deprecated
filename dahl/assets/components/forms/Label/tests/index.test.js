import Label from '../index'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<Label />', () => {
  it('should render its children', () => {
    const children = 'I am a label'
    const renderedLabel = shallow(<Label>{children}</Label>)
    expect(renderedLabel.contains(children)).toEqual(true)
  })
})
