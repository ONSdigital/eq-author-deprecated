/**
*
* Input
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

const Input = (props) => {
  let className = styles.input
  if (!props.valid) {
    className += ` ${styles.invalid}`
  }
  return <input className={className} {...props} />
}

Input.propTypes = {
  valid: PropTypes.bool.isRequired
}

export default Input
