var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('mocks/db.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)
server.post('/token', function (req, res, next) {
  req.method = 'GET'
  req.query = req.body
  next()
})

server.delete('/token/:id', function(req, res, next) {
  console.log("Deleting...")
  res.sendStatus(204)
})

server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running')
})
