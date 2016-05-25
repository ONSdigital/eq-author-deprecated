import React from 'react'
import styles from './styles.css'

export const Button = ({children, type}) => {
  return (
    <button className={styles[type]}>{children}</button>
  )
}

Button.propTypes = {
  children: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  type: React.PropTypes.string
}

Button.defaultProps = {
  children: 'Submit',
  disabled: false,
  type: 'primary'
}

export default Button
