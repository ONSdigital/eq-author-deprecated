import Canvas from '../index'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<Canvas />', () => {
  it('should render its children', () => {
    const children = 'I am a child'
    const canvas = shallow(<Canvas>{children}</Canvas>)
    expect(canvas.contains(children)).toEqual(true)
  })
})
