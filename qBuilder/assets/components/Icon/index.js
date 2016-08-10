/**
*
* Icon
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

const Icon = ({name, alt, width, height}) => {
  const imgProps = {
    src: require(`./img/${name}.svg`),
    alt: alt || name,
    style: {
      height: height,
      width: width
    }
  }
  return (
    <div className={styles.icon}>
      <img className={styles.img} {...imgProps} />
    </div>
  )
}

Icon.defaultProps = {
  height: 'auto',
  width: 'auto',
}

Icon.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
}

export default Icon
