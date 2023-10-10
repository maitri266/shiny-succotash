const express = require('express');

const waiterRouter = express.Router();
waiterRouter.use(express.json());

waiterRouter
	.route('/')
	.get((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Getting all the waiter data`);
	})
	.post((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Added New waiter to waiter list`);
	})
	.put((req, res, next) => {
		res.statusCode = 403;
		res.setHeader('Content-Type', 'text/html');
		res.end(`You cannot update all waiter at once`);
	})
	.delete((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(`Deleting all the waiter details`);
	});


console.log('waiterRoute');
module.exports = promotionsRouter;
