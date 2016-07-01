import React, { PropTypes } from 'react'

import styles from './styles.css'

import Sidebar from '../../components/Sidebar'
import Grid from '../../components/Grid'

function SidebarGridLeft({children}) {
  return (
    <div className={styles.sidebarGridLeft}>
      <Sidebar />
      <Grid>
        sadasd
        {children}
      </Grid>
    </div>
  )
}

SidebarGridLeft.propTypes = {
  children: PropTypes.element.isRequired,
}

export default SidebarGridLeft
