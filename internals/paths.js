const path = require('path')

const paths = {
  app: path.resolve(process.cwd(), 'dahl'),
  assets: path.resolve(process.cwd(), 'dahl/assets/'),
  build: path.resolve(process.cwd(), 'dahl/bundles/')
}

module.exports = paths
