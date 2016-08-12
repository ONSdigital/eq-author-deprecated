/*
 *
 * SurveyListContainer
 *
 */

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './actions'
import { selectSchemas } from './selectors'

import SurveyList from '../../components/SurveyList'

export class SurveyListContainer extends Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    actions: PropTypes.object.isRequired,
    schemas: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.actions.loadSchemas()
  }

  render() {
    const { schemas, actions } = this.props
    return <SurveyList schemas={schemas} deleteSchema={actions.deleteSchema} />
  }
}

const mapStateToProps = state => ({
  schemas: selectSchemas(state).items
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SurveyListContainer)
