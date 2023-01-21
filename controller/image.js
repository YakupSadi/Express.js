const Image = require('../models/image')
const async = require('../middleware/async')
const { createCustomError } = require('../middleware/custom_error')

// Multer
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


const getAllImage = async( async(req, res, next) => {

})

const uploadImage =  async(  upload.single('image'), async(req, res, next) => {
    const image = {
        name: req.body.name,
        title: req.body.title,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }

    const data = await Image.create(image)
    
    res.status(201).json({ data })
})

const getOneImage = async( async(req, res, next) => {

})

const editImage = async( async(req, res, next) => {
    
})

const deleteImage = async( async(req, res, next) => {
    
})


module.exports = {
    getAllImage,
    uploadImage,
    getOneImage,
    editImage,
    deleteImage,
}