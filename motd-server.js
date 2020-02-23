let net = require('net');

let serverLog = require('./lib/serverLog');

let SERVER_PORT = 2003;

let server = net.createServer(function(connection) {
  let clientAddress = connection.remoteAddress;

  serverLog('CONNECT', `Client at ${clientAddress} connected`);

  /*
    1. Read the contents of data/motd.txt into memory
    2. Send the contents do the client using connection.write(...)
    3. Close the connection
  */
});

server.listen(SERVER_PORT, function() {
  serverLog('LISTENING', `Hot-Or-Cold server listening on port ${SERVER_PORT}`);
});
