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

const LoginForm = ({username, next, csrfToken, errors, action}) => (
  <div className={styles.loginForm}>
    <div className={styles.logo}>
      <Logo />
    </div>
    <Panel>
      <Form action={action}>
        <Field>
          <Label htmlFor='id_username'>Email</Label>
          <Input valid={errors.username.length < 1} type='email' name='username' id='id_username' defaultValue={username} placeholder='yourname@ons.gov.uk' required='true' />
          <ErrorList errors={errors.username} />
        </Field>
        <Field>
          <Label htmlFor='id_password'>Password</Label>
          <PasswordInput valid={errors.password.length < 1} name='password' id='id_password' required='true' />
          <ErrorList errors={errors.password} />
        </Field>
        <div>
          <Input type='hidden' name='csrfmiddlewaretoken' value={csrfToken} />
          <Button>Sign in</Button>
          <Input type='hidden' name='next' value={next} />
        </div>
      </Form>
    </Panel>
  </div>
)

LoginForm.propTypes = {
  action: PropTypes.string.isRequired,
  csrfToken: PropTypes.string,
  errors: PropTypes.object.isRequired,
  next: PropTypes.string.isRequired,
  username: PropTypes.string,
}

export default LoginForm
