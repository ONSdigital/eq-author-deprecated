/*
 *
 * Editor
 *
 */

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as EditorActions from './actions'

import JsonEditor from 'components/JsonEditor'
import MainLayout from 'components/MainLayout'
import Button from 'components/Button'

// eslint-disable-line react/prefer-stateless-function
export class Editor extends Component {

  componentDidMount() {
    const { actions, params } = this.props
    actions.fetchSchema(params.schemaID)
  }

  render() {
    const { actions, value } = this.props

    const getJsonEditor = () => (
      <JsonEditor value={value} onChange={actions.changeValue} />
    )

    const getButtons = () => (
      <div>
        <Button type='secondary'>Save</Button>
        <Button type='primary' icon='menu' to='/'>List schemas</Button>
      </div>
    )

    return (
      <MainLayout mainChildren={getJsonEditor()} headerChildren={getButtons()} />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(EditorActions, dispatch)
  }
}

function mapStateToProps(state) {
  return {
    value: state.get('editor').get('value')
  }
}

Editor.propTypes = {
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)
