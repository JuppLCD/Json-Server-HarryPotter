const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db/db.json');
// const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

const corsOptions = {
	origin: 'https://harry-potter-react-ts.netlify.app',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

server.use(cors(corsOptions));
// server.use(middlewares);
server.use(router);

server.listen(port);
