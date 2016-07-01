import Layouts from './components/Layouts'
import SidebarGridLeft from './components/SidebarGridLeft'
import SidebarGridRight from './components/SidebarGridRight'
import FullscreenGrid from './components/FullscreenGrid'
import ContentPanels from './components/ContentPanels'
import Susi from './components/Susi'

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
    }, {
      name: 'fullscreenGrid',
      path: 'fullscreen-grid',
      component: FullscreenGrid
    }, {
      name: 'content-panels',
      path: 'content-panels/:variant',
      component: ContentPanels
    }, {
      name: 'susi',
      path: 'susi',
      component: Susi
    }]
  }
}
