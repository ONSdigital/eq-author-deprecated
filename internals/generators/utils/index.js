/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const paths = require(process.cwd() + '/internals/paths')
const fs = require('fs')

const assetPaths = {
  components: paths.assets + '/components',
  containers: paths.assets + '/containers',
  assets: paths.assets
}

const pageComponents = fs.readdirSync(assetPaths.components)
const pageContainers = fs.readdirSync(assetPaths.containers)
const components = pageComponents.concat(pageContainers)

module.exports = {
  paths: assetPaths,
  componentExists: function(comp) {
    return components.indexOf(comp) >= 0
  }
}
