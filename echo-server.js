let net = require('net');

// serverLog is a helper function to print out log messages like:
//   [CONNECT] Client at 127.0.0.1 connected...
// See serverLog.js for how it works
let serverLog = require('./lib/serverLog');

// Two servers can't listen on the same port, so we
// will use a different port for each server.
let SERVER_PORT = 2001;

let server = net.createServer(function(connection) {
  let clientAddress = connection.remoteAddress;
  let promptInput = () => connection.write('Echo server listening for your input:\n');

  promptInput();
  serverLog('CONNECT', `Client at ${clientAddress} connected`);

  // This tells Node what to do whenever we receive data over this connection.
  // The clientData argument contains whatever data the client sent to us.
  connection.on('data', function(clientData) {
    // Use console.log to record when a client sends us data.
    // Use connection.write(...) to send data to the client
    console.log(typeof clientData, clientData);
    let clientDataTrimmed = clientData.toString().trimRight();
    console.log(`Client ${clientAddress} input data: "${clientDataTrimmed}"`); // This puts the ending quotation mark on the next line in the console...
    connection.write('Echoing your input back to you below...\n');
    connection.write(clientData);
    promptInput();
    // Remember, an echo server sends back exactly what was received.
  });
  // Print a log message when a client disconnects
  connection.on('end', function() {
    serverLog('DISCONNECT', `Client ${clientAddress} disconnected`);
  });
});

server.listen(SERVER_PORT, function() {
  serverLog('LISTENING', `Echo server listening on port ${SERVER_PORT}`);
});
