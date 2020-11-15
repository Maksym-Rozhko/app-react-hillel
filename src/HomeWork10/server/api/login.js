const LoginModel = require('../models/login');
const Router = require('express').Router;

const authRouter = Router();

authRouter.get('/is_exist', async (req, res) => {
    const resultEmail = await LoginModel.exists({ email: req.query.email });
    res.send({ is_exist: resultEmail})
});

authRouter.post("/", async (req, res) => {
        const user = new LoginModel(req.body);
        res.status(201).send(user.save());
    }
);

module.exports = authRouter;