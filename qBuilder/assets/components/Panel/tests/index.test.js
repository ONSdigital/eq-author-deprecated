import Panel from '../index'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<Panel />', () => {
  it('should render its children', () => {
    const children = 'I am some stuff'
    const renderedPanel = shallow(<Panel>{children}</Panel>)
    expect(renderedPanel.contains(children)).toEqual(true)
  })
})
