import React, { PropTypes } from 'react'
import styles from './styles.css'

export const Button = ({children, style, onClick}) => (
  <button className={styles[`button-${style}`]} onClick={onClick} type="button">{children}</button>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.oneOf(['regular', 'clear']),
}

Button.defaultProps = {
  children: 'Submit',
  disabled: false,
  style: 'regular',
}

export default Button
