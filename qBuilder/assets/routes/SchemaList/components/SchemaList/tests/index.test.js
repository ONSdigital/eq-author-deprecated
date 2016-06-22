import SchemaList from '../index'
import { Link } from 'react-router'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<SchemaList />', () => {
  it('should render the link with correct path', () => {
    const schemas = [
      {
        eq_id: 'schema-0',
        title: 'Hello I am a schema',
        description: 'path/to/schema'
      },
    ]
    const schemaList = shallow(<SchemaList schemas={schemas} />)
    const link = schemaList.find(Link)
    expect(link.prop('to')).toEqual('/editor/schema-0')
  })
})
