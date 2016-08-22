/**
*
* SurveyTable
*
*/

import React, { PropTypes } from 'react'
import { VelocityTransitionGroup } from 'velocity-react'
import { Link } from 'react-router'

import PopupMenu from 'components/PopupMenu'
import styles from './styles.css'
import moment from 'moment'

const getQuestionnaireMenu = (deleteQuestionnaire, questionnaireID) => (
  <PopupMenu orientation="horizontal" options={[{
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
        deleteQuestionnaire(questionnaireID)
      }
    },
    icon: 'pop-delete',
    disabled: false
  }]
} />)

const SurveyTable = ({survey, surveyMenu, deleteQuestionnaire}) => (
  <div className={styles.container}>
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr className={styles.row}>
          <td className={styles.cell}>{survey.title}</td>
          <td className={styles.cell}>Date Modified</td>
          <td className={styles.cellAlignRight}>{surveyMenu}</td>
        </tr>
      </thead>
      <VelocityTransitionGroup {...transitionWrapperOpts}>
        {(survey.questionnaires.length > 0)
          ? survey.questionnaires.map((questionnaire, i) => (
            <tr className={styles.row} key={i}>
              <td className={styles.titleCell}>
                <Link className={styles.link} to={`/surveys/questionnaire/${questionnaire}`}>
                  {questionnaire.title || 'No title given'}
                </Link>
              </td>
              <td className={styles.cell}>
                {moment(questionnaire.modified).format('DD/MM/YYYY')}
              </td>
              <td className={styles.cellAlignRight}>{getQuestionnaireMenu(deleteQuestionnaire, questionnaire)}</td>
            </tr>
          )
        ) : <tr className={styles.row}>
          <td className={styles.cell} colSpan={3}>No questionnaires found. </td>
        </tr>}
      </VelocityTransitionGroup>
    </table>
  </div>
)

SurveyTable.propTypes = {
  survey: PropTypes.object.isRequired,
}

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

export default SurveyTable
