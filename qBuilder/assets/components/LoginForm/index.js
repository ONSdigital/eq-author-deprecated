/**
*
* LoginForm
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

import Logo from 'components/Logo'
import Panel from 'components/Panel'

const Errors = ({ errors }) => {
  if (errors.length > 0) {
    return (
      <ul className={styles.errorList}>
        {errors.map((error, index) => (
          <li key={index} className={styles.errorItem}>{error}</li>)
        )}
      </ul>
    )
  } else {
    return null
  }
}

const LoginForm = ({username, next, csrfToken, errors, action}) => (
  <div className={styles.loginForm}>
    <div className={styles.logo}>
      <Logo />
    </div>
    <Panel>
      <form method='post' action={action} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor='id_username'>Username</label>
          <input type='text' name='username' id='id_username' defaultValue={username} placeholder='yourname@ons.gov.uk' />
        </div>
        <Errors errors={errors.username} />
        <div className={styles.field}>
          <label htmlFor='id_password'>Password</label>
          <input type='password' name='password' id='id_password' />
        </div>
        <Errors errors={errors.password} />
        <div className={styles.field}>
          <input type='hidden' name='csrfmiddlewaretoken' value={csrfToken} />
          <input type='submit' value='Sign in' className={styles.button} />
          <input type='hidden' name='next' value={next} />
        </div>
      </form>
    </Panel>
  </div>
)

Errors.propTypes = {
  errors: PropTypes.array.isRequired,
}

LoginForm.propTypes = {
  action: PropTypes.string.isRequired,
  csrfToken: PropTypes.string,
  errors: PropTypes.object.isRequired,
  next: PropTypes.string.isRequired,
  username: PropTypes.string,
}

export default LoginForm
