/*
 *
 * Modal
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import selectModal from './selectors'

import { ModalWrapper, ModalTitle, ModalBody } from './components'

export class Modal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title, children } = this.props
    return (
      <ModalWrapper>
        <ModalTitle>{title}</ModalTitle>
        <ModalBody>{children}</ModalBody>
      </ModalWrapper>
    )
  }
}

const mapStateToProps = selectModal()

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
