/**
*
* Table
*
*/

import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import styles from './styles.css'
import Icon from 'components/Icon'

const Table = ({schemas}) => (
  <table className={styles.table}>
    <thead className={styles.head}>
      <tr className={styles.row}>
        <td className={styles.cell} colSpan="2">Retail sales (MCI)</td>
        <td className={styles.cellCenter}>Shared</td>
        <td className={styles.cell}>Date Modified&nbsp;</td>
        <td className={styles.cell}>Status</td>
        <td className={styles.cell}><Icon name="actions" /></td>
      </tr>
    </thead>
    <tbody className={styles.body}>
      {schemas.map((schema, i) => (
        <tr className={styles.row} key={schema.eq_id}>
          <td className={styles.cell}>
            <Icon name="comments" />
          </td>
          <td className={styles.cell}>
            <Link className={styles.link} to={`/editor/${schema.eq_id}`}>
              {schema.title || 'No title provided'}
            </Link>
          </td>
          <td className={styles.cell}><Icon name="team" /></td>
          <td className={styles.cell}>22/11/15</td>
          <td className={styles.cell}>Pending Approval</td>
          <td className={styles.cell}><Icon name="actions" /></td>
        </tr>)
      )}
    </tbody>
  </table>
)

Table.propTypes = {
  schemas: PropTypes.array.isRequired,
}

export default Table
