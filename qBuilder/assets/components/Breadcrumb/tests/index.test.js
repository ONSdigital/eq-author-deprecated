import Breadcrumb from '../index'
import { Link } from 'react-router'
import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<Breadcrumb />', () => {
  it('should render a list of links according to given routes', () => {
    const routes = [{
      'path': '/',
      'name': 'home',
      'breadcrumbName': 'Home',
    }, {
      'path': '/surveys/',
      'name': 'surveys',
      'breadcrumbName': 'Surveys'
    }]
    const renderedBreadcrumb = shallow(<Breadcrumb routes={routes} />)
    expect(renderedBreadcrumb.find(Link).length).toEqual(1)
  })
})
