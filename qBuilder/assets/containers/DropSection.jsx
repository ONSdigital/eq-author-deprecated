import React, {PropTypes} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import { addBlock } from 'redux/modules/blocks';
import Section from 'components/Section';
import DraggableQuestion from 'containers/DraggableQuestion';

const sectionTarget = {
  drop(props, monitor, component) {
    component.onDropped(monitor.getItem());
    return { name: 'DropSection' };
  }
};

class DropSection extends React.Component {
  static propTypes = {
    blocks: PropTypes.array,
    canDrop: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired
  };

  onDropped(item) {
    const { dispatch } = this.props;
    dispatch(addBlock(item));
  }

  render() {
    const { canDrop, isOver, connectDropTarget, blocks } = this.props;
    return connectDropTarget(
      <div>
        <Section isActive={canDrop && isOver}>
          {blocks.map((block, index) =>
            <DraggableQuestion key={block.id} id={block.id} index={index} title={block.title}/>
          )}
        </Section>
      </div>
    );
  }
}

export default compose(
  connect((state) => state),
  DropTarget('DraggableBlock', sectionTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }))
)(DropSection);
