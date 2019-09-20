const mongoose = require('mongoose')
export default mongoose.model('Faculty', new mongoose.Schema({
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