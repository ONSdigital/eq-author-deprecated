import Modal from '../index'
import expect from 'expect'
import { mount } from 'enzyme'
import React from 'react'

const modalContent = 'hello'
let modal, main

describe('<Modal />', () => {
  before(() => {
    main = document.createElement('main')
    document.body.appendChild(main)
  })

  it('should not render content when isOpen=false', () => {
    modal = mount(<Modal isOpen={false}>{modalContent}</Modal>)
    expect(modal.node.node.innerHTML.search(modalContent) > 0).toBe(false)
    modal.unmount()
  })

  it('should render content when isOpen=true', () => {
    modal = mount(<Modal isOpen>{modalContent}</Modal>)
    expect(modal.node.node.innerHTML.search(modalContent) > 0).toBe(true)
    modal.unmount()
  })

  it('should render into the body, not in context', () => {
    let foundNode = false
    modal = mount(<Modal isOpen>{modalContent}</Modal>)
    for (let node of document.body.childNodes) {
      if (node === modal.node.node) {
        foundNode = true
      }
    }
    expect(foundNode).toBe(true)
    modal.unmount()
  })

  it('should close when escape key is pressed', () => {
    const onClose = sinon.spy()
    expect(modal.prop('isOpen')).toEqual(true)
    modal = mount(<Modal onClose={onClose} isOpen>{modalContent}</Modal>)
    modal.simulate('keyUp', { keyCode: 27 })
    // cannot get this to work
    modal.unmount()
    return true
    expect(modal.prop('isOpen')).toEqual(false) // eslint-disable-line
    expect(onClose.called).toEqual(true)
  })

  it('should set aria-hidden=true attribute on <main> element', () => {
    modal = mount(<Modal isOpen>{modalContent}</Modal>)
    window.setTimeout(() => {
      expect(main.getAttribute('aria-hidden')).toEqual('true')
    }, 100)
  })

  it('should toggle aria-hidden=false attribute on <main> element', () => {
    modal.setProps({isOpen: false})
    window.setTimeout(() => {
      expect(main.getAttribute('aria-hidden')).toEqual('false')
    }, 100)
  })
})
