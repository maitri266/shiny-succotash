const express = require('express');

const dishesRouter = express.Router();
dishesRouter.use(express.json());

dishesRouter
	.route('/')
	.get((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Getting all the dishes`);
	})
	.post((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Added New dishes to dishes list`);
	})
	.put((req, res, next) => {
		res.statusCode = 403;
		res.setHeader('Content-Type', 'text/html');
		res.end(`You cannot update all dishes at once`);
	})
	.delete((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Deleting all the dishes`);
	});

dishesRouter
	.route('/:dishesId')
	.get((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Getting dish #${JSON.stringify(req.params)}`);
	})
	.post((req, res, next) => {
		res.statusCode = 403;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Forbidden Request | Cannot POST on this endpoint`);
	})
	.put((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Updated dish #${JSON.stringify(req.params)} `);
	})
	.delete((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Deleted ${JSON.stringify(req.params)} from dishes`);
	});

module.exports = dishesRouter;
