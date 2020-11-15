const { Router } = require('express');
const OrderModel = require('../models/order');
const LoginModel = require('../models/login')

const orderRouter =  Router();

orderRouter.get('/',  async (req, res) => {
    const order = await OrderModel.find({});
    res.send(order);
});

orderRouter.post("/", async (req, res) => {
    const order = new OrderModel(req.body);
    const { email, password } = req.body;
    const user = await LoginModel.findOne({ email }, '+password');
    if (!user) {
        return res.status(401).send({ error: 'User is not found' })
    }
    const isValid = await user.login(password);
    if (isValid) {
        const { _id } = await order.save();
        res.status(201).send({create_order_id: _id, success: true});
    } else {
        return res.status(401).send({ error: 'Invalid password!' })
    }
});

module.exports = orderRouter;