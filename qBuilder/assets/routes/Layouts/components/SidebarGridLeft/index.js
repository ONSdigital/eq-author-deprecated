import React, { PropTypes } from 'react'

import styles from './styles.css'

import Sidebar from '../../components/Sidebar'
import Grid, { gridStyles } from '../../components/Grid'

function SidebarGridLeft({children}) {
  return (
    <div className={styles.sidebarGridLeft}>
      <Sidebar />
      <Grid />
    </div>
  )
}

SidebarGridLeft.propTypes = {
  children: PropTypes.element,
}

export default SidebarGridLeft
