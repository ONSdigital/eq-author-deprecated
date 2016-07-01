/**
*
* Sidebar
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

function Sidebar({children}) {
  return (
    <div className={styles.sidebar}>
      {children}
    </div>
  )
}

Sidebar.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Sidebar
