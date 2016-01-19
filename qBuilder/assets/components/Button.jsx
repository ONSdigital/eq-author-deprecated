import React, {PropTypes} from 'react';
import {button} from './Button.scss';

const Button = (props, context) => {
  <button className={button} onClick={this.props.onClick}>{this.props.title}</button>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired
};

export default Button;
