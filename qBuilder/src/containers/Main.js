import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DropSection from './DropSection';
import Button from 'components/Button';

import { saveData, fetchData } from 'redux/modules/blocks';

class Main extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  render() {
    const { dispatch } = this.props;
    return (
      <div className='main'>
        <h2>Survey Name</h2>
        <DropSection />
        <Button title='Save' onClick={() => dispatch(saveData())}/>
        &nbsp;
        <Button title='Load' onClick={() => dispatch(fetchData())}/>
      </div>
    );
  }
}

export default connect((state) => state)(Main);
