import http from 'http'

import { app } from './app'

function normalizePort(val: string): number {
    let port: number = parseInt(val, 10);

    if (port >= 0) {
      // port number
      return port;
    }
  
    return 3000;
  }

var PORT: number = (process.env.PORT !== undefined) ? normalizePort(process.env.PORT):3000
app.set('port', PORT)

var server = http.createServer(app)

console.log(`Running server on ${PORT}`)

server.listen(PORT)