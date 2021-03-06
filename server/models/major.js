const mongoose = require('mongoose')
module.exports = mongoose.model('Major', new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }
}))