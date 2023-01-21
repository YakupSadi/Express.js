const User = require('../models/user')
const { CustomError } = require('../middleware/custom_error');


const register = async (req, res, next) => {
    const { email, password } = req.body

    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) { return next(new CustomError('Email Already Exist', 400)) }

    const user = await User.create({ email, password })
    const token = user.createJWT()

    const time = 1000 * 60 * 60 * 24 * 30
    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + time),
    })
    
    res.status(201).json({ user: { email: user.email }, token })
}

const login = async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) { return next(new CustomError('Please Provide Email or Password', 400)) }

    const user = await User.findOne({ email })
    if (!user) { return next(new CustomError('Not Found User', 401)) }

    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) { return next(new CustomError('Password is Wrong...', 401)) }

    const token = user.createJWT()

    const time = 1000 * 60 * 60 * 24 * 30
    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + time),
    })

    res.status(200).json({ user: { email: user.email }, token })
}

const logout = async (req, res, next) => {
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now()),
    });
    res.status(200).json({ msg: 'User Logged Out!' });
}

const dashboard = async (req, res) => {
    res
        .status(200)
        .json({ msg: "Hi" })
}


module.exports = { 
    login,
    logout,
    register,
    dashboard, 
}