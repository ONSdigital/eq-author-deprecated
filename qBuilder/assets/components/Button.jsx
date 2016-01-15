import React, {PropTypes} from 'react';
import {button} from './Button.scss';

export default class Button extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };
  render() {
    return (<button className={button} onClick={this.props.onClick}>{this.props.title}</button>);
  }
}
