// Setup .env
require('dotenv').config()

// Import express and setup instance
const express = require('express')
const app = express()

// Import the public, private, and authentication routes
const passportRoutes = require('./routers/passport-router')
const authenticatedRoutes = require('./routers/authenticated-router')
const publicRoutes = require('./routers/public-router')

// Set paths + routers
app.use('/auth', passportRoutes)
app.use('/', authenticatedRoutes)
app.use('/public', publicRoutes)

// Start listening either on a defined port or 3000
let listener = app.listen(process.env.PORT || 3000, (e) => {
    console.log(`Example app listening at http://localhost:${listener.address().port}`)
})