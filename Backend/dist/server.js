import * as http from 'http';
import { app } from './app';
function normalizePort(val) {
    let port = parseInt(val, 10);
    if (port >= 0) {
        // port number
        return port;
    }
    return 3000;
}
var PORT = (process.env.PORT !== undefined) ? normalizePort(process.env.PORT) : 3000;
app.set('port', PORT);
var server = http.createServer(app);
console.log(`Running server on ${PORT}`);
server.listen(PORT);
