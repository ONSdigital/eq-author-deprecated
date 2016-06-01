import React from 'react'
import Schemas from 'containers/Schemas'

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h2>Select a schema</h2>
        <Schemas />
      </div>
    )
  }
}
