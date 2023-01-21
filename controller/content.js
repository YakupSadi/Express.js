const Content = require('../models/content')
const async = require('../middleware/async')
const { createCustomError } = require('../middleware/custom_error')


const getAllContent = async(async (req, res) => {
    const data = await Content.find({})
    res.status(200).json({ data })
})

const createContent = async(async (req, res) => {
    req.body.createdBy = req.user.userId
    const data = await Content.create(req.body)
    
    res.status(201).json({ data })
})

const getOneContent = async(async (req, res, next) => {
    const { id: dataID } = req.params
    const data = await Content.findOne({ _id: dataID })

    if (!data) { return next(createCustomError(`Not Found Content`)) }

    res.status(200).json({ data })
})

const updateContent = async(async (req, res, next) => {
    const { id: dataID } = req.params
    const data = await Content.findOneAndUpdate({ _id: dataID }, req.body, {
        new: true,
        runValidators: true
    })

    if (!data) { return next(createCustomError(`Not Found Content`)) }

    res.status(200).json({ data })
})

const deleteContent = async(async (req, res, next) => {
    const { id: dataID } = req.params
    const data = await Content.findOneAndDelete({ _id: dataID })
    
    if (!data) { return next(createCustomError(`Not Found Content`)) }

    res.status(200).json({ data })
})


module.exports = {
    getAllContent,
    createContent,
    getOneContent,
    updateContent, 
    deleteContent,
}