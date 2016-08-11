/**
*
* Canvas
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

const Canvas = ({children}) => (
  <div className={styles.canvas}>
    {children}
  </div>
)

Canvas.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Canvas
