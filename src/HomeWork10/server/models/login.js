const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const SALT_FACTOR = 10;


const LoginSchema = new Schema({
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
});

LoginSchema.methods.login = function (password) {
    return bcrypt.compare(password, this.password).then(result => result)
};

const LoginModel = mongoose.model('login', LoginSchema);

module.exports = LoginModel;