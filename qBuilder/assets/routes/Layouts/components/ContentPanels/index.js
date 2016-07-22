/**
*
* FullscreenGrid
*
*/

import React, { PropTypes } from 'react'

import styles from './styles.css'

import Header from '../../components/Header'
import Subheader from '../../components/Subheader'
import Grid from '../../components/Grid'
import Panel from '../../components/Panel'

const ContentPanels = ({children, routeParams: { variant }}) => {
  let panels
  if (variant === '1') {
    panels = (
      <Grid direction="row">
        <Panel width="half" />
        <Panel width="half" />
        <Panel width="half" />
        <Panel width="half" />
      </Grid>
    )
  } else if (variant === '2') {
    panels = (
      <Grid direction="row">
        <Panel width="third" />
        <Panel width="third" />
        <Panel width="third" />
        <Panel width="whole" />
      </Grid>
    )
  } else {
    panels = (
      <Grid direction="column" >
        <Panel width="half" />
        <Panel width="half" />
        <Panel width="half" />
      </Grid>
    )
  }
  return (
    <div className={styles.contentPanels}>
      <Header />
      <Subheader />
      {panels}
    </div>
  )
}

ContentPanels.propTypes = {
  children: PropTypes.element.isRequired,
  routeParams: PropTypes.object.isRequired,
}

export default ContentPanels
