const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const jsonfile = require('jsonfile')
const dirTree = require('directory-tree')
const path = require('path')
const bodyParser = require('body-parser')
const middlewares = jsonServer.defaults()

const schemaPath = path.resolve(process.cwd(), 'data/schema')

server.use(middlewares)
server.use(bodyParser.json())

const schema = dirTree(schemaPath, ['.json']).children.map((schema) => {
  const schemaJson = jsonfile.readFileSync(`${schemaPath}/${schema.name}`)
  return {
    title: schemaJson.title,
    description: schemaJson.description,
    id: schema.name.replace('.json', ''),
    path: schema.path
  }
})

// Add custom routes before JSON Server router
server.get('/schema', (req, res) => {
  res.jsonp(schema)
})

server.get('/schema/:id', (req, res) => {
  jsonfile.readFile(`${schemaPath}/${req.params.id}.json`, (err, response) => {
    if (err) {
      console.error(err)
      return res.jsonp(err)
    }
    return res.jsonp(response)
  })
})

server.post('/schema/:id', (req, res) => {
  jsonfile.writeFile(`${schemaPath}/${req.params.id}.json`, req.body, {spaces: 2}, (err, response) => {
    if (err) {
      console.error(err)
      return res.jsonp(err)
    }
    return res.jsonp({
      success: true
    })
  })
})

// Use default router
server.use(router)
server.listen(5000, () => {
  console.log('JSON Server is running')
})
