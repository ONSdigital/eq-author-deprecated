import Icon from '../index'

import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'

describe('<Icon />', () => {
  it('should render an icon from an svg file', () => {
    const props = {
      name: 'actions',
      alt: 'alt text',
      width: '18px',
      height: '18px'
    }
    // const svg = require(`../../img/${props.name}.svg`)

    const icon = shallow(<Icon {...props} />)
    const img = icon.find('img')
    expect(img.length).toEqual(true)
  })
})
