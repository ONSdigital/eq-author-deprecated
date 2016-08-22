/*
 *
 * AddQuestionnaireModal
 *
 */

import React, { PropTypes } from 'react'
import { Button as SubmitButton } from 'components/forms/Button'
import Button from 'components/Button'
import Modal from 'components/Modal'
import Panel from 'components/Panel'
import Form from 'components/forms/Form'
import Field from 'components/forms/Field'
import Input from 'components/forms/Input'
import Label from 'components/forms/Label'

export class AddQuestionnaireModal extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    addQuestionnaire: PropTypes.func.isRequired,
    addQuestionnaireCancel: PropTypes.func.isRequired,
    isOpen: PropTypes.bool,
    surveyID: PropTypes.string
  }

  handleSubmit = (e) => {
    this.props.addQuestionnaire({
      title: this.refs.questionnaireTitle.value(),
      surveyID: this.props.surveyID
    })
    e.preventDefault()
    return false
  }

  render() {
    const { isOpen, addQuestionnaireCancel, surveyID } = this.props
    return (
      <Modal title="Add a Questionnaire" isOpen={isOpen} onClose={addQuestionnaireCancel}>
        <Panel>
          <Form action="" onSubmit={this.handleSubmit}>
            <Field>
              <Label htmlFor="questionnaire_title">Questionnaire Title</Label>
              <Input ref="questionnaireTitle" type="text" name="questionnaire_title" id="questionnaire_title" required autoFocus />
            </Field>
            <Field>
              <Label htmlFor="survey_id">Survey ID</Label>
              <Input ref="surveyID" type="text" name="survey_id" defaultValue={surveyID} id="survey_id" required />
            </Field>
            <div style={{ textAlign: 'center' }}>
              <SubmitButton>Create Questionnaire</SubmitButton>
              <br />
              <Button type="button" style="clear" onClick={addQuestionnaireCancel}>Cancel</Button>
            </div>
          </Form>
        </Panel>
      </Modal>
    )
  }
}

export default AddQuestionnaireModal
