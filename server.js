const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const api = require('./server/routes/api');

const app = express();

// Parser for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static paths to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set routes for apis
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

// Get port from environment and set it for express server to use
const port = process.env.PORT || '5000';
app.set('port', port);

// Create server
const server = http.createServer(app);
server.listen(port);

// Catch any errors in starting server
server.on('error', onError);
server.on('listening', onListening);

function onError(error){
  if(error.syscall !== 'listen'){
    throw error;
  }
  // Handle specific errors with friendly error messages
  switch(error.code){
    case 'EACCES':
      console.log(`port: ${port}, requires elevated previlages`);
      process.exit(1);
      break
    case 'EADDRINUSE':
      console.log(`port: ${port}, is already in use`);
      process.exit(1);
      break
    default:
      throw error;
  }
}

function onListening(){
  console.log(`server running on localhost:${port}`)
}
