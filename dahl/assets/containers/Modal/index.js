/*
 *
 * Modal
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { selectModalIsOpen } from './selectors'

import { ModalWrapper, ModalTitle, ModalBody } from './components'

export class Modal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    window.document.addEventListener('keypress', this.onKeyPress)
  }

  onKeyPress = (e) => {
    console.log(e)
  }

  render() {
    const { title, children, isOpen, closeButtons } = this.props

    return (
      <ModalWrapper isOpen={isOpen}>
        <ModalTitle>{title}</ModalTitle>
        <ModalBody>{children}</ModalBody>
      </ModalWrapper>
    )
  }
}

const mapStateToProps = state => ({
  isOpen: selectModalIsOpen(state),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
