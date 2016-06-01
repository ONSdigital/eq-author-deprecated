const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const jsonfile = require('jsonfile')
const dirTree = require('directory-tree')

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

const schemas = dirTree('schemas', ['.json']).children.map((schema) => {
  const schemaJson = jsonfile.readFileSync(`schemas/${schema.name}`)

  console.log(schema)

  return {
    title: schemaJson.title,
    description: schemaJson.description,
    id: schema.name.replace('.json', ''),
    path: schema.path
  }
})

// Add custom routes before JSON Server router
server.get('/schemas', (req, res) => {
  res.jsonp(schemas)
})

server.get('/schemas/:id', (req, res) => {
  jsonfile.readFile(`schemas/${req.params.id}.json`, (err, response) => {
    if (err) {
      return res.jsonp(err)
    }
    return res.jsonp(response)
  })
})

// Use default router
server.use(router)
server.listen(5000, () => {
  console.log('JSON Server is running')
})
