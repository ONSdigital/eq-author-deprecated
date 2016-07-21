/*
 *
 * Auth
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { selectToken } from './selectors'
import App from 'containers/App'

export class Auth extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <App {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  token: selectToken(state),
})

export default connect(mapStateToProps)(Auth)
