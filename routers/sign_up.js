const express = require('express')
const sign_up = express.Router()

// Auth
const auth = require('../middleware/auth')


const { 
    login,
    logout,
    register,
    dashboard,
} = require('../controller/sign_up')


sign_up.route('/login').post(login)
sign_up.route('/logout').post(auth, logout)
sign_up.route('/register').post(register)
sign_up.route('/dashboard').get(auth, dashboard)


module.exports = sign_up