import PopupMenu from '../index'
import styles from '../styles.css'

import expect from 'expect'
import { mount } from 'enzyme'
import React from 'react'

const setup = () => {
  const options = [{
    title: 'Add',
    to: '/surveys/questionnaire/new/',
    icon: 'pop-add',
  }, {
    title: 'Edit',
    icon: 'pop-edit',
    onClick: expect.createSpy(),
  }]
  const wrapper = mount(<PopupMenu options={options} />)

  const getMenuHiddenAttribute = () => {
    const menuElement = wrapper.find(`.${styles.menu}`)
    return menuElement.node.attributes['aria-hidden'].value
  }

  return { options, wrapper, getMenuHiddenAttribute }
}

describe('<PopupMenu />', () => {
  it('should render options', () => {
    const { wrapper, options } = setup()
    expect(wrapper.find('ul').length).toEqual(1)
    expect(wrapper.find('li').length).toEqual(options.length)
  })

  it('should open when button is clicked', () => {
    const { wrapper, getMenuHiddenAttribute } = setup()
    expect(getMenuHiddenAttribute()).toEqual('true')
    wrapper.find(`.${styles.button}`).simulate('click')
    expect(getMenuHiddenAttribute()).toEqual('false')
  })

  it('should close when an option is selected', () => {
    const { wrapper, getMenuHiddenAttribute } = setup()
    wrapper.find(`.${styles.button}`).simulate('click')
    wrapper.find('ul li button').simulate('click')
    expect(getMenuHiddenAttribute()).toEqual('true')
  })
})
