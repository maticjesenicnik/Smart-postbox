const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const delivaryManShcema = mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
});

delivaryManShcema.plugin(uniqueValidator);
module.exports = mongoose.model("DelivaryMan", delivaryManShcema)