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
    <h2 className={styles.title}>Select a schema</h2>
    <ul className={styles.list}>
      {schemas.map(schema => (
        <li className={styles.item} key={schema.id}>
          <Link className={styles.link} to={`/editor/${schema.id}`}>
            <h3><strong>{schema.title}</strong></h3>
            <small>{schema.path.replace('schemas/', '')}</small>
          </Link>
        </li>)
      )}
    </ul>
  </div>
)

SchemaList.propTypes = {
  schemas: React.PropTypes.array.isRequired,
}

export default SchemaList
