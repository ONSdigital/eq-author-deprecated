/**
*
* ModalTitle
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

const ModalTitle = ({children}) => (
  <div className={styles.modalTitle}>
    {children}
  </div>
)

ModalTitle.propTypes = {
  children: PropTypes.string.isRequired,
}

export default ModalTitle
