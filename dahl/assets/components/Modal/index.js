/*
 *
 * Modal
 *
 */

import React, { PropTypes, Component } from 'react'
import { unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer } from 'react-dom'

import styles from './styles.css'
import { ModalWrapper, ModalTitle, ModalBody } from './components'
import { VelocityTransitionGroup } from 'velocity-react'

export class Modal extends Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = {
      isOpen: props.isOpen
    }
  }

  componentDidMount() {
    this.node = document.createElement('div')
    this.node.addEventListener('keyup', this.handleKeyUp)
    this.node.className = styles.hiddenModal
    document.body.appendChild(this.node)
    this.renderModal(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isOpen: nextProps.isOpen })
    this.renderModal(nextProps)
  }

  componentWillUnmount() {
    this.node.removeEventListener('keyup', this.handleKeyUp)
    document.body.removeChild(this.node)
  }

  handleKeyUp = (e) => {
    const KEYCODE_ESC = 27
    if (e.keyCode === KEYCODE_ESC && this.props.isOpen) {
      this.setState({ isOpen: false })
      this.props.onClose()
    }
  }

  renderModal({ title, children, isOpen }) {
    this.node.className = isOpen ? styles.modal : styles.hiddenModal
    this._modal = (
      <VelocityTransitionGroup {...transitionWrapperOpts}>
        {isOpen
          ? <div>
            <ModalWrapper>
              <VelocityTransitionGroup {...transitionContentOpts}>
                <ModalTitle>{title}</ModalTitle>
                <ModalBody>{children}</ModalBody>
              </VelocityTransitionGroup>
            </ModalWrapper>
          </div> : undefined}
      </VelocityTransitionGroup>
    )
    renderSubtreeIntoContainer(this, this._modal, this.node)
  }

  render() {
    return React.DOM.noscript()
  }
}

const transitionWrapperOpts = {
  component: 'div',
  enter: {
    animation: {
      opacity: 1,
      easing: 'ease-in'
    },
    duration: 200,
  },
  leave: {
    animation: {
      opacity: 0,
      easing: 'ease-out'
    },
    duration: 1000,
    begin: () => {
      toggleAppVisibility(false)
    },
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
    delay: 200,
    complete: () => {
      toggleAppVisibility(true)
    },
  },
  leave: {
    animation: {
      translateY: 100,
      opacity: 0,
    }
  }
}

const toggleAppVisibility = (value) => {
  document.querySelector('main').setAttribute('aria-hidden', value)
}

export default Modal
