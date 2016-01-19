import React, {PropTypes} from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { DragSource, DropTarget } from 'react-dnd';
import { swapBlocks } from 'redux/modules/blocks';
import Question from 'components/Question';
import { DRAGGABLE_QUESTION } from 'constants/ItemTypes';
console.log(DRAGGABLE_QUESTION);

const style = {};

class DraggableQuestion extends React.Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    const { title, connectDropTarget, connectDragSource, isDragging } = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(
      connectDropTarget(
        <div className='draggableQuestion' style={style}>
          <Question title={title} style={{ opacity }}/>
        </div>
      )
    );
  }
}

const dragSourceOpts = {
  beginDrag(props) {
    const { id, index } = props;
    return { id, index };
  }
};

const dropTargetOpts = {
  hover(props, monitor, component) {
    const { dispatch } = props;
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }
    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    // Determine mouse position
    const clientOffset = monitor.getClientOffset();
    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%
    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }
    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }
    dispatch(swapBlocks(dragIndex, hoverIndex));
    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

export default compose(
  connect((state) => state),
  DropTarget(DRAGGABLE_QUESTION, dropTargetOpts, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
  DragSource(DRAGGABLE_QUESTION, dragSourceOpts, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))
)(DraggableQuestion);
