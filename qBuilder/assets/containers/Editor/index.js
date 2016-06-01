/*
 *
 * Editor
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { changeValue } from './actions'

import JsonEditor from 'components/JsonEditor'

// eslint-disable-line react/prefer-stateless-function
export class Editor extends React.Component {
  render() {
    return (<JsonEditor {...this.props} />)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: value => dispatch(changeValue(value))
  }
}

function mapStateToProps(state) {
  return {
    value: state.get('editor').get('value')
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)
