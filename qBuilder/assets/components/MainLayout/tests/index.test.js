import MainLayout from '../index'
import Button from 'components/Button'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<MainLayout />', () => {
  it('should render children given in props', () => {
    const mainChildren = 'I am the main child'
    const headerChildren = <Button />
    const mainLayout = shallow(<MainLayout mainChildren={mainChildren} headerChildren={headerChildren} />)
    expect(mainLayout.contains(mainChildren)).toEqual(true)
    expect(mainLayout.contains(headerChildren)).toEqual(true)
  })
})
