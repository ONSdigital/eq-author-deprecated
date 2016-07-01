import Layouts from './components/Layouts'
import SidebarGridLeft from './components/SidebarGridLeft'
import SidebarGridRight from './components/SidebarGridRight'

export default function(injectReducer, injectSagas, loadModule, errorLoading) {
  return {
    name: 'layouts',
    path: '/layouts',
    component: Layouts,
    indexRoute: {
      component: Layouts
    },
    childRoutes: [{
      name: 'sidebarGridLeft',
      path: 'sidebar-grid-left',
      component: SidebarGridLeft
    }, {
      name: 'sidebarGridRight',
      path: 'sidebar-grid-right',
      component: SidebarGridRight
    }]
  }
}
