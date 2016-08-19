import 'whatwg-fetch'

import { store } from 'store'
import { selectToken } from 'containers/App/selectors'

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json()
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {objct} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  // decorate all request with auth token
  const requestOptions = options || {}
  requestOptions.headers = requestOptions.headers || {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  requestOptions.headers.Authorization = selectToken(store.getState())
  requestOptions.credentials = 'include'  // Send cookies Cross-Origin
  if (requestOptions.body !== undefined) {
    requestOptions.body = JSON.stringify(requestOptions.body)
  }
  return fetch(url, requestOptions)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((err) => ({ err }))
}
