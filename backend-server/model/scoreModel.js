const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({

    name:{type: String, require:true},
    email:{type: String, require:true, unique: false},
    score:{type:Number}},
    {
        timestamps: {
            type: Date,
            require: true
        }
    });

module.exports = mongoose.model('scores', scoreSchema);