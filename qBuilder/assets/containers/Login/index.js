/*
 *
 * Login
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { selectUsername, selectNext, selectToken, selectErrors } from './selectors'
import LoginForm from 'components/LoginForm'

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LoginForm {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  username: selectUsername(state),
  next: selectNext(state),
  token: selectToken(state),
  errors: selectErrors(state),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
