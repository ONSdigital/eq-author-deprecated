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
      {schemas.map((schema, i) => (
        <li className={styles.item} key={schema.eq_id}>
          <Link className={styles.link} to={`/editor/${schema.eq_id}`}>
            <span className={styles.num}>{i}.</span>
            <h3>{schema.title || 'No title provided'}</h3>
            <small><pre>{schema.description || 'No description provided'}</pre></small>
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
