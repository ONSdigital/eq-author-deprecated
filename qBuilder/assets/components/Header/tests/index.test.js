import Header from '../index'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<Header />', () => {
  it('should render a given title', () => {
    const title = 'I am a title'
    const header = shallow(<Header title={title} />)
    expect(header.contains(title)).toEqual(true)
  })
})
