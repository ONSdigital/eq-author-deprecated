/**
*
* SurveyTable
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
  onClick: (e) => {
    console.log(e)
  },
  icon: 'pop-add',
}, {
  title: 'Edit',
  to: '/surveys/',
  icon: 'pop-edit',
  disabled: true
}]

const getQuestionnaireOpts = (deleteQuestionnaire, surveyId) => ([{
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
      deleteQuestionnaire(surveyId)
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

const SurveyTable = ({survey, deleteQuestionnaire}) => (
  <div className={styles.container}>
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr className={styles.row}>
          <td className={styles.cell}>{survey.title}</td>
          <td className={styles.cell}>Date Modified</td>
          <td className={styles.cellAlignRight}>
            <PopupMenu orientation="horizontal" options={surveyOpts} />
          </td>
        </tr>
      </thead>
      <VelocityTransitionGroup {...transitionWrapperOpts}>
        {survey.questionnaires.map((questionnaire, i) => (
          <tr className={styles.row} key={i}>
            <td className={styles.titleCell}>
              <Link className={styles.link} to={`/surveys/questionnaire/${questionnaire.eq_id}`}>
                {questionnaire.title}
              </Link>
            </td>
            <td className={styles.cell}>
              {moment(questionnaire.modified).format('DD/MM/YYYY')}
            </td>
            <td className={styles.cellAlignRight}>
              <PopupMenu orientation="horizontal" options={getQuestionnaireOpts(deleteQuestionnaire, questionnaire.eq_id)} />
            </td>
          </tr>
        )
      )}
      </VelocityTransitionGroup>
    </table>
  </div>
)

SurveyTable.propTypes = {
  deleteQuestionnaire: PropTypes.func.isRequired,
  survey: PropTypes.object.isRequired,
}

export default SurveyTable
