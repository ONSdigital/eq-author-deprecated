/**
*
* Logo
*
*/

import React from 'react'

import styles from './styles.css'
import logo from './logo.svg'

const Logo = () => (
  <div className={styles.logo}>
    <img src={logo} /> <span className={styles.text}>Dahl</span>
  </div>
)

export default Logo
