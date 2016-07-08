/**
*
* LoginForm
*
*/

import React, { PropTypes } from 'react'

import { loginForm, form, button } from './styles.css'

const LoginForm = ({username}) => (
  <div className={loginForm}>
    <form method='post' action='' className={form}>
      {/* {{ auth_form.non_field_errors }} */}
      <div>
        {/* {{ auth_form.username.errors }} */}
        <label htmlFor='id_username'>Username</label>
        <input type='text' name='username' id='id_username' value={username} />
      </div>
      <div>
        {/* {{ auth_form.password.errors }} */}
        <label htmlFor='id_password'>Password</label>
        <input type='text' name='password' id='id_password' />
      </div>
      <div>
        <input type='hidden' name='csrfmiddlewaretoken' value='{{ csrf_token }}' />
        <input type='submit' value='Log in' className={button} />
        <input type='hidden' name='next' value='{{ next }}' />
      </div>
    </form>
  </div>
)

LoginForm.propTypes = {
  children: PropTypes.element.isRequired,
  username: PropTypes.string,
}

export default LoginForm
