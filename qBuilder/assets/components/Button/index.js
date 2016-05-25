import React from 'react'
import styles from './styles.css'

import {Link} from 'react-router'

export const Button = ({children, type}) => (
  <Link className={styles[type]} to='/'>{children}</Link>
)

Button.propTypes = {
  children: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  type: React.PropTypes.string,
}

Button.defaultProps = {
  children: 'Submit',
  disabled: false,
  type: 'primary',
}

export default Button
