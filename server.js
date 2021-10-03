// Setup .env
require('dotenv').config()

// Import express and setup instance
const express = require('express')
const app = express()
const path = require('path');

// Require database services
const { MongoClient, ObjectId } = require('mongodb');
const MongoClientService = require('./backend/services/mongodb-service.js')

app.use( express.static( 'build' ) )
// app.use(express.static(path.join(__dirname,"frontend")));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/frontend/login.html");
});

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