import React, {PropTypes, Component} from 'react';
import {question} from './Question.scss';

const Question = (props, context) => {
  <div className={question} id={this.props.id} style={this.props.style}>{this.props.title}</div>;
};

Question.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default Question;
