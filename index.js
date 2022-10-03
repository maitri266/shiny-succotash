const express = require('express');
const http = require('http');
const morgan = require('morgan');

const dishesRouter = require('./routers/dishesRouter');
const leadersRouter = require('./routers/leadersRouter');
const promotionsRouter = require('./routers/promotionsRouter');

const hostname = 'localhost';
const port = 9000;

const app = express();

app.use(express.json()); //for parsing the request body in json
app.use(morgan('tiny')); //for logging
app.use(express.static(__dirname + '/public'));
app.use('/dishes', dishesRouter); //handling routes for dishes
app.use('/leaders', leadersRouter); //handling routes for leaders
app.use('/promotions', promotionsRouter); //handling routes for promotions
app.use('/waiter', waiterRouter); //handling routes for promotions

//route that handles other requests
app.all('/*', (req, res, next) => {
	res.statusCode = 404;
	res.setHeader('Content-Type', 'text/html');
	res.end(
		'<html><body><h1> 404<br/>Cannot find what you are looking for </h1></body></html>'
	);
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
	console.log('Server running on ', { hostname, port });
});

app.use(express.json()); //for parsing the request body in json
app.use(morgan('tiny')); //for logging
app.use(express.static(__dirname + '/public'));
app.use('/dishes', dishesRouter); //handling routes for dishes
app.use('/leaders', leadersRouter); //handling routes for leaders
app.use('/promotions', promotionsRouter); //handling routes for promotions
app.use('/waiter', waiterRouter); //handling routes for promotions
