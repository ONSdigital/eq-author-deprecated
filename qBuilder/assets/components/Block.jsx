import React, {PropTypes} from 'react';
import {block} from './Block.scss';

const Block = (props, context) => {
  <div className={block} {...this.props}>{this.props.title}</div>;
};

Block.propTypes = {
  title: PropTypes.string.isRequired
};

export default Block;
