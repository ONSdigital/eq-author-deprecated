import MainLayout from '../index'
import Header from 'components/Header'
import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

let mainLayout, children

describe('<MainLayout />', () => {
  before('content', () => {
    children = 'I am children'
    mainLayout = shallow(<MainLayout routes={[]}>{children}</MainLayout>)
  })
  it('should render children and a Header', () => {
    expect(mainLayout.contains(children)).toEqual(true)
  })
  it('should render a <Header />', () => {
    expect(mainLayout.contains(<Header routes={[]} />)).toEqual(true)
  })
})
