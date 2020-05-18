const mongoose = require('mongoose');

const postBoxSchema = mongoose.Schema({
    qrCode: {type: String, required: true},
    opened: {type: Boolean, required: true},
    activationCode: {type: String, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, res: "User"}
});

module.exports = mongoose.model('PostBox', postBoxSchema);