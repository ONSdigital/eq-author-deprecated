import React from 'react'
import styles from './styles.css'

import { Link } from 'react-router'

export const Header = ({children, title}) => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <Link to='/'><h1 className={styles.title}>{title}</h1></Link>
      <div className={styles.btns}>
        {children}
      </div>
    </div>
  </header>
)

Header.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string
}

Header.defaultProps = {
  title: 'Header title'
}

export default Header
