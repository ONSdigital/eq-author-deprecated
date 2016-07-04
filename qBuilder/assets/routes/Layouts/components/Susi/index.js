/**
*
* Susi
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'
const Susi = ({children}) => (
  <div className={styles.susi}>
    <div className={styles.panel}></div>
  </div>
)

Susi.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Susi
