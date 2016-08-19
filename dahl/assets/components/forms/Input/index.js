/**
*
* Input
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

class Input extends React.Component {
  static propTypes = {
    autoFocus: PropTypes.bool,
    defaultValue: PropTypes.string,
    valid: PropTypes.bool.isRequired,
  }
  static defaultProps = {
    autoFocus: false,
    valid: true,
  }
  constructor(props) {
    super(props)
    this.state = {
      valid: this.props.valid,
      value: this.props.defaultValue,
    }
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      window.setTimeout(() => this.refs.input.focus(), 500)
    }
  }
  value() {
    return this.state.value
  }
  // filters invalid props passes to the <input>
  filterProps(props) {
    let keys = ['valid']
    let result = {...props}
    keys.forEach(k => { delete result[k] })
    return result
  }
  handleChange = (e) => {
    this.setState({
      valid: this.refs.input.validity.valid,
      value: e.target.value,
    })
  }
  render() {
    let className = styles.input
    if (!this.state.valid) {
      className += ` ${styles.invalid}`
    }
    return (<input ref="input" className={className} onChange={this.handleChange}
      {...this.filterProps(this.props)} autoComplete="off" />)
  }
}

export default Input
