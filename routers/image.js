const express = require('express')
const image = express.Router()

// Auth
const auth = require('../middleware/auth')


const { 
    getAllImage,
    uploadImage,
    getOneImage,
    editImage,
    deleteImage,
} = require('../controller/image')


image.route('/')
    .get(auth, getAllImage)
    .post(auth, uploadImage)

image.route('/:id')
    .get(auth, getOneImage)
    .patch(auth, editImage)
    .delete(auth, deleteImage)


module.exports = image