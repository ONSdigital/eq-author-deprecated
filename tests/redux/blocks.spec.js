import * as blocks from 'redux/modules/blocks';

describe('(Redux) blocks', () => {
  it('initialState should return an empty array', () => {
    const initialState = blocks.initialState();
    expect(initialState).to.be.an('array');
    expect(initialState).to.have.length(0);
  });

  it('should create an action to add a block', () => {
    const block = {
      title: 'Rich Text Field',
      type: 'rich-text-field'
    };
    const action = blocks.addBlock(block);
    console.log(action);
    expect(action).to.have.property('block');
    // expect(action).to.have.property('title').to.equal(block.title);
    // expect(action).to.have.property('type').to.equal(block.type);
  });
});
