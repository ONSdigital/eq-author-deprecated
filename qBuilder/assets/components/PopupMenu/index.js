/**
*
* PopupMenu
*
*/

import React, { PropTypes } from 'react'
import enhanceWithClickOutside from 'react-click-outside'

import styles from './styles.css'

import Icon from 'components/Icon'
import { Link } from 'react-router'

class PopupMenu extends React.Component {

  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    options: PropTypes.array.isRequired,
    orientation: PropTypes.oneOf(['horizontal', 'vertical'])
  }

  static defaultProps = {
    disabled: false,
    orientation: 'vertical'
  }

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  onClick = () => {
    this.setState({ open: !this.state.open })
  }

  handleClickOutside() {
    this.setState({ open: false })
  }

  render() {
    const { options, orientation, disabled } = this.props
    let menuStyles = styles[this.state.open ? 'open' : 'closed']
    menuStyles += ` ${styles[orientation]}`

    return (
      <div className={styles.popupMenu} aria-disabled={disabled}>
        <button onClick={this.onClick} className={styles.button}>
          <Icon name="actions" />
        </button>
        <div className={menuStyles}>
          <ul className={styles.options}>
            {options.map((option, index) => (
              <li className={styles.option}>
                <Link className={styles.link} to={option.to} aria-disabled={option.disabled}>
                  <Icon name={option.icon} width="18px" height="18px" />
                  <span className={styles.linkText}>{option.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default enhanceWithClickOutside(PopupMenu)
