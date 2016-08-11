/*
 *
 * Modal
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { selectModalIsOpen } from './selectors'
import { closeModal } from './actions'
import { ModalWrapper, ModalTitle, ModalBody } from './components'
import { VelocityTransitionGroup } from 'velocity-react'

const transitionWrapperOpts = {
  component: 'div',
  enter: {
    animation: 'fadeIn',
    duration: 200,
  },
  leave: {
    animation: 'fadeOut',
    duration: 100,
  }
}

const transitionContentOpts = {
  component: 'div',
  runOnMount: true,
  enter: {
    animation: {
      translateY: 0,
      opacity: 1,
      easing: 'ease-out'
    },
    duration: 100,
    delay: 200
  },
  leave: {
    animation: {
      translateY: 100,
      opacity: 0,
    },
  }
}

export class Modal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    window.document.addEventListener('keyup', this.handleKeyUp)
  }

  handleKeyUp = (e) => {
    const KEYCODE_ESC = 27
    if (e.keyCode === KEYCODE_ESC) {
      this.props.dispatch(closeModal())
    }
  }

  render() {
    const { title, children, isOpen } = this.props

    return (
      <VelocityTransitionGroup {...transitionWrapperOpts}>
        {isOpen ? <div>
          <ModalWrapper>
            <VelocityTransitionGroup {...transitionContentOpts}>
              <ModalTitle>{title}</ModalTitle>
              <ModalBody>{children}</ModalBody>
            </VelocityTransitionGroup>
          </ModalWrapper>
        </div> : undefined}
      </VelocityTransitionGroup>
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
