/**
*
* TabBar
*
*/

import React, { PropTypes } from 'react'
import styles from './styles.css'

import { Link } from 'react-router'
import Wrapper from 'components/layout/Wrapper'

const TabBar = ({buttons, tabs}) => (
  <nav className={styles.tabBar}>
    <Wrapper direction="row">
      <div className={styles.tabs}>
        {tabs.map((tab, index) => {
          let classes = styles.link
          if (tab.disabled) {
            classes += ` ${styles.disabledLink}`
          }
          return <Link key={index} className={classes} activeClassName={styles.activeLink} to={tab.to}>{tab.title}</Link>
        })}
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
  tabs: PropTypes.array
}

TabBar.defaultProps = {
  buttons: [],
  tabs: []
}

export default TabBar
