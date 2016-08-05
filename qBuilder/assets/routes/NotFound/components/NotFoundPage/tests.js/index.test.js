import NotFoundPage from '../index'
import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<NotFoundPage />', () => {
  it('should render with message', () => {
    const mainChildren = (<h1>Page Not Found</h1>)
    const mainLayout = shallow(<NotFoundPage />)
    expect(mainLayout.contains(mainChildren).toEqual(true))
  })
})
