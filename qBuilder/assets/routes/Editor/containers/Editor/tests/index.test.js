import { Editor } from '../index'
import Button from 'components/Button'
import JsonEditor from '../../../components/JsonEditor'
import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<Editor />', () => {
  let props

  beforeEach(() => {
    props = {
      value: 'hello',
      isSaving: false,
      isFetching: false,
      route: {},
      params: {},
      actions: {
        changeValue: () => { }
      }
    }
  })

  it('should render a JsonEditor and some Buttons', () => {
    const renderedComponent = shallow(<Editor {...props} />)
    expect(renderedComponent.contains(<JsonEditor />))
    expect(renderedComponent.contains(<Button />))
  })
})
