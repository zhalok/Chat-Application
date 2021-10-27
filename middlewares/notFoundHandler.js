var createError = require('http-errors');

const notFoundHandler = (req, res, next) => {
	// console.log(createError(404, { hello: 'not found handler' }));
	next(createError(404, { hello: 'not found handler' }));
};

module.exports = notFoundHandler;
