import Button from '../index'
import { Link } from 'react-router'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<Button />', () => {
  it('should render its children', () => {
    const children = 'I am a button label'
    const renderedButton = shallow(<Button>{children}</Button>)
    expect(renderedButton.contains(children)).toEqual(true)
  })

  it('should render a <Link /> if the "to" prop is supplied', () => {
    const renderedButton = shallow(<Button to='/' />)
    expect(renderedButton.contains(<Link to='/' />))
  })

  it('should render a <button /> if no "to" prop is supplied', () => {
    const renderedButton = shallow(<Button />)
    expect(renderedButton.contains(<button />))
  })
})
