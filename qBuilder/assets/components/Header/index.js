import React from 'react'
import styles from './styles.css'

export const Header = ({children, title}) => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  </header>
)

Header.propTypes = {
  children: React.PropTypes.element,
  title: React.PropTypes.string
}

Header.defaultProps = {
  title: 'Header title'
}

export default Header
