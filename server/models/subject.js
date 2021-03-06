const mongoose = require('mongoose')
module.exports = mongoose.model('Subject', new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    credit: {
        type: Number,
        required: true
    }
}))