const mongoose = require('mongoose');

const postBoxSchema = mongoose.Schema({
    qrCode: {type: String, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, res: "User", required: true}
});

module.exports = mongoose.model('PostBox', postBoxSchema);