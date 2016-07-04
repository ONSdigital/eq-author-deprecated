/**
*
* Panel
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

const Panel = ({children, width}) => (
  <div className={styles[width]}>
  </div>
)

Panel.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.string.isRequired,
}

export default Panel
