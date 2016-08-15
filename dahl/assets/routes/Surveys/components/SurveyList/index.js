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
import SurveyTable from '../../components/SurveyTable'

const tabs = [{
  title: 'My Surveys',
  to: '/surveys/'
}, {
  title: 'All surveys',
  to: '/surveys/all',
  disabled: true
}]

const SurveyList = ({surveys, deleteQuestionnaire, buttons}) => (
  <div className={styles.surveyList}>
    <TabBar tabs={tabs} buttons={buttons} />
    <Canvas>
      <Wrapper>
        {surveys.map((survey, index) => (
          <SurveyTable survey={survey} deleteQuestionnaire={deleteQuestionnaire} />
        ))}
      </Wrapper>
    </Canvas>
  </div>
)

SurveyList.propTypes = {
  buttons: PropTypes.array,
  deleteQuestionnaire: PropTypes.func.isRequired,
  surveys: PropTypes.array.isRequired
}

export default SurveyList
