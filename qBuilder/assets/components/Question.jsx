import React, {PropTypes} from 'react';
import {question} from './Question.scss';

const Question = (props) =>
  <div className={question} style={props.style}>{props.title}</div>;

Question.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string.isRequired
};

export default Question;
