import PasswordInput from '../index'
import Input from 'components/Input'

import expect from 'expect'
import { mount } from 'enzyme'
import React from 'react'
import styles from '../styles.css'

let renderedInput

describe('<PasswordInput />', () => {
  before(() => {
    renderedInput = mount(<PasswordInput id="my_input" name="my_input" />)
  })

  it('should render an Input', () => {
    expect(renderedInput.find(Input).length).toEqual(1)
  })

  it('should toggle the visibility of the password when the button is clicked', () => {
    renderedInput.find(`.${styles.showPassword}`).simulate('click')
    expect(renderedInput.find('input[type="text"]').length).toEqual(1)
  })
})
