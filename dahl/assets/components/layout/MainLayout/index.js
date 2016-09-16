/**
*
* MainLayout
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'
import Header from 'components/Header'

const MainLayout = ({children, routes}) => {
  routes.splice(0, 1)

  return (
    <div className={styles.mainLayout}>
      <Header routes={routes} />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  routes: PropTypes.array.isRequired,
}

export default MainLayout
