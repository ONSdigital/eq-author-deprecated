import { getHooks } from 'utils/hooks'

import SchemaList from './SchemaList'
import Editor from './Editor'
import NotFound from './NotFound'

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err) // eslint-disable-line no-console
}

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default)
}

export default function createRoutes(store) {
  const { injectReducer } = getHooks(store)

  return [
    SchemaList,
    Editor,
    NotFound
  ].map(route => route(injectReducer, loadModule, errorLoading))
}
