/**
*
* Label
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

const Label = ({children, htmlFor}) => (
  <label className={styles.label} htmlFor={htmlFor}>{children}</label>
)

Label.propTypes = {
  children: PropTypes.element.isRequired,
  htmlFor: PropTypes.string.isRequired
}

export default Label
