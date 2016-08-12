/*
 *
 * Login
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { selectUsername, selectNext, selectToken, selectErrors, selectAction } from './selectors'
import LoginForm from 'components/LoginForm'

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LoginForm {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  action: selectAction(state),
  username: selectUsername(state),
  next: selectNext(state),
  csrfToken: selectToken(state),
  errors: selectErrors(state),
})

export default connect(mapStateToProps)(Login)
