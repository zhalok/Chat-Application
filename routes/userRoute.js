const express = require('express');
const userRoute = express.Router();
const userRouteController = require('../controllers/userRouteController');

userRoute.get('/', userRouteController.showUserInfo);

module.exports = userRoute;
