const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: false
    },
    score: {
        type: Number,
        default: 0
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;