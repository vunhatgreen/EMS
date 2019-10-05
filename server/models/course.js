const mongoose = require('mongoose')
module.exports = mongoose.model('Course', new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    prerequisite: {
        type: String,
        required: false
    },
    parallel: {
        type: String,
        required: false
    },
    lecturer: {
        type: String,
        required: true
    }
}))