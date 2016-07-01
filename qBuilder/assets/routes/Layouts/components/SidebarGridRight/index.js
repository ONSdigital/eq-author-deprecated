import React, { PropTypes } from 'react'

import styles from './styles.css'

import Sidebar from '../../components/Sidebar'
import Grid from '../../components/Grid'

function SidebarGridRight({children}) {
  return (
    <div className={styles.sidebarGridRight}>
      <Grid />
      <Sidebar />
    </div>
  )
}

SidebarGridRight.propTypes = {
  children: PropTypes.element.isRequired,
}

export default SidebarGridRight
