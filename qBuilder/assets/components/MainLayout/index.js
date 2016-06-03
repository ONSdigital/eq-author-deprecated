/**
*
* MainLayout
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

import Header from 'components/Header'
import Footer from 'components/Footer'

function MainLayout({children}) {
  return (
    <div className={styles.mainLayout}>
      <Header title='eQ Schema Editor' />
      <div className={styles.wrapper}>
        {children}
      </div>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainLayout
