const path = require('path')

const paths = {
  app: path.resolve(process.cwd(), 'qBuilder'),
  assets: path.resolve(process.cwd(), 'qBuilder/assets/'),
  build: path.resolve(process.cwd(), 'qBuilder/bundles/')
}

module.exports = paths
