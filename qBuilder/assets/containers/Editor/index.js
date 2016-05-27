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

export class Editor extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <JsonEditor value={this.props.value} onChange={this.props.onChange} />
      </div>
    )
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
