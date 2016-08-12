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
          {(() => {
            const linkTitle = item.breadcrumbName || item.name
            if ((index + 1) < routes.length) {
              return (<Link className={styles.link} to={item.path || ''}>{linkTitle}</Link>)
            } else {
              return (<span>&nbsp;{linkTitle}</span>)
            }
          })()}
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
