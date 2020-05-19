const mongoose = require('mongoose');

const packageSchema = mongoose.Schema({
    qrCode: {type: String, required: true},
    weight: {type: Number, required: true},
    deliverd: {type: Boolean, required: true},
    ownersUsername: {type: String, required: true}
});

module.exports = mongoose.model('Package', packageSchema);