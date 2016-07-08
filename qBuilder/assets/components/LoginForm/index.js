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
        {errors.map(error => (<li className={errorItem}>{error}</li>))}
      </ul>
    )
  } else {
    return null
  }
}

const LoginForm = ({username, next, csrfToken, errors}) => (
  <div className={loginForm}>
    <form method='post' action='' className={form}>
      <div className={field}>
        <label htmlFor='id_username'>Username</label>
        <input type='text' name='username' id='id_username' value={username} />
      </div>
      <Errors errors={errors.username} />
      <div className={field}>
        <label htmlFor='id_password'>Password</label>
        <input type='text' name='password' id='id_password' />
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
