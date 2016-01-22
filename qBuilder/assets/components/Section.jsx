import React, {PropTypes} from 'react';
import {section, sectionTitle, isActive} from './Section.scss';

const Section = (props, context) =>
  <section className={`${section} ${this.props.isActive ? isActive : ''}`}>
    <div className={sectionTitle}>
      { this.props.isActive ? 'Release to drop' : 'Add questions here' }
    </div>
    { this.props.children }
  </section>;

Section.propTypes = {
  isActive: PropTypes.bool
};

export default Section;
