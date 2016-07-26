/**
*
* LoginForm
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

import Logo from 'components/Logo'
import Panel from 'components/Panel'
import Form from 'components/forms/Form'
import Field from 'components/forms/Field'
import Label from 'components/forms/Label'
import Input from 'components/forms/Input'
import Button from 'components/forms/Button'
import PasswordInput from 'components/forms/PasswordInput'
import ErrorList from 'components/forms/ErrorList'

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
          <Button>Sign in</Button>
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
