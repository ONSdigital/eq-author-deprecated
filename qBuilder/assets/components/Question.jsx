import React, {PropTypes, Component} from 'react';
import {question} from './Question.scss';

export default class Question extends Component {
  render() {
    return (<div className={question} id={this.props.id} style={this.props.style}>{this.props.title}</div>);
  }
}

Question.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string.isRequired
};

export default Question;
