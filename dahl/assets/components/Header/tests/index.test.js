import Header from '../index'
import Breadcrumb from 'components/Breadcrumb'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<Header />', () => {
  it('should render Breadcrumbs', () => {
    const routes = []
    const header = shallow(<Header {...routes} />)
    expect(header.find(Breadcrumb).length).toEqual(true)
  })
})
