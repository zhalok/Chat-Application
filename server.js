const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const exp = require('constants');
const notFoundhandler = require('./middlewares/notFoundHandler');

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

app.all('/', notFoundhandler);

app.use((err, req, res, next) => {
	console.log(err);
	res.render('error', {
		bodyText: 'there was an error',
		title: 'Error Page',
	});
});

app.listen(process.env.PORT, () => {
	console.log('server started at ' + process.env.PORT);
});
