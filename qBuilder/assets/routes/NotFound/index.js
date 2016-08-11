import NotFoundPage from './components/NotFoundPage'

export default function(injectReducer, loadModule, errorLoading) {
  return {
    path: '*',
    name: 'notfound',
    component: NotFoundPage
  }
}
