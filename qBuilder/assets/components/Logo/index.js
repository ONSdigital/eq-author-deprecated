/**
*
* Logo
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'
import logo from './logo.svg'

const Logo = ({children}) => (
  <div className={styles.logo}>
    <img src={logo} /> <span className={styles.text}>Dahl</span>
  </div>
)

Logo.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Logo
