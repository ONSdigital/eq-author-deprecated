import Surveys from './Surveys'
import Editor from './Editor'
import NotFound from './NotFound'

import MainLayout from 'components/layout/MainLayout'

const redirect = (nextState, replace) => {
  if (nextState.location.pathname === '/') {
    replace({pathname: '/surveys/'})
  }
}

export default function createRoutes(store) {
  return [{
    path: '/',
    onEnter: (nextState, replace) => redirect(nextState, replace),
    onChange: (prevState, nextState, replace) => redirect(nextState, replace),
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
