import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import styles from './styles.css'
import Logo from 'components/Logo'
import Breadcrumb from 'components/Breadcrumb'

export const Header = ({routes}) => (
  <div>
    <header className={styles.header}>
      <Link className={styles.logo} to="/"><Logo /></Link>
      <a href="/sign-out/">Sign out</a>
    </header>
    <Breadcrumb routes={routes} />
  </div>
)

Header.propTypes = {
  routes: PropTypes.array.isRequired
}

export default Header
