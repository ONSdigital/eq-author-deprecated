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
    return (
      <div className={styles.modalWrapper}>
        {this.props.children}
      </div>
    )
  }
}

export default ModalWrapper
