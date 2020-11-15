module.exports = (req, res, next) => {
    const order = req.body;
    if (order.title) {
        req.body.valid = true;
        return next();
    }
    res.status(400).send({
        error: 'Please, fill the order title'
    })
};