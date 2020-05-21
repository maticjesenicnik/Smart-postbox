const mongoose = require('mongoose');

const packageSchema = mongoose.Schema({
    qrCode: {type: String, required: true},
    weight: {type: Number, required: true},
    deliverd: {type: Boolean, required: true},
    ownersId: {type: mongoose.Schema.Types.ObjectId, res:"User"},
    postBoxId: {type: mongoose.Schema.Types.ObjectId, res:"PostBox"}
});

module.exports = mongoose.model('Package', packageSchema);