/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const paths = require(process.cwd() + '/internals/paths')
const fs = require('fs')

const _paths = {
  components: paths.assets + '/components',
  containers: paths.assets + '/containers',
}

const pageComponents = fs.readdirSync(_paths.components)
const pageContainers = fs.readdirSync(_paths.containers)
const components = pageComponents.concat(pageContainers)

module.exports = {
  paths: _paths,
  componentExists: function(comp) {
    return components.indexOf(comp) >= 0
  }
}
