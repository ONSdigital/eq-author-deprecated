/**
*
* ModalBody
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

const ModalBody = ({children}) => (
  <div className={styles.modalBody}>
    {children}
  </div>
)

ModalBody.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ModalBody
