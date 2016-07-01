/**
*
* Grid
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

function Grid({children}) {
  return (
    <div className={styles.grid}>
      <div className={styles.column}></div>
      <div className={styles.column}></div>
      <div className={styles.column}></div>
      <div className={styles.column}></div>
      <div className={styles.column}></div>
      <div className={styles.column}></div>
      <div className={styles.column}></div>
      <div className={styles.column}></div>
      <div className={styles.column}></div>
      <div className={styles.column}></div>
      <div className={styles.column}></div>
      <div className={styles.column}></div>
    </div>
  )
}

Grid.propTypes = {
  children: PropTypes.element,
}

export default Grid
