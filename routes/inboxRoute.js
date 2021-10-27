const express = require('express');
const inboxRoute = express.Router();

const inboxRouteController = require('../controllers/inboxRouteController');

inboxRoute.get('/', inboxRouteController.showInbox);

module.exports = inboxRoute;
