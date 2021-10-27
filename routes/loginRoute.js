const express = require('express');
const loginRoute = express.Router();

const loginRouteController = require('../controllers/loginRouteController');

loginRoute.get('/', loginRouteController.getLoginPage);

module.exports = loginRoute;
