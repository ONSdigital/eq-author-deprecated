import Surveys from './Surveys'
import Editor from './Editor'
import NotFound from './NotFound'

import MainLayout from 'components/layout/MainLayout'

export default function createRoutes(store) {
  return [{
    path: '/',
    onChange: (prevState, nextState, replace) => {
      if (nextState.location.pathname === '/') {
        replace({pathname: '/surveys/'})
      }
    },
    name: 'home',
    breadcrumbName: 'Home',
    component: MainLayout,
    childRoutes: [
      Surveys,
      Editor,
      NotFound,
    ].map(route => route(store))
  }]
}
