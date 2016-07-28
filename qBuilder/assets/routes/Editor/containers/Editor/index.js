/*
 *
 * Editor
 *
 */

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as EditorActions from './actions'
import { selectEditorValue, selectIsSaving, selectIsFetching } from './selectors'

import JsonEditor from '../../components/JsonEditor'
import Button from 'components/Button'
import TabBar from 'components/TabBar'

// eslint-disable-line react/prefer-stateless-function
export class Editor extends Component {

  componentDidMount() {
    const { actions, params } = this.props
    if (params.schemaID !== undefined) {
      actions.loadSchema(params.schemaID)
    } else {
      actions.changeValue('')
    }
  }

  render() {
    const { actions, value, params, isSaving } = this.props

    const saveSchema = () => {
      actions.saveSchema(params.schemaID)
    }

    const buttons = [
      <Button type="secondary" onClick={saveSchema}>{isSaving ? 'Saving...' : 'Save schema'}</Button>
    ]

    const tabs = [{'title': 'Schema title', 'to': ''}]

    return (
      <div>
        <TabBar tabs={tabs} buttons={buttons} />
        <JsonEditor value={value} onChange={actions.changeValue} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(EditorActions, dispatch)
})

const mapStateToProps = state => ({
  value: selectEditorValue(state),
  isSaving: selectIsSaving(state),
  isFetching: selectIsFetching(state),
})

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
