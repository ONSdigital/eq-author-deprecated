/*
 *
 * Surveys
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { selectSurveys } from './selectors'
import TabBar from 'components/TabBar'
import Canvas from 'components/Canvas'
import Wrapper from 'components/layout/Wrapper'

export class Surveys extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <TabBar />
        <Canvas>
          <Wrapper>
            This is Surveys container !
          </Wrapper>
        </Canvas>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  surveys: selectSurveys(state)
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Surveys)
