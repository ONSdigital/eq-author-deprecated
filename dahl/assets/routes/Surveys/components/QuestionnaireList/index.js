/**
*
* QuestionnaireList
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

import QuestionnaireTable from '../../components/QuestionnaireTable'

class QuestionnaireList extends React.Component {
  static propTypes = {
    deleteSurvey: PropTypes.func.isRequired,
    surveys: PropTypes.array.isRequired,
  }

  render() {
    const { surveys, deleteSurvey } = this.props
    return (
      <div className={styles.questionnaireList}>
        <QuestionnaireTable surveys={surveys} deleteSurvey={deleteSurvey} />
      </div>
    )
  }
}

export default QuestionnaireList
