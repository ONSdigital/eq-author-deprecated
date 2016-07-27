import Surveys from './Surveys'
import Editor from './Editor'
import Layouts from './Layouts'
import NotFound from './NotFound'

import MainLayout from 'components/layout/MainLayout'

import { getHooks } from 'utils/hooks'

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err) // eslint-disable-line no-console
}

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default)
}

export default function createRoutes(store) {
  const { injectReducer, injectSagas } = getHooks(store)

  return [{
    path: '/',
    name: 'layout',
    breadcrumbName: 'Home',
    component: MainLayout,
    childRoutes: [
      Surveys,
      Editor,
      Layouts,
      NotFound,
    ].map(route => route(injectReducer, injectSagas, loadModule, errorLoading))
  }]
}
