var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()
var jsonfile = require('jsonfile')
var file = 'schema/schema_1.json'

var dirTree = require('directory-tree')

// jsonfile.readFile(file, (err, obj) => {
//   if (err) {
//     throw new Error(err)
//   } else {
//     console.log(obj)
//   }
// })

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/schemas', function(req, res) {
  var tree = dirTree('schema', ['.json'])
  res.jsonp(tree.children)
})

server.use(function(req, res, next) {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

// Use default router
server.use(router)
server.listen(5000, function() {
  console.log('JSON Server is running')
})
