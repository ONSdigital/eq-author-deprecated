/**
*
* SchemaList
*
*/

import React from 'react'

import styles from './styles.css'

import {Link} from 'react-router'

function SchemaList() {
  return (
    <div className={styles.schemaList}>
      <ul className={styles.list}>
        {[1, 2, 3, 4, 5].map(item => (
          <li className={styles.item}>
            <Link className={styles.link} to='/editor'>Schema #{item}</Link>
          </li>)
        )}
      </ul>
    </div>
  )
}

export default SchemaList
