/**
*
* MainLayout
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

import Header from 'components/Header'

function MainLayout({mainChildren, headerChildren}) {
  return (
    <div className={styles.mainLayout}>
      <Header title='eQ Schema Editor'>
        {headerChildren}
      </Header>
      <main className={styles.wrapper}>
        {mainChildren}
      </main>
    </div>
  )
}

MainLayout.propTypes = {
  headerChildren: PropTypes.node,
  mainChildren: PropTypes.node.isRequired,
}

export default MainLayout
