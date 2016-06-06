import React from 'react'

import './styles.css'

/* eslint-disable react/prefer-stateless-function */
export default class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
