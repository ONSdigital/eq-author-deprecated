/*
 *
 * Editor actions
 *
 */

import { CHANGE_VALUE,
  FETCH_SCHEMA_REQUEST,
  FETCH_SCHEMA_SUCCESS,
  FETCH_SCHEMA_FAILURE,
  SAVE_SCHEMA_REQUEST,
  SAVE_SCHEMA_SUCCESS,
  SAVE_SCHEMA_FAILURE
} from './constants'

import { CALL_API } from 'redux-api-middleware'

import { browserHistory } from 'react-router'

import { js_beautify as beautify } from 'js-beautify' // eslint-disable-line camelcase

export const changeValue = value => ({
  type: CHANGE_VALUE,
  payload: { value }
})

export const fetchSchema = schemaID => ({
  [CALL_API]: {
    endpoint: `/api/v1/schema/${schemaID}/`,
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [
      {
        type: FETCH_SCHEMA_REQUEST,
        payload: '// loading schema'
      }, {
        type: FETCH_SCHEMA_SUCCESS,
        payload: (action, state, response) => (
          response.text().then(json => beautify(json, { indent_size: 2 }))
        )
      },
      FETCH_SCHEMA_FAILURE
    ],
  }
})

export const saveSchema = schemaID => {
  return async(dispatch, getState) => {
    const isNewSchema = (schemaID === undefined)
    let endpoint = `/api/v1/schema/${schemaID}/`
    let method = 'PUT'

    if (isNewSchema) {
      endpoint = '/api/v1/schema/'
      method = 'POST'
    }

    const actionResponse = await dispatch({
      [CALL_API]: {
        endpoint: endpoint,
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: getState().get('editor').get('value'),
        types: [
          SAVE_SCHEMA_REQUEST,
          {
            type: SAVE_SCHEMA_SUCCESS,
            payload: (action, state, response) => {
              if (isNewSchema) {
                response.text().then(schemaID => browserHistory.push(`/editor/${schemaID}`))
              }
            }
          }, {
            type: SAVE_SCHEMA_FAILURE,
            payload: (action, state, response) => {
              response.text().then(error => window.alert(`Error: ${error}`))
            }
          }
        ],
      }
    })

    if (actionResponse.error) {
      throw new Error('Promise flow received action error', actionResponse)
    }

    return actionResponse
  }
}
