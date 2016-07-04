/**
*
* LayoutsIndex
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

import { Link } from 'react-router'

const layouts = [
  {path: 'sidebar-grid-left', title: 'Sidebar Grid Left'},
  {path: 'sidebar-grid-right', title: 'Sidebar Grid Right'},
  {path: 'fullscreen-grid', title: 'Fullscreen Grid'},
  {path: 'content-panels/1', title: 'Content Panels 1'},
  {path: 'content-panels/2', title: 'Content Panels 2'},
  {path: 'content-panels/3', title: 'Content Panels 3'},
  {path: 'susi', title: 'Sign in/Sign out'},
]

const LayoutsIndex = ({children}) => (
  <div className={styles.layoutsIndex}>
    <div className={styles.layoutList}>
      {layouts.map(layout => (
        <Link className={styles.layout} to={`/layouts/${layout.path}`}>{layout.title}</Link>
      ))}
    </div>
  </div>
)

LayoutsIndex.propTypes = {
  children: PropTypes.element.isRequired,
}

export default LayoutsIndex
