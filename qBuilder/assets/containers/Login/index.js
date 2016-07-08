/*
 *
 * Login
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { selectUsername } from './selectors'
import LoginForm from 'components/LoginForm'

export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LoginForm username='hello' />
    )
  }
}

const mapStateToProps = state => ({
  username: selectUsername(state),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
