import React, {PropTypes} from 'react';
import { TransitionMotion, spring } from 'react-motion';

import DraggableQuestion from 'containers/DraggableQuestion';

class TransitionLayer extends React.Component {

  static propTypes = {
    blocks: PropTypes.array.isRequired,
    moveQuestion: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.getStyles = this.getStyles.bind(this);
    this.willEnter = this.willEnter.bind(this);
    this.willLeave = this.willLeave.bind(this);
  }

  getStyles() {
    let configs = {};
    Object.keys(this.props.blocks).forEach(key => {
      configs[key] = {
        opacity: spring(1),
        block: this.props.blocks[key] // not interpolated
      };
    });
    return configs;
  }

  // not used here! We don't add any new item
  willEnter(key) {
    return {
      opacity: spring(0), // start at 0, gradually expand
      text: this.props.blocks[key] // this is really just carried around so
      // that interpolated values can still access the text when the key is gone
      // from actual `styles`
    };
  }

  willLeave(key, style) {
    return {
      opacity: spring(0), // make opacity reach 0, after which we can kill the key
      text: style.text
    };
  }

  render() {
    return (
      <TransitionMotion
        styles={this.getStyles()}
        willEnter={this.willEnter}
        willLeave={this.willLeave}>
        {interpolatedStyles =>
          <div>
            {Object.keys(interpolatedStyles).map(key => {
              console.log(interpolatedStyles);
              const {text, ...style} = interpolatedStyles[key];
              const block = this.props.blocks[key];
              return (
                <DraggableQuestion style={style} key={block.id} id={block.id} index={key} title={block.title} moveQuestion={this.props.moveQuestion}/>
              );
            })}
          </div>
        }
      </TransitionMotion>
    );
  }
}

export default TransitionLayer;
