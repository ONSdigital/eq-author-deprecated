import TabBar from '../index'
import styles from '../styles.css'
import Button from 'components/forms/Button'
import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

const setup = () => {
  const props = {
    buttons: [<Button>Button</Button>],
    tabs: [{
      to: '/',
      title: 'Tab 1'
    }, {
      to: '/',
      title: 'Tab 2'
    }],
  }
  const wrapper = shallow(<TabBar {...props} />)
  return { props, wrapper }
}

describe('<TabBar />', () => {
  it('should render a button, if provided by props', () => {
    const { wrapper } = setup()
    expect(wrapper.find(Button).length).toEqual(1)
  })

  it('should render some tabs', () => {
    const { wrapper } = setup()
    expect(wrapper.find(`.${styles.link}`).length).toEqual(2)
  })
})
