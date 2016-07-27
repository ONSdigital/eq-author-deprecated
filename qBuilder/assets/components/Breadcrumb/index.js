/**
*
* Breadcrumb
*
*/

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Wrapper from 'components/layout/Wrapper'

import styles from './styles.css'

const Breadcrumb = ({routes}) => (
  <nav className={styles.breadcrumb}>
    <Wrapper direction="row">
      {routes.map((item, index) =>
        <div key={index}>
          <Link className={styles.link} activeClassName={styles.activeLink} onlyActiveOnIndex to={item.path || ''}>{item.breadcrumbName || item.name}</Link>
          {(index + 1) < routes.length && '>'}
        </div>
      )}
    </Wrapper>
  </nav>
)

Breadcrumb.propTypes = {
  routes: PropTypes.array.isRequired
}

export default Breadcrumb
