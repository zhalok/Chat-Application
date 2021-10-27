const showUserInfo = (req, res, next) => {
	res.locals.title = 'users';
	res.render('users');
};

module.exports = {
	showUserInfo,
};
