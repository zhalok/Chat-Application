const showUserInfo = (req, res, next) => {
	console.log(req.body);
	res.render('userPage');
};

module.exports = {
	showUserInfo,
};
