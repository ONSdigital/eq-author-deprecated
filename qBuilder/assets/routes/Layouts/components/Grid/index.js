/**
*
* Grid
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

export const gridStyles = styles

const getCols = (num) => {
  let cols = []
  for (var i = 0; i < num; i++) {
    cols.push(<div className={styles.column} key={i}></div>)
  }
  return cols
}

const Grid = ({children, direction = 'row'}) => (
  <div className={styles[`direction-${direction}`]}>
    {children || getCols(12)}
  </div>
)

Grid.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
}

export default Grid
