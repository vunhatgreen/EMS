const mongoose = require('mongoose')
module.exports = mongoose.model('Info', new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}))