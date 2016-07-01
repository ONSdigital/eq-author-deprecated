/**
*
* FullscreenGrid
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

import Header from '../../components/Header'
import Subheader from '../../components/Subheader'
import Grid from '../../components/Grid'

const FullscreenGrid = ({children}) => (
  <div className={styles.fullscreenGrid}>
    <Header />
    <Subheader />
    <Grid />
  </div>
)

FullscreenGrid.propTypes = {
  children: PropTypes.element.isRequired,
}

export default FullscreenGrid
