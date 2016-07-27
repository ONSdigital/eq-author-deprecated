import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import styles from './styles.css'
import Logo from 'components/Logo'
import Breadcrumb from 'components/Breadcrumb'
import Wrapper from 'components/layout/Wrapper'

export const Header = ({routes}) => (
  <div>
    <header className={styles.header}>
      <Wrapper>
        <Link className={styles.logo} to="/"><Logo /></Link>
      </Wrapper>
    </header>
    <Breadcrumb routes={routes} />
  </div>
)

Header.propTypes = {
  routes: PropTypes.array.isRequired
}

export default Header
