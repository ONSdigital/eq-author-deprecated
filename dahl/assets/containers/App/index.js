import React from 'react'
import styles from './styles.css'

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

export default App
