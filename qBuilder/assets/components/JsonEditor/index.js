import React, { Component, PropTypes } from 'react'
import styles from './styles.css'
import Codemirror from 'react-codemirror'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/material.css'

import { js_beautify as beautify } from 'js-beautify' // eslint-disable-line camelcase

const options = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'material'
}

export class JsonEditor extends Component {

  componentDidMount() {
    this.refs.editor.codeMirror.setSize('100%', '100vh')
  }

  render() {
    const {onChange, value} = this.props
    const formattedValue = beautify(value, { indent_size: 2 })
    return (
      <div className={styles.jsonEditor}>
        <Codemirror ref='editor' className={styles.editor} onChange={onChange} value={formattedValue} options={options} />
      </div>
    )
  }
}

JsonEditor.propTypes = {
  onChange: PropTypes.func,
  title: PropTypes.string,
  value: PropTypes.string,
}

export default JsonEditor
