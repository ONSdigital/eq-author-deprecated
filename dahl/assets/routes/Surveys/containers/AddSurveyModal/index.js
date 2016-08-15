/*
 *
 * AddSurveyModal
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Button as SubmitButton } from 'components/forms/Button'
import Button from 'components/Button'
import Modal from 'containers/Modal'
import Panel from 'components/Panel'
import Form from 'components/forms/Form'
import Field from 'components/forms/Field'
import Input from 'components/forms/Input'
import Label from 'components/forms/Label'

import * as ModalActions from 'containers/Modal/actions'
import * as CreateSurveyActions from './actions'

export class AddSurveyModal extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    actions: PropTypes.object
  }

  handleSubmit = (e) => {
    this.props.actions.createSurvey({
      title: this.refs.surveyTitle.value(),
      id: this.refs.surveyId.value(),
    })
    e.preventDefault()
    return false
  }

  render() {
    const { actions } = this.props
    return (
      <Modal title="Add a Survey">
        <Panel>
          <Form action="" onSubmit={this.handleSubmit}>
            <Field>
              <Label htmlFor="survey_title">Survey Title</Label>
              <Input defaultValue="lol" ref="surveyTitle" type="text" name="survey_title" id="survey_title" required autoFocus />
            </Field>
            <Field>
              <Label htmlFor="survey_id">Survey ID</Label>
              <Input ref="surveyId" name="text" id="survey_id" required />
            </Field>
            <div style={{ textAlign: 'center' }}>
              <SubmitButton>Create Survey</SubmitButton>
              <br />
              <Button type="button" style="clear" onClick={actions.closeModal}>Cancel</Button>
            </div>
          </Form>
        </Panel>
      </Modal>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({...ModalActions, ...CreateSurveyActions}, dispatch)
})

export default connect(null, mapDispatchToProps)(AddSurveyModal)
