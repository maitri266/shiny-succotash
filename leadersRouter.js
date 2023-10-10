const express = require('express');

const leadersRouter = express.Router();
leadersRouter.use(express.json());

leadersRouter
	.route('/')
	.get((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Getting all the leaders`);
	})
	.post((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Added New leaders to leaders list`);
	})
	.put((req, res, next) => {
		res.statusCode = 403;
		res.setHeader('Content-Type', 'text/html');
		res.end(`You cannot update all leaders at once`);
	})
	.delete((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Deleting all the leaders`);
	});

leadersRouter
	.route('/:leadersId')
	.get((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Getting Leader #${JSON.stringify(req.params)}`);
	})
	.post((req, res, next) => {
		res.statusCode = 403;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Forbidden Request | Cannot POST on this endpoint`);
	})
	.put((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Updated Leader #${JSON.stringify(req.params)} `);
	})
	.delete((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Deleted ${JSON.stringify(req.params)} from leaders`);
	});
console.log('leadersRouter');

module.exports = leadersRouter;
