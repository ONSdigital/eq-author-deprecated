/**
*
* MainLayout
*
*/

import React, { PropTypes } from 'react'
import { RouteTransition } from 'react-router-transition'

import styles from './styles.css'
import Header from 'components/Header'

const MainLayout = ({children, routes}) => {
  routes.shift()
  const transitionProps = {
    pathname: location.pathname,
    atEnter: { opacity: 0 },
    atLeave: { opacity: 2 },
    atActive: { opacity: 1 },
    mapStyles: (styles) => {
      if (styles.opacity > 1) {
        return { display: 'none' }
      }
      return { opacity: styles.opacity }
    }
  }

  return (
    <div className={styles.mainLayout}>
      <Header routes={routes} />
      <main className={styles.main}>
        <RouteTransition {...transitionProps}>
          {children}
        </RouteTransition>
      </main>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  routes: PropTypes.array.isRequired,
}

export default MainLayout
