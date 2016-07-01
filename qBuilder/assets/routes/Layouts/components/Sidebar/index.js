/**
*
* Sidebar
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

const Sidebar = ({children}) => (
  <div className={styles.sidebar}>
    {children}
  </div>
)

Sidebar.propTypes = {
  children: PropTypes.node,
}

export default Sidebar
