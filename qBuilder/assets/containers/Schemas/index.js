/*
 *
 * Schemas
 *
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchSchemas } from './actions'

import SchemaList from 'components/SchemaList'
import MainLayout from 'components/MainLayout'

export class Schemas extends Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchSchemas())
  }

  render() {
    return (
      <MainLayout mainChildren={<SchemaList {...this.props} />} />
    )
  }
}

function mapStateToProps(state) {
  return {
    schemas: state.get('schemas').get('items')
  }
}

Schemas.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps
)(Schemas)
