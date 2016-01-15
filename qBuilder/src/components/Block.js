import React, {PropTypes} from 'react';
import {block} from './Block.scss';

export default class Block extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className={block} {...this.props}>{this.props.title}</div>
    );
  }
}
