/**
*
* MainLayout
*
*/

import React from 'react'

import styles from './styles.css'

import Header from 'components/Header'

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

export default MainLayout
