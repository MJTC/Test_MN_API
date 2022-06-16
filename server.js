const jsonServer = require('json-server');
const routes = require('routes.json');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use('/', routes);
server.use(middlewares);
server.use(router);

server.listen(port);