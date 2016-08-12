/**
*
* Panel
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

const Panel = ({children}) => (
  <div className={styles.panel}>
    {children}
  </div>
)

Panel.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Panel
