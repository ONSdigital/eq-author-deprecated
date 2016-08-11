import React, { PropTypes } from 'react'
import styles from './styles.css'

export const Button = ({children, type, onClick}) => (
  <button className={styles[`button-${type}`]} onClick={onClick}>{children}</button>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['regular', 'clear']),
}

Button.defaultProps = {
  children: 'Submit',
  disabled: false,
  type: 'regular',
}

export default Button
