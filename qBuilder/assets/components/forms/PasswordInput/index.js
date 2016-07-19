/**
*
* PasswordInput
*
*/

import React, { PropTypes, Component } from 'react'

import styles from './styles.css'

import Input from 'components/forms/Input'

class PasswordInput extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = { showPassword: false }
  }

  toggleShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  render() {
    const { showPassword } = this.state
    return (
      <div className={styles.passwordInput}>
        <Input type={showPassword ? 'text' : 'password'} {...this.props} />
        <span className={styles.showPassword} onClick={this.toggleShowPassword}>{!showPassword ? 'SHOW' : 'HIDE'}</span>
      </div>
    )
  }
}

export default PasswordInput
