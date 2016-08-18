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

  handleClick = (cb) => {
    this.setState({ open: !this.state.open })
    cb.call()
  }

  handleClickOutside() {
    this.setState({ open: false })
  }

  render() {
    const { options, orientation, disabled } = this.props
    let menuStyles = `${styles.menu} ${styles[orientation]}`

    return (
      <div className={styles.popupMenu} aria-disabled={disabled}>
        <button onClick={this.onButtonClick} className={styles.button}>
          <Icon name="actions" />
        </button>
        <div className={menuStyles} aria-hidden={!this.state.open}>
          <ul className={styles.options}>
            {options.map((option, index) => (
              <li className={styles.option} key={index}>
                <PopupMenuItem option={option} handleClick={this.handleClick}>
                  <Icon name={option.icon} /><span className={styles.linkText}>{option.title}</span>
                </PopupMenuItem>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const PopupMenuItem = ({option, children, handleClick}) => {
  if (option.to !== undefined) {
    return (
      <Link className={styles.link} to={option.to} aria-disabled={option.disabled}>
        {children}
      </Link>
    )
  } else {
    return (
      <button className={styles.linkButton} onClick={() => handleClick(option.onClick)}>
        {children}
      </button>
    )
  }
}

PopupMenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  option: PropTypes.object.isRequired,
}

export default enhanceWithClickOutside(PopupMenu)
