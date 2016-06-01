/*
 *
 * Schemas
 *
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchSchemas } from './actions'

import SchemaList from 'components/SchemaList'

export class Schemas extends Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchSchemas())
  }

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

Schemas.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps
)(Schemas)
