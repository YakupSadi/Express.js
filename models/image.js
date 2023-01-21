const mongoose = require('mongoose');
 

const ImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        unique: true,
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
});

 
module.exports = mongoose.model('Image', ImageSchema)