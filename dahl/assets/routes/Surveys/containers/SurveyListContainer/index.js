/*
 *
 * SurveyListContainer
 *
 */

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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
    const { deleteQuestionnaire, toggleAddSurveyModal, toggleAddQuestionnaireModal } = this.props.actions
    return {

      addSurveyBtn: () => (
        <Button onClick={() => toggleAddSurveyModal(true)}>Add Survey</Button>
      ),

      surveyMenu: (surveyID) => (
        <PopupMenu orientation="horizontal" options={[{
          title: 'Add',
          onClick: (e) => {
            toggleAddQuestionnaireModal(true)
          },
          icon: 'pop-add',
        }, {
          title: 'Edit',
          to: '/surveys/',
          icon: 'pop-edit',
          disabled: true
        }]} />
      ),

      questionnaireMenu: (surveyID) => (
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
              deleteQuestionnaire(surveyID)
            }
          },
          icon: 'pop-delete',
          disabled: false
        }]
      } />)

    }
  }

  render() {
    const { surveys, actions, addSurveyModal, addQuestionnaireModal } = this.props
    const { surveyMenu, questionnaireMenu, addSurveyBtn } = this.createComponents()
    return (
      <div>
        <div>
          <TabBar tabs={tabs} buttons={[addSurveyBtn()]} />
          <Canvas>
            <Wrapper>
              {surveys.length > 0

              ? surveys.map((survey, index) => (
                <SurveyTable survey={survey} surveyMenu={surveyMenu(survey.survey_id)}
                  questionnaireMenu={questionnaireMenu(survey.survey_id)} />
              ))

              : <div>No surveys found.</div>}
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
