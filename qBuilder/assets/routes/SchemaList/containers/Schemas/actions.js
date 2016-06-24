/*
 *
 * Schemas actions
 *
 */

import { FETCH_SCHEMAS_REQUEST, FETCH_SCHEMAS_SUCCESS, FETCH_SCHEMAS_FAILURE } from './constants'
import { CALL_API } from 'redux-api-middleware'

const fetchSchemas = () => ({
  [CALL_API]: {
    endpoint: '/api/v1/schema/',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [ FETCH_SCHEMAS_REQUEST, FETCH_SCHEMAS_SUCCESS, FETCH_SCHEMAS_FAILURE ],
  }
})

export const loadSchemas = () => dispatch => dispatch(fetchSchemas())
