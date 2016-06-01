/*
 *
 * Editor
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { selectValue } from './selectors'
import { changeValue } from './actions'
import { createSelector } from 'reselect'

import JsonEditor from 'components/JsonEditor'

// eslint-disable-line react/prefer-stateless-function
export class Editor extends React.Component {
  render() {
    return (<JsonEditor {...this.props} />)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (value) => dispatch(changeValue(value))
  }
}

export default connect(createSelector(
  selectValue(),
  value => ({value})
), mapDispatchToProps)(Editor)
