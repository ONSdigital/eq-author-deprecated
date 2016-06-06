import React, { Component, PropTypes } from 'react'
import styles from './styles.css'
import Codemirror from 'react-codemirror'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/material.css'

import Button from 'components/Button'

const options = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'material'
}

export class JsonEditor extends Component {

  componentDidMount() {
    this.refs.editor.codeMirror.setSize('100%', '90vh')
  }

  render() {
    return (
      <div className={styles.jsonEditor}>
        <Codemirror ref='editor' className={styles.editor} {...this.props} options={options} />
        <div className='btn'>
          <Button type='secondary'>Save</Button>
        </div>
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
