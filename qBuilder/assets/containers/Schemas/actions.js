/*
 *
 * Schemas actions
 *
 */

import { REQUEST_SCHEMAS, RECEIVE_SCHEMAS } from './constants'

export function requestSchemas() {
  return {
    type: REQUEST_SCHEMAS,
  }
}

export function receiveSchemas(schemas) {
  return {
    type: RECEIVE_SCHEMAS,
    schemas
  }
}

export function fetchSchemas() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function(dispatch) {
    dispatch(requestSchemas())
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch('http://localhost:5000/schemas/').then(response => {
      return response
    })
  }
}
