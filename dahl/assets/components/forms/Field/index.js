/**
*
* Field
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

const Field = ({children}) => (
  <div className={styles.field}>
    {children}
  </div>
)

Field.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Field
