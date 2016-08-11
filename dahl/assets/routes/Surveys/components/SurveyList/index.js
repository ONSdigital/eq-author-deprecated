/**
*
* SurveyList
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

import TabBar from 'components/TabBar'
import Canvas from 'components/Canvas'
import Wrapper from 'components/layout/Wrapper'
import QuestionnaireList from '../../components/QuestionnaireList'

const tabs = [{
  title: 'My Surveys',
  to: '/surveys/'
}, {
  title: 'All surveys',
  to: '/surveys/all',
  disabled: true
}]

const SurveyList = ({schemas, deleteSchema, buttons}) => (
  <div className={styles.surveyList}>
    <TabBar tabs={tabs} buttons={buttons} />
    <Canvas>
      <Wrapper>
        <QuestionnaireList schemas={schemas} deleteSchema={deleteSchema} />
      </Wrapper>
    </Canvas>
  </div>
)

SurveyList.propTypes = {
  buttons: PropTypes.array,
  deleteSchema: PropTypes.func.isRequired,
  schemas: PropTypes.array.isRequired
}

export default SurveyList
