/**
*
* QuestionnaireList
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

import Table from 'components/Table'

class QuestionnaireList extends React.Component {
  static propTypes = {
    schemas: PropTypes.array.isRequired
  }

  render() {
    const { schemas } = this.props
    return (
      <div className={styles.questionnaireList}>
        <Table schemas={schemas} />
      </div>
    )
  }
}

export default QuestionnaireList
