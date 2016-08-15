/**
*
* SurveyTable
*
*/

import React, { PropTypes } from 'react'
import { VelocityTransitionGroup } from 'velocity-react'
import { Link } from 'react-router'

import styles from './styles.css'
import moment from 'moment'

const SurveyTable = ({survey, surveyMenu, questionnaireMenu}) => (
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
            <td className={styles.cellAlignRight}>{questionnaireMenu}</td>
          </tr>
        )
      )}
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
