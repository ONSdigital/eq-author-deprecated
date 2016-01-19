import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Header from 'containers/Header';
import Main from 'containers/Main';
import Sidebar from 'containers/Sidebar';

export class HomeView extends React.Component {
  render() {
    return (
      <div className='view'>
        <div className='view__header'>
          <Header />
        </div>
        <div className='view__main'>
          <Main />
        </div>
        <div className='view__sidebar'>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default compose(
  DragDropContext(HTML5Backend),
  connect((state) => state)
)(HomeView);
