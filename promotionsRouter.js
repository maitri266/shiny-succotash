const express = require('express');

const promotionsRouter = express.Router();
promotionsRouter.use(express.json());

promotionsRouter
	.route('/')
	.get((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Getting all the promotions`);
	})
	.post((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Added New promotions to promotions list`);
	})
	.put((req, res, next) => {
		res.statusCode = 403;
		res.setHeader('Content-Type', 'text/html');
		res.end(`You cannot update all promotions at once`);
	})
	.delete((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Deleting all the promotions`);
	});

promotionsRouter
	.route('/:promotionsId')
	.get((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Getting promotion #${JSON.stringify(req.params)}`);
	})
	.post((req, res, next) => {
		res.statusCode = 403;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Forbidden Request | Cannot POST on this endpoint`);
	})
	.put((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Updated promotion #${JSON.stringify(req.params)} `);
	})
	.delete((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Deleted ${JSON.stringify(req.params)} from promotions`);
	});

module.exports = promotionsRouter;
