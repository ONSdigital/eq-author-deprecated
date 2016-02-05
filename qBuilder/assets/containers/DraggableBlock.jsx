import React, {PropTypes} from 'react';
import { compose } from 'redux';
import { DragSource } from 'react-dnd';
import Block from 'components/Block';

const blockSource = {
  beginDrag(props) {
    const { title, type } = props;
    return { title, type };
  },

  endDrag(props, monitor, component) {
    if (monitor.getDropResult()) {
      // console.log(component);
      // component.onDropped(monitor.getItem());
    }
  }
};

class DraggableBlock extends React.Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  render() {
    // <Question title={title} style={{ opacity: 1 }}/>
    const { type, title, isDragging, connectDragSource } = this.props;
    let block = isDragging
      ? <Block title={title} type={type} isDragging={isDragging}/>
      : <Block title={title} type={type} isDragging={isDragging}/>;
    return connectDragSource(
      <div>
        {block}
      </div>
    );
  }
}

export default compose(
  DragSource('DraggableBlock', blockSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))
)(DraggableBlock);
