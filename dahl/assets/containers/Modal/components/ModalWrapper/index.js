/**
*
* ModalWrapper
*
*/

import React, { PropTypes } from 'react'
import styles from './styles.css'

class ModalWrapper extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children } = this.props
    return (
      <div className={styles.modal}>
        {children}
      </div>
    )
  }
}

export default ModalWrapper
