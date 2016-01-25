import React from 'react';
import DraggableBlock from './DraggableBlock';

const blockTypes = [
  'Text Question',
  'Numeric Question',
  'Check Box Question',
  'Multiple Choice Single Answer',
  'Dropdown Question',
  'Rich Text Field',
  'Date Question'
];

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidebar'>
        {blockTypes.map(function(type) {
          const key = type.split(' ').join('-').toLowerCase();
          return (<DraggableBlock title={type} key={key} type={key} />);
        })}
      </div>
    );
  }
}
