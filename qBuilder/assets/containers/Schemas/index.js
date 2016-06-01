/*
 *
 * Schemas
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { requestSchemas } from './actions'

import SchemaList from 'components/SchemaList'

export class Schemas extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SchemaList {...this.props} />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    schemas: state.get('schemas')
  }
}

// function mapDispatchToProps(dispatch) {
//   return {dispatch}
// }

export default connect(
  // mapDispatchToProps,
  mapStateToProps
)(Schemas)
