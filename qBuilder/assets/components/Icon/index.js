/**
*
* Icon
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

const Icon = ({name, alt}) => (
  <div className={styles.icon}>
    <img className={styles.img} src={require(`./img/${name}.svg`)} alt={alt || name} />
  </div>
)

Icon.propTypes = {
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
}

export default Icon
