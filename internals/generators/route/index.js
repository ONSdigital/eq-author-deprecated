/**
 * Route Generator
 */

const fs = require('fs')
const utils = require('../utils')

function reducerExists(comp) {
  try {
    fs.accessSync(`${utils.paths.containers}/${comp}/reducer.js`, fs.F_OK)
    return true
  } catch (e) {
    return false
  }
}

module.exports = {
  description: 'Add a route',
  prompts: [{
    type: 'input',
    name: 'component',
    message: 'Which component should the route show?',
    validate: value => {
      if ((/.+/).test(value)) {
        return utils.componentExists(value) ? true : `"${value}" doesn't exist.`
      }

      return 'The path is required'
    },
  }, {
    type: 'input',
    name: 'path',
    message: 'Enter the path of the route.',
    default: '/about',
    validate: value => {
      if ((/.+/).test(value)) {
        return true
      }

      return 'path is required'
    },
  }],

  // Add the route to the routes.js file above the error route
  // TODO smarter route adding
  actions: data => {
    const actions = []
    if (reducerExists(data.component)) {
      actions.push({
        type: 'modify',
        path: '${utils.paths.assets}/routes.js',
        pattern: /(\s{\n\s{6}path: '\*',)/g,
        templateFile: './route/routeWithReducer.hbs',
      })
    } else {
      actions.push({
        type: 'modify',
        path: '${utils.paths.assets}/routes.js',
        pattern: /(\s{\n\s{6}path: '\*',)/g,
        templateFile: './route/route.hbs',
      })
    }

    return actions
  },
}
