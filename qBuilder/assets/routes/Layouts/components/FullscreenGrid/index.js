/**
*
* FullscreenGrid
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'
import Grid from '../../components/Grid'

const FullscreenGrid = ({children}) => (
  <div className={styles.fullscreenGrid}>
    <Grid />
  </div>
)

FullscreenGrid.propTypes = {
  children: PropTypes.element.isRequired,
}

export default FullscreenGrid
