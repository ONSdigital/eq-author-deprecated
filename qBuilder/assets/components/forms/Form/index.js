/**
*
* Form
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

const Form = ({children, action, method}) => (
  <form method={method} action={action} className={styles.form}>
    {children}
  </form>
)

Form.propTypes = {
  action: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  method: PropTypes.string,
}

Form.defaultProps = {
  method: 'POST'
}

export default Form
