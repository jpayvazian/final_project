// Import stuff for Express Router
const express = require('express')
const router = express.Router()

// Import libs for Passport.js auth
const passport = require('passport')
require('../services/passsport-service')
const cookieSession = require('cookie-session')

// Setup cookie session & passport instances
router.use(cookieSession({
    name: 'github-user',
    keys: [process.env.cookieKey1, process.env.cookieKey2],
    maxAge: 24 * 60 * 60 * 1000
}))
router.use(passport.initialize());
router.use(passport.session());
  

// Setup route to authenticate with GitHub - redirects to github.com
router.get( '/github', passport.authenticate('github', {
    scope: [ 'user:email' ]
}))

// Setup callback redirect endpoint - when user authenticates on github.com
// they are redirected here
router.get( '/github/callback', passport.authenticate('github', {
    failureRedirect: '/auth/error'
}), function(req, res) {
    res.redirect('/');
})

// In case of errors, the user is redirected to /auth/error through failureRedirect
router.get('/error', (req, res) => {
    res.writeHeader( 400, { 'Content-Type': 'text/plain' })
    res.end("Could not authenticate you with GitHub, error from OAuth2")
})

// Export the Router for use in server.js
module.exports = router