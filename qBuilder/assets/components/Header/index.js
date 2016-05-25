import React from 'react'
import styles from './styles.css'

import Button from 'components/Button'

export const Header = ({children, title}) => (
  <header className={styles.default}>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.buttons}>
        <Button type='primary'>Load</Button>
        <Button type='secondary'>New</Button>
      </div>
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
