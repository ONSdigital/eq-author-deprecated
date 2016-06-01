/**
*
* SchemaList
*
*/

import React from 'react'

import styles from './styles.css'

import { Link } from 'react-router'

const SchemaList = ({schemas}) => (
  <div className={styles.schemaList}>
    <ul className={styles.list}>
      {schemas.items.map(schema => (
        <li className={styles.item} key={schema.id}>
          <Link className={styles.link} to='/editor'>{schema.id}</Link>
        </li>)
      )}
    </ul>
  </div>
)

SchemaList.propTypes = {
  schemas: React.PropTypes.object.isRequired,
}

export default SchemaList
