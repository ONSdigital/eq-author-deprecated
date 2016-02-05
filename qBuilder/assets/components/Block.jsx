import React, {PropTypes} from 'react';
import {block} from './Block.scss';

export default class Block extends React.Component {
  render() {
    return (<div className={block}>{this.props.title}</div>);
  }
}

Block.propTypes = {
  title: PropTypes.string.isRequired
};
