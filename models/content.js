const mongoose = require('mongoose')


const ContentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLenght: 50,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'Admin',
        required: true,
    }
}, { timestamps: true })


module.exports = mongoose.model('Content', ContentSchema)