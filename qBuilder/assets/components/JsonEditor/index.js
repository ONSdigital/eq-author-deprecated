import React from 'react'
import styles from './styles.css'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/lib/codemirror.css'
import Codemirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
// import 'codemirror/theme/material.css'

const options = {
  lineNumbers: true,
  mode: 'javascript',
}

export const JsonEditor = (props) => (
  <div className={styles.default}>
    <label>Schema</label>
    <Codemirror {...props} options={options} />
  </div>
)

JsonEditor.propTypes = {
  onChange: React.PropTypes.function,
  value: React.PropTypes.string,
}

export default JsonEditor
