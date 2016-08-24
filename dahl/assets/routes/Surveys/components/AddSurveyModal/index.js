/*
 *
 * AddSurveyModal
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
import ErrorList from 'components/forms/ErrorList'

export class AddSurveyModal extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    addSurvey: PropTypes.func.isRequired,
    addSurveyCancel: PropTypes.func.isRequired,
    errors: PropTypes.array,
    isOpen: PropTypes.bool,
  }

  handleSubmit = (e) => {
    this.props.addSurvey({
      title: this.refs.surveyTitle.value(),
      survey_id: this.refs.surveyID.value(),
      questionnaires: []
    })
    e.preventDefault()
    return false
  }

  render() {
    const { isOpen, addSurveyCancel, errors } = this.props
    return (
      <Modal title="Add a Survey" isOpen={isOpen} onClose={addSurveyCancel}>
        <Panel>
          <Form action="" onSubmit={this.handleSubmit}>
            <Field>
              <Label htmlFor="survey_title">Survey Title</Label>
              <Input ref="surveyTitle" type="text" name="survey_title" id="survey_title" required autoFocus />
              <ErrorList errors={errors['survey_title']} />
            </Field>
            <Field>
              <Label htmlFor="survey_id">Survey ID</Label>
              <Input ref="surveyID" name="text" id="survey_id" required />
              <ErrorList errors={errors['survey_id']} />
            </Field>
            <div style={{ textAlign: 'center' }}>
              <SubmitButton>Create Survey</SubmitButton>
              <br />
              <Button type="button" style="clear" onClick={addSurveyCancel}>Cancel</Button>
            </div>
          </Form>
        </Panel>
      </Modal>
    )
  }
}

export default AddSurveyModal
