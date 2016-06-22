export default function(injectReducer, loadModule, errorLoading) {
  return {
    path: '*',
    name: 'notfound',
    getComponent(nextState, cb) {
      System.import('./components/NotFoundPage')
        .then(loadModule(cb))
        .catch(errorLoading)
    }
  }
}
