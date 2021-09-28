const express = require('express')
const router = express.Router()

router.get( '/login', (req, res) => {
    res.writeHeader( 200, { 'Content-Type': 'text/html' })
    res.end('<a href="/auth/github">Login with GitHub</a>')
})

// Export the Router for use in server.js
module.exports = router