const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

const notFoundhandler = require('./middlewares/notFoundHandler');
const loginRoute = require('./routes/loginRoute');
const userRoute = require('./routes/userRoute');
const inboxRoute = require('./routes/inboxRoute');

const app = express();
dotenv.config();
app.set('view engine', 'ejs');

mongoose
	.connect(process.env.CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('connected to database');
	})
	.catch((err) => {
		console.log(err);
	});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.get('/', loginRoute);
app.use('/login', loginRoute);
app.use('/users', userRoute);
app.use('/inbox', inboxRoute);

app.use(notFoundhandler);

app.use((err, req, res, next) => {
	res.locals.error = err;
	res.locals.title = 'Error Page';

	res.render('error');
});

app.listen(process.env.PORT, () => {
	console.log('server started at ' + process.env.PORT);
});
