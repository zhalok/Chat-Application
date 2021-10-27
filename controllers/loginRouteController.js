const getLoginPage = (req, res, next) => {
	// console.log('in the login page route');
	console.log('in the login page route ');
	res.locals.title = 'login page';
	res.render('index');
	// res.end();
};

module.exports = {
	getLoginPage,
};
