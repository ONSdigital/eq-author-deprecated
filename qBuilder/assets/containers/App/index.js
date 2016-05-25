import React from 'react'
import MainLayout from 'components/MainLayout'

import 'styles/core.css'

/* eslint-disable react/prefer-stateless-function */
export default class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node
  }

  render() {
    return (
      <div>
        <MainLayout>
          {this.props.children}
        </MainLayout>
      </div>
    )
  }
}
