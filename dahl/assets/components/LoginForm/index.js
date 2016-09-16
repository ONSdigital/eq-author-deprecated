/**
*
* LoginForm
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

import Logo from 'components/Logo'
import Panel from 'components/Panel'

import { Form, Field, Input, Label, SubmitButton, PasswordInput, ErrorList } from 'components/forms'

const LoginForm = ({username, csrfToken, errors, action}) => (
  <div className={styles.loginForm}>
    <div className={styles.logo}>
      <Logo />
    </div>
    <Panel>
      <Form action={action}>
        <Field>
          <Label htmlFor="id_username">Email</Label>
          <Input type="email" name="username" id="id_username" defaultValue={username} placeholder="yourname@ons.gov.uk" required="true" />
        </Field>
        <Field>
          <Label htmlFor="id_password">Password</Label>
          <PasswordInput name="password" id="id_password" required="true" />
        </Field>
        <div>
          <Input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
          <SubmitButton>Sign in</SubmitButton>
        </div>
        <ErrorList errors={errors} />
      </Form>
    </Panel>
  </div>
)

LoginForm.propTypes = {
  action: PropTypes.string.isRequired,
  csrfToken: PropTypes.string,
  errors: PropTypes.array.isRequired,
  username: PropTypes.string,
}

export default LoginForm
