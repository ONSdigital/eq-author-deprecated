/*
 *
 * SurveyListContainer
 *
 */

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as SurveyActions from './actions'
import * as ModalActions from 'containers/Modal/actions'
import { selectSchemas } from './selectors'

import SurveyList from '../../components/SurveyList'
import Button from 'components/Button'
import AddSurveyModal from '../../components/AddSurveyModal'

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
    const button = <Button onClick={actions.openModal}>Add Survey</Button>
    return (
      <div>
        <SurveyList schemas={schemas} deleteSchema={actions.deleteSchema} buttons={[button]} />
        <AddSurveyModal closeModal={actions.closeModal} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  schemas: selectSchemas(state).items
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({...SurveyActions, ...ModalActions}, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SurveyListContainer)
