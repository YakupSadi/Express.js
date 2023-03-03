const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// DB
require('dotenv').config()
const connectDB = require('./db/connect')

// Middleware
const notFound = require('./middleware/404')
const errorHandler = require('./middleware/error')

// Cookie
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// Routers
const content = require('./routers/content')
const sign_up = require('./routers/sign_up')

// API
app.use('/api/v1', sign_up)
app.use('/api/v1/content', content)

// Error
app.use(notFound)
app.use(errorHandler)

 
const start = async () => {
    try 
    {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => console.log(`Server is listening on port: http:localhost:${port}`))
    }
    catch (err)
    {
        console.log(err)
    }
}

start()
