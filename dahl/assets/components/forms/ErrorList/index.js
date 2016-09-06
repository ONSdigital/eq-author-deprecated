/**
*
* ErrorList
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

const ErrorList = ({errors}) => {
  if (errors !== undefined && errors.length > 0) {
    return (
      <ul className={styles.errorList}>
        {errors.map((error, index) => (
          <li key={index} className={styles.errorItem}>{error}</li>)
        )}
      </ul>
    )
  } else {
    return null
  }
}

ErrorList.propTypes = {
  errors: PropTypes.array,
}

export default ErrorList
