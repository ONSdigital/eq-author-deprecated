/**
*
* TabBar
*
*/

import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import styles from './styles.css'

import Wrapper from 'components/layout/Wrapper'

const TabBar = () => (
  <nav className={styles.tabBar}>
    <Wrapper direction="row">
      <Link className={styles.link} activeClassName={styles.activeLink} to="/surveys/">My Surveys</Link>
      <Link className={`${styles.link} ${styles.disabledLink}`} activeClassName={styles.activeLink} to="/surveys/all/">All Surveys</Link>
    </Wrapper>
  </nav>
)

TabBar.propTypes = {}

export default TabBar
