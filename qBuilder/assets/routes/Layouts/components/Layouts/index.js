import React, { PropTypes } from 'react'
import styles from './styles.css'

const Layouts = ({children}) => (
  <div className={styles.layouts}>
    <div className={styles.wrapper}>{children}</div>
  </div>
)

Layouts.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layouts
