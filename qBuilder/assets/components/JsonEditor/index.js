import React, { Component, PropTypes } from 'react'
import styles from './styles.css'
import Codemirror from 'react-codemirror'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/material.css'

const options = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'material'
}

export class JsonEditor extends Component {

  componentDidMount() {
    this.refs.editor.codeMirror.setSize('100%', '90vh')
    // this.refs.editor.codeMirror.options.viewportMargin = Infinity
    // this.refs.editor.codeMirror.viewportMargin(Infinity)
  }

  render() {
    return (
      <div className={styles.jsonEditor}>
        <Codemirror ref='editor' className={styles.editor} {...this.props} options={options} />
      </div>
    )
  }
}

JsonEditor.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  title: PropTypes.string,
}

export default JsonEditor
