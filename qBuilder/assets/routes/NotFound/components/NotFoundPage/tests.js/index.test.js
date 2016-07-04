import NotFoundPage from '../index'
import MainLayout from 'layouts/MainLayout'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<NotFoundPage />', () => {
  it('should render a MainLayout with message', () => {
    const mainChildren = (<h1>Page Not Found</h1>)
    const mainLayout = shallow(<NotFoundPage />)
    expect(mainLayout.contains(<MainLayout mainChildren={mainChildren} />)).toEqual(true)
  })
})
