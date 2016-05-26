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

const onChange = (value) => {
  console.log(value)
}

export const JsonEditor = (props) => (
  <div className={styles.default}>
    <label>Schema</label>
    <Codemirror value={'{}'} options={options} onChange={onChange} />
  </div>
)

JsonEditor.propTypes = {
  value: React.PropTypes.string
}

export default JsonEditor
