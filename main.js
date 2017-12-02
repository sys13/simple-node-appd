var http = require('http')

var config = {
  controllerHostName: 'localhost',
  controllerPort: 8090,
  controllerSslEnabled: false,
  accountName: 'customer1',
  accountAccessKey: 'fb3b0aff-111f-4439-8678-a0efefc5f277',
  applicationName: 'App1',
  tierName: 'Tier1',
  nodeName: 'Node1',
  debug: true,
  libagent: true,
}

var appd = require('appdynamics')
appd.profile(config)

var server = http.createServer((request, response) => {
  var txn = appd.startTransaction('hello')
  txn.end()
  response.writeHead(200, {"Content-Type": "text/plain"})
  response.end("Hello World\n")
})

server.listen(8000)
