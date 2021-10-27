const showInbox = (req, res, next) => {
	res.locals.title = 'inbox';
	res.render('inbox');
};

module.exports = {
	showInbox,
};
