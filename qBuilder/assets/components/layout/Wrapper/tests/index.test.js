import Wrapper from '../index'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<Wrapper />', () => {
  it('should render its children', () => {
    const children = 'I am a child'
    const wrapper = shallow(<Wrapper>{children}</Wrapper>)
    expect(wrapper.contains(children)).toEqual(true)
  })
})
