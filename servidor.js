const http = require('http');
const chalk = require('chalk');

const host = 'localhost';
const port = 8080;

const requestListener = function(req, res) {
    res.writeHead(200);
    res.end(JSON.stringify({nombre: 'Adriana', message: 'hola'}));
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(chalk.green(`Servidor corriendo en http://${host}:${port}`));
});