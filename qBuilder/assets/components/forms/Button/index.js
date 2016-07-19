/**
*
* Button
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

const Button = ({children, type}) => (
  <button className={styles.button} type={type}>{children}</button>
)

Button.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'submit'
}

export default Button
