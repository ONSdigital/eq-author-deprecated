/**
*
* AddSurveyModal
*
*/

import React, { PropTypes } from 'react'
import { Button as SubmitButton } from 'components/forms/Button'
import Button from 'components/Button'
import Modal from 'containers/Modal'
import Panel from 'components/Panel'
import Form from 'components/forms/Form'
import Field from 'components/forms/Field'
import Input from 'components/forms/Input'
import Label from 'components/forms/Label'

const AddSurveyModal = () => (
  <Modal title="Add a Survey">
    <Panel>
      <Form action="">
        <Field>
          <Label htmlFor="survey_title">Survey Title</Label>
          <Input type="text" name="survey_title" id="survey_title" required="true" />
        </Field>
        <Field>
          <Label htmlFor="survey_id">Survey ID</Label>
          <Input name="text" id="survey_id" required="true" />
        </Field>
        <div style={{ 'text-align': 'center' }}>
          <SubmitButton>Create Survey</SubmitButton>
          <br />
          <Button type="clear">Cancel</Button>
        </div>
      </Form>
    </Panel>
  </Modal>
)

AddSurveyModal.propTypes = {}

export default AddSurveyModal
