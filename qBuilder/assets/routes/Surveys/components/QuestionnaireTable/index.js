/**
*
* QuestionnaireTable
*
*/

import React, { PropTypes } from 'react'
import Animate from 'rc-animate'
import { Link } from 'react-router'

import styles from './styles.css'
import Icon from 'components/Icon'
import PopupMenu from 'components/PopupMenu'

import moment from 'moment'

const surveyOpts = [{
  title: 'Add',
  to: '/surveys/questionnaire/new/',
  icon: 'pop-add',
}, {
  title: 'Edit',
  to: '/surveys/',
  icon: 'pop-edit',
  disabled: true
}]

const getQuestionnaireOpts = (deleteSchema, schemaId) => ([{
  title: 'Settings',
  to: '',
  icon: 'pop-settings',
  disabled: true
}, {
  title: 'Team',
  to: '',
  icon: 'pop-user',
  disabled: true
}, {
  title: 'Share',
  to: '',
  icon: 'pop-share',
  disabled: true
}, {
  title: 'Delete',
  onClick: (e) => {
    deleteSchema(schemaId)
  },
  icon: 'pop-delete',
  disabled: false
}])

const transitionName = {
  leave: styles.leave,
  leaveActive: styles.leaveActive,
}

const QuestionnaireTable = ({schemas, deleteSchema}) => (
  <table className={styles.table}>
    <thead className={styles.head}>
      <tr className={styles.row}>
        <td className={styles.cell} colSpan="2">Retail sales (MCI)</td>
        <td className={styles.cell}>Date Modified</td>
        <td className={styles.cell}><PopupMenu orientation="horizontal" options={surveyOpts} /></td>
      </tr>
    </thead>
    <Animate component="tbody" className={styles.body} transitionName={transitionName}>
      {schemas.map((schema, i) => (
        <tr className={styles.row} key={schema.eq_id}>
          <td className={styles.cell}>
            <Icon name="comments" />
          </td>
          <td className={styles.titleCell}>
            <Link className={styles.link} to={`/surveys/questionnaire/${schema.eq_id}`}>
              {schema.title || 'No title provided'}
            </Link>
          </td>
          <td className={styles.cell}>{moment(schema.modified).format('DD/MM/YYYY')}</td>
          <td className={styles.cell}><PopupMenu orientation="horizontal" options={getQuestionnaireOpts(deleteSchema, schema.eq_id)} /></td>
        </tr>
      )
    )}
    </Animate>
  </table>
)

QuestionnaireTable.propTypes = {
  deleteSchema: PropTypes.func.isRequired,
  schemas: PropTypes.array.isRequired,
}

export default QuestionnaireTable
