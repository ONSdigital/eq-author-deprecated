import { Schemas } from '../index'

import expect from 'expect'
import { mount } from 'enzyme'
import React from 'react'

describe('<Schemas />', () => {
  it('should call the dispatch function', () => {
    const dispatchSpy = expect.createSpy()
    const schemas = [
      {
        id: 'schema-0',
        title: 'Hello I am a schema',
        path: 'path/to/schema'
      },
    ]
    mount(<Schemas dispatch={dispatchSpy} schemas={schemas} />)
    expect(dispatchSpy).toHaveBeenCalled()
  })
})
