const { Router } = require('express');
const apiRouter = Router();
const users = require('./users');


apiRouter.use('/users', users);

module.exports = apiRouter;