/*
 *
 * SurveyListContainer
 *
 */

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { VelocityTransitionGroup } from 'velocity-react'

import * as SurveyActions from './actions'
import { selectSurveys, selectAddSurveyModal, selectAddQuestionnaireModal } from './selectors'

import PopupMenu from 'components/PopupMenu'
import Button from 'components/Button'
import TabBar from 'components/TabBar'
import Canvas from 'components/Canvas'
import Wrapper from 'components/layout/Wrapper'
import SurveyTable from '../../components/SurveyTable'
import AddSurveyModal from '../../components/AddSurveyModal'
import AddQuestionnaireModal from '../../components/AddQuestionnaireModal'

export class SurveyListContainer extends Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    actions: PropTypes.object.isRequired,
    surveys: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.actions.loadSurveys()
  }

  createComponents() {
    const { toggleAddSurveyModal, toggleAddQuestionnaireModal } = this.props.actions
    return {

      addSurveyBtn: () => (
        <Button onClick={() => toggleAddSurveyModal(true)}>Add Survey</Button>
      ),

      surveyMenu: (surveyID) => (
        <PopupMenu orientation="horizontal" options={[{
          title: 'Add',
          onClick: (e) => {
            toggleAddQuestionnaireModal(true, surveyID)
          },
          icon: 'pop-add',
        }, {
          title: 'Edit',
          to: '/surveys/',
          icon: 'pop-edit',
          disabled: true
        }]} />
      ),

    }
  }

  render() {
    const { surveys, actions, addSurveyModal, addQuestionnaireModal } = this.props
    const { surveyMenu, addSurveyBtn } = this.createComponents()
    const transitionWrapperOpts = {
      enter: {
        animation: 'fadeIn',
        duration: 300,
        delay: 500,
      },
      leave: {
        animation: 'fadeOut',
      }
    }
    return (
      <div>
        <div>
          <TabBar tabs={tabs} buttons={[addSurveyBtn()]} />
          <Canvas>
            <Wrapper>
              <VelocityTransitionGroup {...transitionWrapperOpts}>
              {surveys.length > 0
              ? surveys.map(survey => (
                <SurveyTable key={survey.survey_id} survey={survey}
                  surveyMenu={surveyMenu(survey.survey_id)}
                  deleteQuestionnaire={actions.deleteQuestionnaire} />
              ))
              : <div>No surveys found.</div>}
              </VelocityTransitionGroup>
            </Wrapper>
          </Canvas>
        </div>
        <AddSurveyModal isOpen={addSurveyModal.visible} errors={addSurveyModal.errors} {...actions} />
        <AddQuestionnaireModal isOpen={addQuestionnaireModal.visible}
          surveyID={addQuestionnaireModal.surveyID} errors={addQuestionnaireModal.errors} {...actions} />
      </div>
    )
  }
}

const tabs = [{
  title: 'My Surveys',
  to: '/surveys/'
}, {
  title: 'All surveys',
  to: '/surveys/all',
  disabled: true
}]

const mapStateToProps = state => ({
  surveys: selectSurveys(state),
  addSurveyModal: selectAddSurveyModal(state),
  addQuestionnaireModal: selectAddQuestionnaireModal(state),
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(SurveyActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SurveyListContainer)
