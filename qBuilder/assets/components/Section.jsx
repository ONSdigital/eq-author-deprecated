import React, {PropTypes} from 'react';
import {section, sectionTitle, isActive} from './Section.scss';

export default class Section extends React.Component {
  render() {
    return (<section className={`${section} ${this.props.isActive ? isActive : ''}`}>
      <div className={sectionTitle}>
        { this.props.isActive ? 'Release to drop' : 'Add questions here' }
      </div>
      { this.props.children }
    </section>);
  }
}

Section.propTypes = {
  isActive: PropTypes.bool
};
