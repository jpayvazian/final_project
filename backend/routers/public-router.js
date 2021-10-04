const express = require('express')
const router = express.Router()
const path = require('path')

router.get("/", (req, res) => {
    console.log(req.user)
    if (req.user) {
        res.redirect('/room')
    } else {
        res.sendFile(path.resolve(__dirname + "/../../build/login.html"))
    }
})

router.get("/room", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/../../build/room.html"))
})

// Export the Router for use in server.js
module.exports = router