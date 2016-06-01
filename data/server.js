var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()
var jsonfile = require('jsonfile')

var dirTree = require('directory-tree')

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/schemas', function(req, res) {
  res.jsonp(dirTree('schemas', ['.json']).children.map((item) => {
    return Object.assign(item, { id: item.name.replace('.json', '') })
  }))
})

server.get('/schemas/:id', (req, res) => {
  jsonfile.readFile(`schemas/${req.params.id}.json`, function(err, obj) {
    if (err) {
      return res.jsonp(err)
    }
    return res.jsonp(obj)
  })
})

// Use default router
server.use(router)
server.listen(5000, function() {
  console.log('JSON Server is running')
})
