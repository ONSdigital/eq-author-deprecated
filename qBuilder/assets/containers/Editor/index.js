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
    if (typeof params.schemaID !== 'undefined') {
      actions.fetchSchema(params.schemaID)
    } else {
      actions.changeValue('')
    }
  }

  render() {
    const { actions, value, params, isSaving } = this.props

    const saveSchema = () => {
      actions.saveSchema(params.schemaID)
    }

    return (
      <MainLayout

        mainChildren={
          <JsonEditor value={value} onChange={actions.changeValue} />
        }

        headerChildren={[
          <Button key='btn-1' type='secondary' onClick={saveSchema}>{isSaving ? 'Saving...' : 'Save'}</Button>,
          <Button key='btn-2' type='primary' icon='menu' to='/'>List schemas</Button>
        ]}

      />
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
    value: state.get('editor').get('value'),
    isSaving: state.get('editor').get('isSaving'),
    isFetching: state.get('editor').get('isFetching')
  }
}

Editor.propTypes = {
  actions: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isSaving: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)
