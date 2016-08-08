/**
*
* TabBar
*
*/

import React, { PropTypes } from 'react'
import styles from './styles.css'

import { Link } from 'react-router'
import Wrapper from 'components/layout/Wrapper'

const TabBar = ({buttons, tabs, title}) => (
  <nav className={styles.tabBar}>
    <Wrapper direction="row">
      <div className={styles.tabs}>
        {(() => {
          if (tabs.length > 0) {
            return tabs.map((tab, index) => (
              <Link key={index} className={styles.link} activeClassName={styles.activeLink} to={tab.to} aria-disabled={tab.disabled}>{tab.title}</Link>
            ))
          } else {
            return <h2 className={styles.title}>{title}</h2>
          }
        })()}
      </div>
      <div className={styles.buttons}>
        {buttons.map((button, index) => (
          <div key={index}>{button}</div>
        ))}
      </div>
    </Wrapper>
  </nav>
)

TabBar.propTypes = {
  buttons: PropTypes.array,
  tabs: PropTypes.array,
  title: PropTypes.string
}

TabBar.defaultProps = {
  buttons: [],
  tabs: []
}

export default TabBar
