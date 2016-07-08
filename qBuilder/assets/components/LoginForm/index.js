/**
*
* LoginForm
*
*/

import React, { PropTypes } from 'react'

import { loginForm, form, field, button, errorList, errorItem } from './styles.css'

const Errors = ({ errors }) => {
  if (errors.length > 0) {
    return (
      <ul className={errorList}>
        {errors.map((error, index) => (
          <li key={index} className={errorItem}>{error}</li>)
        )}
      </ul>
    )
  } else {
    return null
  }
}

const LoginForm = ({username, next, csrfToken, errors, action}) => (
  <div className={loginForm}>
    <form method='post' action={action} className={form}>
      <div className={field}>
        <label htmlFor='id_username'>Username</label>
        <input type='text' name='username' id='id_username' defaultValue={username} />
      </div>
      <Errors errors={errors.username} />
      <div className={field}>
        <label htmlFor='id_password'>Password</label>
        <input type='password' name='password' id='id_password' />
      </div>
      <Errors errors={errors.password} />
      <div className={field}>
        <input type='hidden' name='csrfmiddlewaretoken' value={csrfToken} />
        <input type='submit' value='Log in' className={button} />
        <input type='hidden' name='next' value={next} />
      </div>
      <Errors errors={errors.nonField} />
    </form>
  </div>
)

Errors.propTypes = {
  errors: PropTypes.array.isRequired,
}

LoginForm.propTypes = {
  csrfToken: PropTypes.string,
  errors: PropTypes.object.isRequired,
  next: PropTypes.string.isRequired,
  username: PropTypes.string,
}

export default LoginForm
