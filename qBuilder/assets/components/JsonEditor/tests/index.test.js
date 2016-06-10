import JsonEditor from '../index'
import Codemirror from 'react-codemirror'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<JsonEditor />', () => {
  it('should render a <Codemirror /> component', () => {
    const props = {
      title: 'title',
      value: 'I am some code',
      onChange: () => { }
    }
    const jsonEditor = shallow(<JsonEditor {...props} />)
    setTimeout(() => {
      expect(jsonEditor.contains(<Codemirror ref='editor' />)).toEqual(true)
    }, 10)
  })
})
