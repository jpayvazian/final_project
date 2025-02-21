module.exports = (req, res, next) => {
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
    console.log(`User ${ip} is logged in: ${req.isAuthenticated()}`)
    if (req.isAuthenticated()) {
        console.log(`User ${ip}: username: ${req.user.username}`)
        res.cookie('githubId', `${req.user.githubId}`)
        return next();
    }
    res.redirect('/')
}