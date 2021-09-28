const express = require('express')
const router = express.Router()

const passportAuthMiddleware = require('../services/passport-auth')

router.put('/room', passportAuthMiddleware, (req, res) => {
    res.writeHeader( 400, { 'Content-Type': 'text/plain' })
    res.end("Missing implementation")
})
router.delete('/room', passportAuthMiddleware, (req, res) => {
    res.writeHeader( 400, { 'Content-Type': 'text/plain' })
    res.end("Missing implementation")
})
router.post('/room', passportAuthMiddleware, (req, res) => {
    res.writeHeader( 400, { 'Content-Type': 'text/plain' })
    res.end("Missing implementation")
})
router.get('/room', passportAuthMiddleware, (req, res) => {
    res.writeHeader( 400, { 'Content-Type': 'text/plain' })
    res.end("Missing implementation")
})

router.get('/leaderboard', passportAuthMiddleware, (req, res) => {
    res.writeHeader( 400, { 'Content-Type': 'text/plain' })
    res.end("Missing implementation")
})

router.get('/user', passportAuthMiddleware, (req, res) => {
    res.writeHeader( 400, { 'Content-Type': 'text/plain' })
    res.end("Missing implementation")
})
router.post('/user', passportAuthMiddleware, (req, res) => {
    res.writeHeader( 400, { 'Content-Type': 'text/plain' })
    res.end("Missing implementation")
})


// Export the Router for use in server.js
module.exports = router