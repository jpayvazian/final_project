const express = require('express')
const router = express.Router()

const passportAuthMiddleware = require('../services/passport-auth')

router.get('/room/create', passportAuthMiddleware, (req, res) => {
    res.writeHeader( 400, { 'Content-Type': 'text/plain' })
    res.end("Missing implementation")
})
router.get('/room/delete', passportAuthMiddleware, (req, res) => {
    res.writeHeader( 400, { 'Content-Type': 'text/plain' })
    res.end("Missing implementation")
})
router.get('/room/update', passportAuthMiddleware, (req, res) => {
    res.writeHeader( 400, { 'Content-Type': 'text/plain' })
    res.end("Missing implementation")
})

router.get('/leaderboard', passportAuthMiddleware, (req, res) => {
    res.writeHeader( 400, { 'Content-Type': 'text/plain' })
    res.end("Missing implementation")
})

router.get('/user/get', passportAuthMiddleware, (req, res) => {
    res.writeHeader( 400, { 'Content-Type': 'text/plain' })
    res.end("Missing implementation")
})
router.get('/user/update', passportAuthMiddleware, (req, res) => {
    res.writeHeader( 400, { 'Content-Type': 'text/plain' })
    res.end("Missing implementation")
})


// Export the Router for use in server.js
module.exports = router