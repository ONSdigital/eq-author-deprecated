import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DropSection from './DropSection';

class Main extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  render() {
    return (
      <div className='main'>
        <h2>Survey Name</h2>
        <DropSection />
      </div>
    );
  }
}

export default connect((state) => state)(Main);
