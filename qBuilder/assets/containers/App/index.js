import React from 'react'
import { connect } from 'react-redux'
import styles from './styles.css'

import { selectAuthToken } from './selectors'

/* eslint-disable react/prefer-stateless-function */
export class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node
  }

  render() {
    return (
      <div className={styles.app}>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  token: selectAuthToken(state),
})

export default connect(mapStateToProps)(App)
