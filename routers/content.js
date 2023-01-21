const express = require('express')
const content = express.Router()
const auth = require('../middleware/auth')


const { 
    getAllContent,
    createContent,
    getOneContent,
    updateContent,
    deleteContent,
} = require('../controller/content')


content.route('/')
    .get(getAllContent)
    .post(auth ,createContent)

content.route('/:id')
    .get(getOneContent)
    .patch(auth, updateContent)
    .delete(auth, deleteContent)


module.exports = content