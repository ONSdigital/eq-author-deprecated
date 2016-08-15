/**
*
* QuestionnaireTable
*
*/

import React, { PropTypes } from 'react'
import { VelocityTransitionGroup } from 'velocity-react'
import { Link } from 'react-router'

import styles from './styles.css'
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

const getQuestionnaireOpts = (deleteSurvey, surveyId) => ([{
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
    if (window.confirm('Do you really wish to delete this questionnaire? You cannot undo this.')) {
      deleteSurvey(surveyId)
    }
  },
  icon: 'pop-delete',
  disabled: false
}])

const transitionWrapperOpts = {
  component: 'tbody',
  className: styles.body,
  enter: {
    animation: 'fadeIn',
    duration: 300,
  },
  leave: {
    animation: 'fadeOut',
  }
}

const QuestionnaireTable = ({surveys, deleteSurvey}) => (
  <div className={styles.container}>
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr className={styles.row}>
          <td className={styles.cell}>Retail sales (MCI)</td>
          <td className={styles.cell}>Date Modified</td>
          <td className={styles.cellAlignRight}>
            <PopupMenu orientation="horizontal" options={surveyOpts} />
          </td>
        </tr>
      </thead>
      <VelocityTransitionGroup {...transitionWrapperOpts}>
        {surveys.map((survey, i) => (
          <tr className={styles.row} key={survey.eq_id}>
            <td className={styles.titleCell}>
              <Link className={styles.link} to={`/surveys/questionnaire/${survey.eq_id}`}>
                {survey.title || 'No title provided'}
              </Link>
            </td>
            <td className={styles.cell}>
              {moment(survey.modified).format('DD/MM/YYYY')}
            </td>
            <td className={styles.cellAlignRight}>
              <PopupMenu orientation="horizontal" options={getQuestionnaireOpts(deleteSurvey, survey.eq_id)} />
            </td>
          </tr>
        )
      )}
      </VelocityTransitionGroup>
    </table>
  </div>
)

QuestionnaireTable.propTypes = {
  deleteSurvey: PropTypes.func.isRequired,
  surveys: PropTypes.array.isRequired,
}

export default QuestionnaireTable
