const mongoose = require('mongoose')
module.exports = mongoose.model('Department', new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}))