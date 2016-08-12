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
    deleteSchema: PropTypes.func.isRequired,
    schemas: PropTypes.array.isRequired,
  }

  render() {
    const { schemas, deleteSchema } = this.props
    return (
      <div className={styles.questionnaireList}>
        <QuestionnaireTable schemas={schemas} deleteSchema={deleteSchema} />
      </div>
    )
  }
}

export default QuestionnaireList
