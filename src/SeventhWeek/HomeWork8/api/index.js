const { Router } = require('express');
const apiRouter = Router();

const weather = require("./weather");

apiRouter.use('/', weather);

module.exports = apiRouter;