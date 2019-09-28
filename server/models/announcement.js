const mongoose = require('mongoose')
module.exports = mongoose.model('Announcement', new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    group: {
        type: Number,
        required: true
    },
    content: {
        type: String
    }
}))