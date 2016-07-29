/*
 *
 * SurveyListContainer
 *
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectSchemas } from './selectors'
import { loadSchemas } from './actions'

import SurveyList from '../../components/SurveyList'

export class SurveyListContainer extends Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(loadSchemas())
  }

  render() {
    return <SurveyList {...this.props} />
  }
}

const mapStateToProps = state => ({
  schemas: selectSchemas(state).items
})

export default connect(
  mapStateToProps
)(SurveyListContainer)
