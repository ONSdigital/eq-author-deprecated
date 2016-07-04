/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react'

import MainLayout from 'layouts/MainLayout'

/* eslint-disable react/prefer-stateless-function */
export default class NotFound extends React.Component {

  render() {
    return (
      <MainLayout mainChildren={<h1>Page Not Found</h1>} />
    )
  }
}
