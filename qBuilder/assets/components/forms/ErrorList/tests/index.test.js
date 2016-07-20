import ErrorList from '../index'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<ErrorList />', () => {
  it('Should render a list of errors', () => {
    const errors = [
      'I am an error',
      'I am another error'
    ]
    const renderedList = shallow(<ErrorList errors={errors} />)
    expect(renderedList.contains('I am an error')).toEqual(true)
    expect(renderedList.contains('I am another error')).toEqual(true)
  })

  it('Should return null if no errors are supplied', () => {
    const renderedList = shallow(<ErrorList errors={[]} />)
    expect(renderedList.node).toNotExist()
  })
})
