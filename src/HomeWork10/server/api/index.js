const { Router } = require('express');
const apiRouter = Router();

const order = require("./order");
const login = require('./login');

apiRouter.use('/login', login);
apiRouter.use('/order', order);

module.exports = apiRouter;