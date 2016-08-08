import PopupMenu from '../index'
import styles from '../styles.css'

import expect from 'expect'
import { mount } from 'enzyme'
import React from 'react'

let popupMenu
const options = [{
  title: 'Add',
  to: '/surveys/questionnaire/new/',
  icon: 'pop-add',
}, {
  title: 'Edit',
  icon: 'pop-edit',
  onClick: expect.createSpy(),
}]

const getMenuHiddenAttribute = () => {
  const menuElement = popupMenu.find(`.${styles.menu}`)
  return menuElement.node.attributes['aria-hidden'].value
}

describe('<PopupMenu />', () => {
  before(() => {
    popupMenu = mount(<PopupMenu options={options} />)
  })

  it('should render options', () => {
    expect(popupMenu.find('ul').length).toEqual(1)
    expect(popupMenu.find('li').length).toEqual(options.length)
  })

  it('should open when button is clicked', () => {
    expect(getMenuHiddenAttribute()).toEqual('true')
    popupMenu.find('button').simulate('click')
    expect(getMenuHiddenAttribute()).toEqual('false')
  })

  it('should close when a link is selected', () => {
    popupMenu.find(`span.${styles.link}`).simulate('click')
    expect(getMenuHiddenAttribute()).toEqual('true')
  })
})
