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
        <li className={styles.item} key={schema.id}>
          <Link className={styles.link} to={`/editor/${schema.id}`}>
            <span className={styles.num}>{i}.</span>
            <h3>{schema.title}</h3>
            <small><pre>{schema.path.replace('schemas/', '')}</pre></small>
          </Link>
        </li>)
      )}
    </ul>
    <br />
  </div>
)

SchemaList.propTypes = {
  schemas: React.PropTypes.array.isRequired,
}

export default SchemaList
