/**
*
* Input
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

class Input extends React.Component {
  static propTypes = {
    valid: PropTypes.bool.isRequired
  }
  static defaultProps = {
    valid: true
  }
  constructor(props) {
    super(props)
    this.state = {
      valid: this.props.valid
    }
  }
  componentDidMount() {
    this.refs.input.addEventListener('change', this.checkValidity)
  }
  checkValidity = () => {
    this.setState({ valid: this.refs.input.validity.valid })
  }
  render() {
    let className = styles.input
    if (!this.state.valid) {
      className += ` ${styles.invalid}`
    }
    return <input ref="input" className={className} {...this.props} />
  }
}

export default Input
