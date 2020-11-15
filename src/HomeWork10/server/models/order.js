const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const SALT_FACTOR = 10;

const OrderSchema = new Schema({
    email:  {
        type: String,
        required: true,
    },
    password:  {
        type: String,
        required: true,
        select: false,
        set: rawPassword => bcrypt.hashSync(rawPassword, SALT_FACTOR)
    },
    first_name:  {
        type: String,
        select: true,
    },
    last_name: {
        type: String,
        select: true,
    },
    tel:  {
        type: Number,
        select: true,
    },
    bankId: {
        type: String,
        select: false,
    },
    nightStay: {
        type: Number,
        select: true,
    },
    adults: {
        type: String,
        select: true,
    },
});

OrderSchema.methods.login = function (password) {
    return bcrypt.compare(password, this.password).then((result) => result)
};

const OrderModel = mongoose.model('order', OrderSchema);

module.exports = OrderModel;