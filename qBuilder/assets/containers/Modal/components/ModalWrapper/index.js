/**
*
* ModalWrapper
*
*/

import React, { PropTypes } from 'react'
import Animate from 'rc-animate'

import styles from './styles.css'
import transitions from 'styles/shared/transitions.css'

class ModalWrapper extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props
    return (
      <Animate transitionName={transitions} transitionAppear>
        <div className={styles.modal}>
          {children}
        </div>
      </Animate>
    )
  }
}

export default ModalWrapper
