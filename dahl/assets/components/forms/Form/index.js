/**
*
* Form
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

const Form = ({children, action, method, onSubmit}) => (
  <form method={method} action={action} onSubmit={onSubmit} className={styles.form}>
    {children}
  </form>
)

Form.propTypes = {
  action: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  method: PropTypes.string,
  onSubmit: PropTypes.func,
}

Form.defaultProps = {
  method: 'POST'
}

export default Form
