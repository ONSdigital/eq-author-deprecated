import Input from '../index'
import styles from '../styles.css'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<Input />', () => {
  it('should add the appropriate class when the input is invalid', () => {
    const renderedInput = shallow(<Input valid={false} />)
    expect(renderedInput.hasClass(styles.invalid)).toEqual(true)
  })
})
