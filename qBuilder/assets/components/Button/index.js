import React, { PropTypes } from 'react'
import styles from './styles.css'

import { Link } from 'react-router'

const getIcon = (icon) => {
  if (icon) {
    return (<img className={styles.icon} src={require(`./icon-${icon}.svg`)} width='16' height='14' />)
  }
}

export const Button = ({children, type, to, icon}) => (
  <Link className={styles[type]} to={to}>{getIcon(icon)}{children}</Link>
)

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
}

Button.defaultProps = {
  children: 'Submit',
  disabled: false,
  to: '/',
  type: 'primary',
}

export default Button
