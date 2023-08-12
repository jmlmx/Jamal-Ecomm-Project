module.exports = function(req, res, next) {
    if(!req.user) return res.status(401).json('Unauthorized User') // check to see if a user has logged in, that user being designated by req.user from the login ctrl
    next()
}