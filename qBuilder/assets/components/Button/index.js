import React, { PropTypes } from 'react'
import styles from './styles.css'

import { Link } from 'react-router'

const getIcon = (icon) => {
  if (icon) {
    return (<img className={styles.icon} src={require(`./icon-${icon}.svg`)} width="16" height="14" />)
  }
}

export const Button = ({children, type, to, icon, onClick}) => {
  if (to) {
    return (<Link className={styles[type]} to={to}>{getIcon(icon)}{children}</Link>)
  } else {
    return <button className={styles[type]} onClick={onClick}>{getIcon(icon)}{children}</button>
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  type: PropTypes.string,
}

Button.defaultProps = {
  children: 'Submit',
  disabled: false,
  type: 'primary',
}

export default Button
