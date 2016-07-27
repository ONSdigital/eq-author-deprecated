import React, { PropTypes } from 'react'
import styles from './styles.css'

import Wrapper from 'components/layout/Wrapper'

const Layouts = ({children}) => (
  <div className={styles.layouts}>
    <Wrapper>{children}</Wrapper>
  </div>
)

Layouts.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layouts
