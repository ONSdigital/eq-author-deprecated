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

  onButtonClick = () => {
    if (!this.state.disabled) {
      this.setState({ open: !this.state.open })
    }
  }

  onOptionClick = (cb) => {
    this.setState({ open: !this.state.open })
    cb.call()
  }

  handleClickOutside() {
    this.setState({ open: false })
  }

  getOption = (option, linkInner) => {
    if (option.to !== undefined) {
      return (
        <Link className={styles.link} to={option.to} aria-disabled={option.disabled}>
          {linkInner}
        </Link>
      )
    } else {
      return (
        <span className={styles.link} onClick={() => { this.onOptionClick(option.onClick) }}>
          {linkInner}
        </span>
      )
    }
  }

  render() {
    const { options, orientation, disabled } = this.props
    let menuStyles = styles[this.state.open ? 'open' : 'closed']
    menuStyles += ` ${styles[orientation]}`

    return (
      <div className={styles.popupMenu} aria-disabled={disabled}>
        <button onClick={this.onButtonClick} className={styles.button}>
          <Icon name="actions" />
        </button>
        <div className={menuStyles}>
          <ul className={styles.options}>
            {options.map((option, index) => (
              <li className={styles.option} key={index}>

                {this.getOption(option,
                  [<Icon name={option.icon} width="18px" height="18px" />,
                    <span className={styles.linkText}>{option.title}</span>]
                )}

              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default enhanceWithClickOutside(PopupMenu)
