/*
 *
 * Modal
 *
 */

import React from 'react'
import { ModalWrapper, ModalTitle, ModalBody } from './components'
import { VelocityTransitionGroup } from 'velocity-react'

export class Modal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: nextProps.isOpen })
  }

  componentDidUnMount() {
    document.removeEventListener('keyup', this.handleKeyUp)
  }

  handleKeyUp = (e) => {
    const KEYCODE_ESC = 27
    if (e.keyCode === KEYCODE_ESC && this.props.isOpen) {
      this.setState({ isOpen: false })
      this.props.onClose()
    }
  }

  render() {
    const { title, children } = this.props

    return (
      <VelocityTransitionGroup {...transitionWrapperOpts}>
        {this.state.isOpen ? <div>
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

export default Modal
