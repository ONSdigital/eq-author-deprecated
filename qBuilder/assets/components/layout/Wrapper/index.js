/**
*
* Wrapper
*
*/

import React, { PropTypes } from 'react'
import styles from './styles.css'

const Wrapper = ({children, direction}) => (
  <div className={`${styles.wrapper} ${styles[direction]}`}>
    {children}
  </div>
)

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string.isRequired
}

Wrapper.defaultProps = {
  direction: 'column'
}

export default Wrapper
