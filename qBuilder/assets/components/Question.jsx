import React, {PropTypes, Component} from 'react';
import {question} from './Question.scss';

export default class Question extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className={question} id={this.props.id} style={this.props.style}>{this.props.title}</div>
    );
  }
}
