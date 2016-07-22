/*
 *
 * Schemas
 *
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadSchemas } from './actions'
import { selectSchemas } from './selectors'

import SchemaList from '../../components/SchemaList'
import MainLayout from 'layouts/MainLayout'
import Button from 'components/Button'

export class Schemas extends Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(loadSchemas())
  }

  render() {
    return (
      <MainLayout

        mainChildren={
          <SchemaList {...this.props} />
        }

        headerChildren={
          <Button type="primary" icon="plus" to="/editor/">Add new schema</Button>
        }

      />
    )
  }
}

const mapStateToProps = state => ({
  schemas: selectSchemas(state).items
})

Schemas.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps
)(Schemas)
