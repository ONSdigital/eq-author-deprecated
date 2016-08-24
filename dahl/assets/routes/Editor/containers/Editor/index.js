/*
 *
 * Editor
 *
 */

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as EditorActions from './actions'
import { selectSchemaValue, selectEditorTitle, selectIsSaving, selectIsFetching } from './selectors'

import JsonEditor from '../../components/JsonEditor'
import Button from 'components/Button'
import TabBar from 'components/TabBar'

// eslint-disable-line react/prefer-stateless-function
export class Editor extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isSaving: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
    schema: PropTypes.string,
    title: PropTypes.string,
  }

  componentDidMount() {
    const { actions, params } = this.props
    if (params.schemaID !== undefined) {
      actions.loadSchema(params.schemaID)
    } else {
      actions.newSchema()
    }
  }

  render() {
    const { actions, schema, title, params, isSaving } = this.props

    const saveSchema = () => {
      actions.saveSchema(params.schemaID)
    }

    const buttons = [
      <Button onClick={saveSchema}>{isSaving ? 'Saving...' : 'Save schema'}</Button>
    ]

    return (
      <div>
        <TabBar title={title} buttons={buttons} />
        <JsonEditor schema={schema} onChange={actions.updateSchema} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(EditorActions, dispatch)
})

const mapStateToProps = state => ({
  schema: selectSchemaValue(state),
  title: selectEditorTitle(state),
  isSaving: selectIsSaving(state),
  isFetching: selectIsFetching(state),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)
