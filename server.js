// Setup .env
require('dotenv').config()

// Import express and setup instance
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const path = require('path')
const passport = require('passport')
// Require database services
const { MongoClient, ObjectId } = require('mongodb')
const MongoClientService = require('./backend/services/mongodb-service.js')

app.use( express.static( 'build' ) )
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session({ secret: process.env.githubClientSecret, resave: false, saveUninitialized: false }))

app.use(passport.initialize());
app.use(passport.session());

// Import the public, private, and authentication routes
const passportRoutes = require('./backend/routers/passport-router')
const authenticatedRoutes = require('./backend/routers/authenticated-router')
const publicRoutes = require('./backend/routers/public-router')

// Set paths + routers
app.use('/auth', passportRoutes)
app.use('/api', authenticatedRoutes)
app.use('/', publicRoutes)

// Start listening either on a defined port or 3000
let listener = app.listen(process.env.PORT || 3000, (e) => {
    console.log(`Example app listening at http://localhost:${listener.address().port}`)
})