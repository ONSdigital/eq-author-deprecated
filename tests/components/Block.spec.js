import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import Block from 'components/Block';

describe('(Component) Block', () => {
  let block, blockNode;
  const title = 'This is a block';

  beforeEach(() => {
    block = TestUtils.renderIntoDocument(
      <Block title={title} />
    );
    blockNode = ReactDOM.findDOMNode(block);
  });

  it(`Should contain the text "This is a block"`, () => {
    expect(blockNode.textContent).to.equal(title);
  });
});
