var appd = require('appdynamics')
var sleep = require('sleep')

var NUM_OF_REQUESTS_PER_BT = 1000

var config = {
  controllerHostName: 'localhost',
  controllerPort: 8090,
  controllerSslEnabled: false,
  accountName: 'customer1',
  accountAccessKey: '726d7e2d-afce-4feb-b443-db12a5fd30aa',
  applicationName: 'App1',
  tierName: 'Tier1',
  nodeName: 'Node1',
  debug: true,
}

// connect to the controller
appd.profile(config)

// generate traffic for each bt
for (let i = 0; i < NUM_OF_REQUESTS_PER_BT; i += 1) {
  console.log(`${new Date()} Starting Transaction - hello`)
  var txn = appd.startTransaction('hello')
  txn.end()
  sleep.sleep(1)
}
