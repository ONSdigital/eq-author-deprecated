/**
*
* Button
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

export const SubmitButton = ({children, type}) => (
  <button className={styles.button} type={type}>{children}</button>
)

SubmitButton.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
}

SubmitButton.defaultProps = {
  type: 'submit'
}

export default SubmitButton
