import React, { PropTypes } from 'react'
import styles from './styles.css'

import { Link } from 'react-router'

export const Button = ({children, to, onClick}) => {
  if (to) {
    return (<Link className={styles.button} to={to}>{children}</Link>)
  } else {
    return <button className={styles.button} onClick={onClick}>{children}</button>
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.string,
}

Button.defaultProps = {
  children: 'Submit',
  disabled: false,
}

export default Button
